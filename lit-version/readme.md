# lit

## Rollup

https://rollupjs.org/guide/en/

https://www.npmjs.com/package/@rollup/plugin-typescript

https://github.com/rollup/plugins/tree/master/packages/typescript


typescript({ compilerOptions: {lib: ["es5", "es6", "dom"], target: "es5"}})

<!-- https://github.com/ezolenko/rollup-plugin-typescript2 -->

> 如何使用 rollup 把 lit 依赖打进包里?

`@rollup/plugin-node-resolve`

https://github.com/xgqfrms/wcui/issues/8#issuecomment-1196269085


Error: Invalid value for option "output.dir" - you must set either "output.file" for a `single-file` build or "output.dir" when generating `multiple chunks`.


`iife`

These commands assume the entry point to your application is named `main.js`, and that you'd like all imports compiled into a single file named `bundle.js`.

```md
For browsers:
# compile to a <script> containing a self-executing function ('iife')
rollup main.js --file bundle.js --format iife

For Node.js:
# compile to a CommonJS module ('cjs')
rollup main.js --file bundle.js --format `cjs`

For both `browsers` and` Node.js`:

# UMD format requires a bundle name
rollup main.js --file bundle.js --format umd --name "myBundle"
```



## TS

Error: `@rollup/plugin-typescript`: The module kind should be 'ES2015' or 'ESNext, found: 'UMD'

[!] (plugin typescript) Error: @rollup/plugin-typescript: Could not find module 'tslib', which is required by this plugin.

```js
{
  "compilerOptions": {
    "target": "esnext",
    "module": "ESNext",
    "target": "es2017",
    "module": "es2015",
    "moduleResolution": "node",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "sourceMap": true,
    "skipLibCheck": true, 
    "forceConsistentCasingInFileNames": true
  }
}
```

## decorators

```ts
import {customElement, property, eventOptions, query} from 'lit/decorators.js';

// 按需导入
import {customElement} from 'lit/decorators/custom-element.js';
import {eventOptions} from 'lit/decorators/event-options.js';
```


https://lit.dev/docs/components/decorators/


https://lit.dev/docs/components/properties/


## cli utils

```sh
$ yarn add -D rimraf

```

https://www.npmjs.com/package/rimraf

https://www.npmjs.com/package/rollup-plugin-copy



## OK

```js
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "skipLibCheck": true, 
    "forceConsistentCasingInFileNames": true
  }
}

```

## npm ?

lit 作为外部依赖使用，不需要打进包里面 ？？？

