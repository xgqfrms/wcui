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

<!-- step2. use wcui-??? -->
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
  <span slot="text" onclick="callback('success')">
    成功按钮
  </span>
</wcui-button>
<wcui-button type="warning" callback="callback">
  <span slot="text">
    警告按钮
  </span>
</wcui-button>
<wcui-button type="danger" callback="callback">
  <span slot="text">
    危险按钮
  </span>
</wcui-button>

```

```js
const callback = (type = '') => {
  console.log('button type', type);
  alert(`🎉 button type =${type}`);
}

window.callback = callback;

```

<!-- ![](https://img2022.cnblogs.com/blog/740516/202207/740516-20220706163918327-2102287624.png) -->
![](https://user-images.githubusercontent.com/7291672/177508468-07c709a8-edd3-4e25-8048-a3996a0c92e9.png)

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

> github

```sh
# dev
$ npm run dev

# build
$ npm run build

```

> npm

```sh
# publish
$ npm publish
# $ npm publish --access=public

```

https://github.com/xgqfrms/wcui


## refs

https://developer.mozilla.org/en-US/docs/Web/Web_Components/

https://javascript.info/custom-elements

https://rollupjs.org/


