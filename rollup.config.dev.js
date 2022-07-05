// 配置

import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/index.js',
  output: {
    format: 'esm',
    file: 'dist/wcui/index.min.js'
  },
  external: [],
  plugins: [
    terser(),
  ],
}

// https://www.cnblogs.com/xgqfrms/p/16210731.html
