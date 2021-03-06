var path = require('path');
var version = require('./package.json').version;


const STATIC_PATH = path.resolve(__dirname, '../jupyter_amphion/nbextension');
const DIST_PATH = path.resolve(__dirname, 'dist');

// Custom webpack rules are generally the same for all webpack bundles, hence
// stored in a separate local variable.
var rules = [
    { test: /\.css$/, use: ['style-loader', 'css-loader']},
    {
        test: /\.js$/,
        exclude: /node_modules\/.*/,
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        },
    },
]

module.exports = [
    {// Notebook extension
     //
     // This bundle only contains the part of the JavaScript that is run on
     // load of the notebook. This section generally only performs
     // some configuration for requirejs, and provides the legacy
     // "load_ipython_extension" function which is required for any notebook
     // extension.
     //
        entry: './lib/extension.js',
        output: {
            filename: 'extension.js',
            path: STATIC_PATH,
            libraryTarget: 'amd',
            publicPath: '' // publicPath is set in extension.js
        },
        experiments: { asyncWebAssembly: true }
    },
    {// Bundle for the notebook containing the custom widget views and models
     //
     // This bundle contains the implementation for the custom widget views and
     // custom widget.
     // It must be an amd module
     //
        entry: './lib/index.js',
        output: {
            filename: 'index.js',
            path: STATIC_PATH,
            libraryTarget: 'amd',
            publicPath: '',
        },
        devtool: 'source-map',
        module: {
            rules: rules
        },
        externals: ['@jupyter-widgets/base'],
        experiments: { asyncWebAssembly: true }
    },
    {// Embeddable jupyter-amphion bundle
     //
     // This bundle is generally almost identical to the notebook bundle
     // containing the custom widget views and models.
     //
     // The only difference is in the configuration of the webpack public path
     // for the static assets.
     //
     // It will be automatically distributed by unpkg to work with the static
     // widget embedder.
     //
     // The target bundle is always `dist/index.js`, which is the path required
     // by the custom widget embedder.
     //
        entry: './lib/embed.js',
        output: {
            filename: 'index.js',
            path: DIST_PATH,
            libraryTarget: 'amd',
            publicPath: 'https://unpkg.com/@robostack/jupyter-amphion@' + version + '/dist/'
        },
        devtool: 'source-map',
        module: {
            rules: rules
        },
        externals: ['@jupyter-widgets/base'],
        experiments: { asyncWebAssembly: true }
    },
];
