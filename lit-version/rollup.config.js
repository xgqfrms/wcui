// import { terser } from "rollup-plugin-terser";// json
// import json from '@rollup/plugin-json';

import * as pkg from "./package.json";

import typescript from '@rollup/plugin-typescript';

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
  //     typescript(),
  //     // typescript({ compilerOptions: {lib: ["es5", "es6", "dom"], target: "es5"}})
  //   ],
  // },
  {
    input,
    output: {
      name: pkg.main,
      file: 'dist/index.esm.js',
      format: 'esm',
    },
    external: ['lit'],
    plugins: [
      // json(),
      // terser(),
      typescript(),
    ],
  },
  {
    input,
    output: {
      name: pkg.browser,
      file: 'dist/index.umd.js',
      format: 'umd',
    },
    external: ['lit'],
    plugins: [
      // json(),
      // terser(),
      typescript(),
    ],
  },
];

