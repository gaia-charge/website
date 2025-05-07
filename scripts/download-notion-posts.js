import { Client } from '@notionhq/client';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Function to convert Notion blocks to Markdown
async function blocksToMarkdown(blocks) {
  let markdown = '';
  
  for (const block of blocks) {
    switch (block.type) {
      case 'paragraph':
        if (block.paragraph.rich_text.length > 0) {
          markdown += block.paragraph.rich_text.map(text => text.plain_text).join('') + '\n\n';
        } else {
          markdown += '\n';
        }
        break;
      case 'heading_1':
        markdown += '# ' + block.heading_1.rich_text.map(text => text.plain_text).join('') + '\n\n';
        break;
      case 'heading_2':
        markdown += '## ' + block.heading_2.rich_text.map(text => text.plain_text).join('') + '\n\n';
        break;
      case 'heading_3':
        markdown += '### ' + block.heading_3.rich_text.map(text => text.plain_text).join('') + '\n\n';
        break;
      case 'bulleted_list_item':
        markdown += '- ' + block.bulleted_list_item.rich_text.map(text => text.plain_text).join('') + '\n';
        break;
      case 'numbered_list_item':
        markdown += '1. ' + block.numbered_list_item.rich_text.map(text => text.plain_text).join('') + '\n';
        break;
      case 'code':
        markdown += '```' + block.code.language + '\n' + 
                   block.code.rich_text.map(text => text.plain_text).join('') + 
                   '\n```\n\n';
        break;
      case 'image':
        if (block.image.type === 'external') {
          markdown += `![${block.image.caption?.[0]?.plain_text || 'Image'}](${block.image.external.url})\n\n`;
        }
        break;
      case 'quote':
        markdown += '> ' + block.quote.rich_text.map(text => text.plain_text).join('') + '\n\n';
        break;
    }
  }
  
  return markdown;
}

// Function to get all blocks for a page
async function getAllBlocks(blockId) {
  const blocks = [];
  let cursor = undefined;
  
  while (true) {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
    });
    
    blocks.push(...response.results);
    
    if (!response.has_more) {
      break;
    }
    
    cursor = response.next_cursor;
  }
  
  return blocks;
}

// Main function to download and convert posts
async function downloadNotionPosts() {
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
    console.error('Please set NOTION_TOKEN and NOTION_DATABASE_ID environment variables');
    process.exit(1);
  }

  try {
    // Query the database
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    // Create blog directories if they don't exist
    const blogBaseDir = path.join(__dirname, '..', 'src', 'blog');
    const blogEnDir = path.join(blogBaseDir, 'en');
    const blogEsDir = path.join(blogBaseDir, 'es');
    await fs.mkdir(blogEnDir, { recursive: true });
    await fs.mkdir(blogEsDir, { recursive: true });

    // Process each page
    for (const page of response.results) {
      // Extract properties
      const title = page.properties.Title?.title?.[0]?.plain_text || 'Untitled';
      const publishedDate = page.properties['Published Date']?.date?.start;
      const language = page.properties.Language?.select?.name?.toLowerCase() || 'english';
      const author = page.properties.Author?.people?.[0]?.name || '';
      const customSlug = page.properties.Slug?.url || '';
      
      // Format the date for the filename
      const date = new Date(publishedDate);
      const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD
      
      // Use custom slug if available, otherwise generate from title
      const slug = customSlug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      
      // Get all blocks for the page
      const blocks = await getAllBlocks(page.id);
      const content = await blocksToMarkdown(blocks);
      
      // Create frontmatter
      const frontmatter = {
        title,
        date: publishedDate,
        updated: page.last_edited_time,
        notion_id: page.id,
        author,
        language,
        slug
      };
      
      // Combine frontmatter and content
      const markdown = `---
${Object.entries(frontmatter)
  .map(([key, value]) => `${key}: ${value}`)
  .join('\n')}
---

${content}`;

      // Determine target directory based on language
      const targetDir = language === 'spanish' ? blogEsDir : blogEnDir;
      
      // Write to file with date prefix
      const filePath = path.join(targetDir, `${formattedDate}-${slug}.md`);
      await fs.writeFile(filePath, markdown);
      console.log(`Created: ${filePath}`);
    }

    console.log('All posts have been downloaded successfully!');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

downloadNotionPosts(); 