import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://www.aquifergrowth.com",
  output: "static",
  redirects: {
    '/build': '/design-and-dev',
    '/industries/ecommerce': '/industries/ecommerce-and-retail',
  },
  vite: {
    server: {
      fs: {
        // Allow serving files from the parent repo (node_modules lives there
        // when running from a .claude/worktrees/* checkout).
        allow: ['../../..']
      }
    }
  }
});
