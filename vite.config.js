import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist/',
  },
  plugins: [
    {
      name: 'custom-favicon',
      transformIndexHtml(html) {
        return html.replace(
          /<link rel="icon" href="\/favicon\.ico" \/>/,
          '<link rel="icon" href="./src/public/favicon.ico" />'
        );
      },
    },
  ],
});
