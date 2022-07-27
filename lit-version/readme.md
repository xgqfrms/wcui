# lit

## Rollup

https://rollupjs.org/guide/en/

https://www.npmjs.com/package/@rollup/plugin-typescript

https://github.com/rollup/plugins/tree/master/packages/typescript


typescript({ compilerOptions: {lib: ["es5", "es6", "dom"], target: "es5"}})


<!-- https://github.com/ezolenko/rollup-plugin-typescript2 -->
## TS

Error: `@rollup/plugin-typescript`: The module kind should be 'ES2015' or 'ESNext, found: 'UMD'

[!] (plugin typescript) Error: @rollup/plugin-typescript: Could not find module 'tslib', which is required by this plugin.


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