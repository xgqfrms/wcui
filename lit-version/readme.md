# lit-wcui
<!-- # lit-version-wcui -->

> rollup + typescript + lit

<!-- https://www.npmjs.com/package/lit-version-wcui -->

https://www.npmjs.com/package/lit-wcui
## install
<!-- 
```sh
$ npm i lit-version-wcui
# OR
$ yarn add lit-version-wcui
``` -->

```sh
$ npm i lit-wcui
# OR
$ yarn add lit-wcui
```


## usage

1. ES Module

<!-- ```js
// import { WCUIElement } from 'lit-version-wcui';
// import './node_modules/lit-version-wcui/dist/index.esm.js';
import 'lit-version-wcui';

``` -->

```js
// import { WCUIElement } from 'lit-wcui';
// import './node_modules/lit-wcui/dist/index.esm.js';
import 'lit-wcui';

```

2. CDN

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="module" src="./lit-wcui/dist/index.umd.js"></script>
    <!-- <script type="module" src="./lit-wcui/dist/index.esm.js"></script> -->
    <!-- <script src="./lit-wcui/dist/index.iife.js"></script> -->
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

## live demo

https://codesandbox.io/s/lit-wcui-demo-st29pp

<iframe src="https://codesandbox.io/embed/zealous-cache-st29pp?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="lit-wcui-demo"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>