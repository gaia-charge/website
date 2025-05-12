import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import { JSDOM } from 'jsdom';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, '../src/blog');
const ROUTES_DIR = path.join(__dirname, '../src/routes');
const SITEMAP_PATH = path.join(__dirname, '../static/sitemap.xml');
const BASE_URL = 'https://gaiacharge.com';

// Configure marked options
marked.setOptions({
    gfm: true, // GitHub Flavored Markdown
    breaks: true, // Convert line breaks to <br>
    headerIds: true, // Add IDs to headers
    mangle: false, // Don't escape HTML
    sanitize: false // Allow HTML in the markdown
});

async function getAllMarkdownFiles(dir) {
    const files = await fs.readdir(dir, { withFileTypes: true });
    const markdownFiles = [];

    for (const file of files) {
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) {
            markdownFiles.push(...await getAllMarkdownFiles(fullPath));
        } else if (file.name.endsWith('.md')) {
            markdownFiles.push(fullPath);
        }
    }

    return markdownFiles;
}

async function processMarkdownFile(filePath) {
    const content = await fs.readFile(filePath, 'utf-8');
    const { data: frontmatter, content: markdownContent } = matter(content);

    // Get the relative path from the blog directory
    const relativePath = path.relative(BLOG_DIR, filePath);
    const language = path.dirname(relativePath);
    const url = `/${language}/blog/${frontmatter.slug}`;

    // Convert markdown to HTML
    const htmlContent = marked(markdownContent);

    return {
        url,
        frontmatter,
        content: htmlContent,
        language
    };
}

