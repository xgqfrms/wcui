# Web Components UI

> WCUI

## install

```sh
# Web Components UI
$ npm i -S @xgqfrms/wcui

```

<!-- https://www.npmjs.com/package/wcui -->

https://www.npmjs.com/package/@xgqfrms/wcui


## usage

```html
<!-- step1. import wcui -->
<script src="../dist/wcui/index.min.js"></script>

<!-- step3. use -->
<!-- wcui-toast -->
<wcui-toast content="this is one custom `Toast` components"></wcui-toast>

<!-- wcui-button -->
<wcui-button></wcui-button>
<wcui-button type="primary">
  <span slot="text">
    默认按钮
  </span>
</wcui-button>
<wcui-button type="success">
  <span slot="text">
    成功按钮
  </span>
</wcui-button>
<wcui-button type="warning">
  <span slot="text">
    警告按钮
  </span>
</wcui-button>
<wcui-button type="danger">
  <span slot="text">
    危险按钮
  </span>
</wcui-button>

```

## wxui components table


|name|props|type|default|
|-|-|-|-|
|wcui-toast|content|string|''|
|wcui-button|type|'primary'/'success'/'warning'/'danger'|'primary'|
|-|-|-|-|
|-|-|-|-|
|-|-|-|-|
|-|-|-|-|



## contributes

```sh
# dev
$ npm run dev

# build
$ npm run build

```


```sh
# publish
$ npm publish
$ npm publish --access=public

```

https://github.com/xgqfrms/wcui


## refs

https://developer.mozilla.org/en-US/docs/Web/Web_Components/

https://javascript.info/custom-elements

https://rollupjs.org/


