// import { terser } from "rollup-plugin-terser";// json
// import json from '@rollup/plugin-json';

import * as pkg from "./package.json";

import typescript from '@rollup/plugin-typescript';

import { nodeResolve } from '@rollup/plugin-node-resolve';

const input = 'src/index.ts';

export default [
  // {
  //   input,
  //   output: {
  //     name: pkg.cjs,
  //     file: 'dist/index.cjs.js',
  //     format: 'cjs',
  //   },
  //   external: ['lit'],
  //   plugins: [
  //     json(),
  //     // terser(),
  //     nodeResolve(),
  //     typescript(),
  //     // typescript({ compilerOptions: {lib: ["es5", "es6", "dom"], target: "es5"}})
  //   ],
  // },
  {
    input,
    output: {
      name: 'wcui_iife',
      file: pkg.iife,
      // immediately-invoked function expression — suitable for <script> tags
      format: 'iife', 
      sourcemap: true,
    },
    plugins: [
      nodeResolve(),
      typescript(),
    ],
  },
  {
    input,
    output: {
      name: 'wcui_esm',
      file: pkg.main,
      // file: 'dist/index.esm.js',
      // dir: 'dist',
      format: 'esm',
      sourcemap: true,
    },
    // external: ['lit'],
    plugins: [
      // json(),
      // terser(),
      nodeResolve(),
      typescript(),
    ],
  },
  {
    input,
    output: {
      // cdn 方式引入时, 挂载在 window 对象上的名称
      name: 'wcui_umd',
      file: pkg.browser,
      // file 与 dir 只能选择一种
      // file: 'dist/index.umd.js',
      // dir: 'dist',
      format: 'umd',
      // globals: 'lit',
      sourcemap: true,
    },
    // external: ['lit'],
    plugins: [
      // json(),
      // terser(),
      nodeResolve(),
      typescript(),
    ],
  },
];

