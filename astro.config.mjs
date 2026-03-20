import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  // Update these per project for GitHub Pages deployment
  site: 'https://your-username.github.io',
  base: '/repo-name', // Change to match your repository name
  output: 'static',
  integrations: [sitemap()],
})