async function updateSitemap(posts) {
    try {
        // Read existing sitemap
        const sitemapContent = await fs.readFile(SITEMAP_PATH, 'utf-8');

        // Parse the XML content
        const dom = new JSDOM(sitemapContent, { contentType: 'text/xml' });
        const xmlDoc = dom.window.document;
        const urlset = xmlDoc.getElementsByTagName('urlset')[0];

        // Remove existing blog entries
        const existingUrls = urlset.getElementsByTagName('url');
        const urlsToRemove = [];
        for (const url of existingUrls) {
            const loc = url.getElementsByTagName('loc')[0];
            if (loc && (loc.textContent.includes('/en/blog') || loc.textContent.includes('/es/blog'))) {
                urlsToRemove.push(url);
            }
        }
        urlsToRemove.forEach(url => url.remove());

        // Add blog index pages
        const languages = [...new Set(posts.map(post => post.language))];
        for (const lang of languages) {
            const url = xmlDoc.createElement('url');

            const loc = xmlDoc.createElement('loc');
            loc.textContent = `${BASE_URL}/${lang}/blog`;
            url.appendChild(loc);

            // Add alternate language links
            for (const altLang of languages) {
                const link = xmlDoc.createElementNS('http://www.w3.org/1999/xhtml', 'link');
                link.setAttribute('rel', 'alternate');
                link.setAttribute('hreflang', altLang);
                link.setAttribute('href', `${BASE_URL}/${altLang}/blog`);
                url.appendChild(link);
            }

            const lastmod = xmlDoc.createElement('lastmod');
            lastmod.textContent = new Date().toISOString().split('T')[0];
            url.appendChild(lastmod);

            const changefreq = xmlDoc.createElement('changefreq');
            changefreq.textContent = 'weekly';
            url.appendChild(changefreq);

            const priority = xmlDoc.createElement('priority');
            priority.textContent = '0.8';
            url.appendChild(priority);

            urlset.appendChild(url);
        }

        // Add individual blog posts
        for (const post of posts) {
            const url = xmlDoc.createElement('url');

            const loc = xmlDoc.createElement('loc');
            loc.textContent = `${BASE_URL}${post.url}`;
            url.appendChild(loc);

            const lastmod = xmlDoc.createElement('lastmod');
            lastmod.textContent = post.frontmatter.date || new Date().toISOString().split('T')[0];
            url.appendChild(lastmod);

            const changefreq = xmlDoc.createElement('changefreq');
            changefreq.textContent = 'monthly';
            url.appendChild(changefreq);

            const priority = xmlDoc.createElement('priority');
            priority.textContent = '0.7';
            url.appendChild(priority);

            urlset.appendChild(url);
        }

        // Format the XML content
        const formatXML = (xml) => {
            const PADDING = ' '.repeat(2);
            const reg = /(>)(<)(\/*)/g;
            let pad = 0;

            xml = xml.replace(reg, '$1\r\n$2$3');

            return xml.split('\r\n').map((node, index) => {
                let indent = 0;
                if (node.match(/.+<\/\w[^>]*>$/)) {
                    indent = 0;
                } else if (node.match(/^<\/\w/)) {
                    if (pad !== 0) {
                        pad -= 1;
                    }
                } else if (node.match(/^<\w([^>]*[^\/])?>.*$/)) {
                    indent = 1;
                } else {
                    indent = 0;
                }

                pad += indent;

                return PADDING.repeat(pad - indent) + node;
            }).join('\r\n');
        };

        // Get all URLs and format them
        const allUrls = Array.from(urlset.getElementsByTagName('url'));
        const formattedUrls = allUrls.map(url => formatXML(url.outerHTML)).join('\n');

        // Convert back to string with proper XML declaration and namespaces
        const updatedSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${formattedUrls}
</urlset>`;

        // Write the updated sitemap
        await fs.writeFile(SITEMAP_PATH, updatedSitemap);
        console.log('Sitemap updated successfully!');
    } catch (error) {
        console.error('Error updating sitemap:', error);
    }
}

async function generateBlogPages() {
    try {
        // Get all markdown files
        const markdownFiles = await getAllMarkdownFiles(BLOG_DIR);
        const posts = await Promise.all(markdownFiles.map(processMarkdownFile));

        // Update sitemap with blog entries
        await updateSitemap(posts);

        // Group posts by language
        const postsByLang = posts.reduce((acc, post) => {
            if (!acc[post.language]) {
                acc[post.language] = [];
            }
            acc[post.language].push(post);
            return acc;
        }, {});

        // Generate blog pages for each language
        for (const [lang, langPosts] of Object.entries(postsByLang)) {
            // Create the blog directory for this language
            const langBlogDir = path.join(ROUTES_DIR, lang, 'blog');
            await fs.mkdir(langBlogDir, { recursive: true });

            // Generate index page
            const pageContent = `<!--
    This file was automatically generated by the blog generator script.
    DO NOT EDIT THIS FILE DIRECTLY.
    To regenerate, run: npm run blog:generate
-->

<script>
    export let data;
    import { _, isLoading } from "svelte-i18n";
    import Nav from "../../../components/Nav.svelte";
    import Footer from "../../../components/Footer.svelte";
    import green_arrow_right from "$lib/assets/svg/green_arrow_right.svg";
    const posts = ${JSON.stringify(langPosts, null, 2)};
</script>

<svelte:head>
{#if !$isLoading}
  <title>{$_("blog.index", {
      default: "Gaia Charge Blog",
    })}</title>
{/if}
  <link rel="canonical" href="https://gaiacharge.com/${lang}/blog" />
</svelte:head>

<Nav />

{#if !$isLoading}
  <div>
    <div class="headline z-40 text-center">
      <h1>
        {$_("blog.index", {
            default: "Gaia Charge Blog",
        })}
      </h1>
    </div>
    <div class="posts-list mx-auto">
        {#each posts as post}
            <article class="post-card mx-auto mt-10 flex flex-row gap-4">
                <img src={green_arrow_right} class="inline-block fill-green" alt="To" />
                <div>
                    <h2 class="text-2xl font-serif"><a href="{post.url}">{post.frontmatter.title}</a></h2>
                    {#if post.frontmatter.date}
                        <time datetime={post.frontmatter.date}>{new Date(post.frontmatter.date).toLocaleDateString()}</time>
                    {/if}
                    {#if post.frontmatter.description}
                        <p>{post.frontmatter.description}</p>
                    {/if}
                </div>
            </article>
        {/each}
    </div>
  </div>
{/if}

<Footer />

<style lang="postcss">
  .headline {
    padding-top: calc(179 / var(--ratio));
    padding-left: calc(380 / var(--ratio));
    padding-right: calc(380 / var(--ratio));
  }

  .headline h1 {
    font-family: theme("fontFamily.serif");
    font-size: calc(52 / var(--ratio));
    font-weight: 500;
    line-height: calc(57 / var(--ratio));
  }

  @media only screen and (max-width: 431px) {
    .headline {
      padding-top: 45%;
      padding-left: calc(200 / var(--ratio));
      padding-right: calc(200 / var(--ratio));
    }
  }

  .posts-list {
      min-height: 50vh;
      max-width: calc(1008 / var(--ratio));
  }

  p {
    font-size: calc(18 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    padding: calc(20 / var(--ratio));
    font-weight: 300;
  }
</style>
`;

            await fs.writeFile(path.join(langBlogDir, '+page.svelte'), pageContent);

            // Generate individual blog post pages
            for (const post of langPosts) {
                const postDir = path.join(langBlogDir, post.frontmatter.slug);
                await fs.mkdir(postDir, { recursive: true });

                const postContent = `<!--
    This file was automatically generated by the blog generator script.
    DO NOT EDIT THIS FILE DIRECTLY.
    To regenerate, run: npm run blog:generate
-->

<script>
    import { _, isLoading } from "svelte-i18n";
    import Nav from "../../../../components/Nav.svelte";
    import Footer from "../../../../components/Footer.svelte";
    export let data;
    const post = ${JSON.stringify(post, null, 2)};
</script>

<svelte:head>
{#if !$isLoading}
  <title>{post.frontmatter.title} - {$_("blog.index", {
      default: "Gaia Charge Blog",
    })}</title>
{/if}
  <link rel="canonical" href="https://gaiacharge.com/${lang}/blog/${post.frontmatter.slug}" />
</svelte:head>

<Nav />

{#if !$isLoading}
  <article>
    <div class="headline z-40 text-center">
      <h1>
        {post.frontmatter.title}
      </h1>
      {#if post.frontmatter.date}
       <time datetime={post.frontmatter.date}>{new Date(post.frontmatter.date).toLocaleDateString()}</time>
      {/if}
    </div>
    <div class="post mx-auto">
        {@html post.content}
    </div>
  </article>
{/if}

<Footer />

<style lang="postcss">
  .headline {
    padding-top: calc(179 / var(--ratio));
    padding-left: calc(380 / var(--ratio));
    padding-right: calc(380 / var(--ratio));
  }

  .headline h1 {
    font-family: theme("fontFamily.serif");
    font-size: calc(52 / var(--ratio));
    font-weight: 500;
    line-height: calc(57 / var(--ratio));
  }

  @media only screen and (max-width: 431px) {
    .headline {
      padding-top: 45%;
      padding-left: calc(200 / var(--ratio));
      padding-right: calc(200 / var(--ratio));
    }
  }

  .post {
      min-height: 50vh;
      max-width: calc(1008 / var(--ratio));
  }

  :global(p) {
    font-size: calc(18 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    padding: calc(20 / var(--ratio));
    font-weight: 300;
  }

  :global(blockquote) {
    background-color: #fff;
    padding: calc(20 / var(--ratio));
    font-style: italic;
    font-family: "New Spirit";
    border-left: 4px solid #65D45C;
  }
</style>
`;

                await fs.writeFile(path.join(postDir, '+page.svelte'), postContent);
            }
        }

        console.log('Blog pages generated successfully!');
    } catch (error) {
        console.error('Error generating blog pages:', error);
    }
}

generateBlogPages();
