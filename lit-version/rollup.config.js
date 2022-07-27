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
      name: pkg.main,
      file: 'dist/index.esm.js',
      // dir: 'dist',
      format: 'esm',
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
      name: pkg.browser,
      file: 'dist/index.umd.js',
      // dir: 'dist',
      format: 'umd',
      // globals: 'lit',
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

