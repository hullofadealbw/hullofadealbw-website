import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update `site` to your GitHub Pages URL: https://<your-username>.github.io
// Update `base` to your repo name if deploying as a project site (not a user/org site)
// If you add a custom domain later, set site to that domain and remove base.
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/hullofadealbw-website',
  integrations: [tailwind()],
});
