# Rainbow Starter Kit Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

## Installation

Clone this repo and then execute `npm install`

## Rainbow SDK

Once installed, copy the latest version of the Rainbow SDK for Web to the assets directory

```shell
npm run copy
```

or

```shell
cp ./node_modules/rainbow-web-sdk/src/vendors-sdk.min.js ./src/assets/

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Production issues

To avoid issues with the minification of the code in production, do not forget to put `env NG_BUILD_MANGLE=false` before running `ng serve` or `ng build` scripts (see example in package.json file).
