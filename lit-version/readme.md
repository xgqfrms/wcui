# lit-version-wcui

> rollup + typescript + lit

https://www.npmjs.com/package/lit-version-wcui
## install

```sh
$ npm i lit-version-wcui
# OR
$ yarn add lit-version-wcui
```


## usage

1. ES Module

```js
// import { WCUIElement } from 'lit-version-wcui';
// import './node_modules/lit-version-wcui/dist/index.esm.js';
import 'lit-version-wcui';


```

2. CDN

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="module" src="./lit-version-wcui/dist/index.umd.js"></script>
    <!-- <script type="module" src="./lit-version-wcui/dist/index.esm.js"></script> -->
    <!-- <script src="./lit-version-wcui/dist/index.iife.js"></script> -->
    <style>
      body {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.5em;
        padding-left: 0.5em;
      }
    </style>
  </head>
  <body>
    <wcui-element></wcui-element>
    <wcui-element version="1.0.0"></wcui-element>
  </body>
</html>

```

