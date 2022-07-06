// rollup 配置

import { terser } from "rollup-plugin-terser";
import json from '@rollup/plugin-json';
// import commonjs from 'rollup-plugin-commonjs';
// import resolve from 'rollup-plugin-node-resolve';
// import babel from 'rollup-plugin-babel';

const input = 'src/index.js';

export default [
  {
    input,
    output: {
      name: 'wcui.esm',
      file: 'dist/wcui/index.min.js',
      // file: 'dist/wcui/index.esm.js',
      format: 'esm',
    },
    external: [],
    plugins: [
      json(),
      terser(),
    ],
  },
  {
    input,
    output: {
      name: 'wcui.umd',
      file: 'dist/wcui/index.umd.js',
      format: 'umd',
    },
    external: [],
    plugins: [
      json(),
      terser(),
    ],
  },
  // {
  //   input: 'src/index.js',
  //   external: ['lit-html'],
  //   output: [
  //       {
  //         name: 'wcui.umd',
  //         file: 'dist/wcui/index.umd.js',
  //         format: 'umd',
  //       },
  //       {
  //         name: 'wcui.cjs',
  //         file: 'dist/wcui/index.cjs.js',
  //         format: 'cjs',
  //       },
  //       {
  //         name: 'wcui.esm',
  //         file: 'dist/wcui/index.esm.js',
  //         format: 'esm',
  //       }
  //   ],
  //   plugins: [
  //     commonjs(),
  //     resolve(),
  //     babel({
  //       exclude: 'node_modules/**'
  //     }),
  //   ],
  // },
];


// https://www.cnblogs.com/xgqfrms/p/16210731.html
