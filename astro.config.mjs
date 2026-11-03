import { defineConfig } from 'astro/config';
// En GitHub Pages calcula la ruta del repositorio automáticamente.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isUserSite = repository && owner && repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;
export default defineConfig({
  site: owner ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: repository && !isUserSite ? `/${repository}` : '/',
  output: 'static',
});
