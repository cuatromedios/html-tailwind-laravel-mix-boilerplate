# HTML, Tailwind, Laravel Mix Boilerplate

> A boilerplate to quick build a static website using HTML, Tailwind, and Laravel Mix 

This project uses:

* [Tailwind CSS](https://tailwindcss.com) as CSS Framework
  * [JIT](https://tailwindcss.com/docs/just-in-time-mode) Just In Time compiler
* [Laravel Mix](https://laravel-mix.com) to speed up development (Hot reload, browser sync and build minified assets)
  * [Browser Sync](https://browsersync.io) 
  * [HTML Builder](https://laravel-mix.com/extensions/html-builder) Extension
  * [Mix TailwindCSS](https://laravel-mix.com/extensions/tailwindcss) Extension

Please refer to the documentation of these projects to get more information.

###Setup
Install the dependencies
```
npm install
```

### Develop

By default, source files are in `/src` folder, the development files are copied
 to `/dev` folder (ignored) and build (production) files are stored in `/public` folder

To run dev environment:
```
npm run dev
```
To run dev environment, and watch for file changes:
```
npm run watch
```
To build production assets to the `public` directory:
```
npm run build
```

### Usage
This boilerplate considers that the project uses Tailwind CSS and have custom Javascript
files, if you don't need, for example Javascript, please configure the build in Laravel Mix.

The code includes examples of using TailwindCSS in a
[custom CSS file](./src/styles/_custom.pcss) using `@apply`,
[inlined in the HTML](./src/index.html),
[adding base styles](./src/styles/_base.pcss),
and [customization](./tailwind.config.js)
  

Please refer to [TailwindCSS](https://tailwindcss.com/docs/) and
[Laravel Mix](https://laravel-mix.com/docs/) documentation to get information
on how to configure `tailwind.config.js` and `webpack.mix.js` files

## Credits

- [Ramses Moreno](https://www.ramsesmoreno.com)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
