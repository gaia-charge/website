<img src="static/gaia_green_tech_logo.svg" width=400 alt="Gaia Green Tech" />

# Main website

This is the code for the [main GGT website](https://gaiagreen.tech). It's build with [Svelte](https://svelte.dev/) and [Sapper](https://github.com/sveltejs/sapper).

## Running the website locally

You can install dependencies and run the project in development mode with:

```bash
cd website
npm install
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

## Deployment

The website is automatically deployed with Netlify. Once you create a PR, it will build a preview website (you'll see the link as "deploy/netlify" in the Check section of your PR). Once the PR is merged in, it will be built and deployed automatically.

## Code formatting

The code is being formatted with [Prettier](https://prettier.io/) and [prettier-plugin-svelte](https://github.com/sveltejs/prettier-plugin-svelte) plugin.
Before pushing code, you should run Prettier:

```
npm run prettier
```

Otherwise, the [`.github/workflows/ci.yaml`](GitHub Action) will create a commit in your branch with a cleanup.
