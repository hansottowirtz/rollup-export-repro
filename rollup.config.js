import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

const version = pkg.devDependencies["@rollup/plugin-commonjs"].replace(/[^0-9\.]/g, '');

export default {
  input: './src/a.js',
  output: {
    file: `./dist/a-${version}.js`,
    format: 'cjs',
    exports: 'named'
  },
  plugins: [
    commonjs()
  ]
}