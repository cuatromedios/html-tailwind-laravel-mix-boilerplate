let mix = require('laravel-mix');
require('mix-tailwindcss');
require('mix-html-builder');

sourcePath = './src';
publicPath = mix.inProduction() ? 'public' : 'dev';

mix.disableNotifications()
    .setPublicPath(publicPath)
    .html({
          htmlRoot: `${sourcePath}/*.html`,
          output: '',
          minify: { removeComments: true }
    })
    .postCss(`${sourcePath}/styles/main.pcss`, 'styles/main.css')
    .tailwind()
    .js(`${sourcePath}/js/app.js`, 'js/app.js')
    .browserSync({
      server: publicPath,
      files: [sourcePath]
    });
