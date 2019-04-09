const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const { sizeSnapshot } = require('rollup-plugin-size-snapshot');
const { uglify } = require('rollup-plugin-uglify');
const alias = require('rollup-plugin-alias');

const pkg = require('./package.json');

function isBareModuleId(id) {
  if (id.includes('@leap')) {
    return false;
  }
  // return true;
  return !id.startsWith('.') && !id.startsWith('/');
}

const cjs = [
  {
    input: 'src/index.js',
    output: { file: `cjs/sdk.js`, format: 'cjs' },
    external: isBareModuleId,
    plugins: [
      babel({ exclude: /node_modules/ }),
      nodeResolve(),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
    ]
  }
  // {
  //   input: "src/index.js",
  //   output: { file: `cjs/${pkg.name}.min.js`, format: "cjs" },
  //   external: isBareModuleId,
  //   plugins: [
  //     babel({ exclude: /node_modules/ }),
  //     replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
  //     uglify()
  //   ]
  // }
];

const esm = [
  {
    input: 'src/index.js',
    output: { file: `esm/sdk.js`, format: 'esm' },
    external: isBareModuleId,
    plugins: [
      alias({
        '@leap/ui-elements': '../ui-elements/esm/ui-elements.js',
        '@leap/ui-components': '../ui-components/esm/ui-components.js'
      }),
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        plugins: [['@babel/transform-runtime', { useESModules: true }]]
      }),
      nodeResolve(),
      sizeSnapshot()
    ]
  }
];

const globals = { react: 'React' };

const umd = [
  {
    input: 'src/index.js',
    output: {
      file: `umd/${pkg.name}.js`,
      format: 'umd',
      name: 'ReactRouterDOM',
      globals
    },
    external: Object.keys(globals),
    plugins: [
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        plugins: [['@babel/transform-runtime', { useESModules: true }]]
      }),
      nodeResolve(),
      commonjs({
        include: /node_modules/,
        namedExports: {
          '../react-router/node_modules/react-is/index.js': [
            'isValidElementType'
          ]
        }
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      sizeSnapshot()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: `umd/${pkg.name}.min.js`,
      format: 'umd',
      name: 'ReactRouterDOM',
      globals
    },
    external: Object.keys(globals),
    plugins: [
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        plugins: [['@babel/transform-runtime', { useESModules: true }]]
      }),
      nodeResolve(),
      commonjs({
        include: /node_modules/,
        namedExports: {
          '../react-router/node_modules/react-is/index.js': [
            'isValidElementType'
          ]
        }
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      sizeSnapshot(),
      uglify()
    ]
  }
];

let config;
console.log('process.env.BUILD_ENV', process.env.BUILD_ENV);
switch (process.env.BUILD_ENV) {
  case 'cjs':
    config = cjs;
    break;
  case 'esm':
    config = esm;
    break;
  case 'umd':
    config = umd;
    break;
  default:
    // config = cjs.concat(esm).concat(umd);
    // config = cjs.concat(esm);
    config = esm;
}

module.exports = config;
