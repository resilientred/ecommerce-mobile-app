const pathTo = require('path');
const fs = require('fs-extra');
const webpack = require('webpack');

const entry = {};
const weexEntry = {};
const vueWebTemp = 'temp';
const hasPluginInstalled = fs.existsSync('./web/plugin.js');
var isWin = /^win/.test(process.platform);

var fileType = '';

function walk(dir) {
  dir = dir || '.';
  const directory = pathTo.join(__dirname, 'src', dir);
  fs.readdirSync(directory)
    .forEach((file) => {
      const fullpath = pathTo.join(directory, file);
      const stat = fs.statSync(fullpath);
      const extname = pathTo.extname(fullpath);
      if (stat.isFile() && extname === '.vue' || extname === '.we') {
        if (!fileType) {
          fileType = extname;
        }
        if (fileType && extname !== fileType) {
          console.log('Error: This is not a good practice when you use ".we" and ".vue" together!');
        }
        const name = pathTo.join(dir, pathTo.basename(file, extname));
        if (extname === '.vue') {
          const entryFile = pathTo.join('./app.js');
          
          entry[name] = pathTo.join(__dirname, entryFile) + '?entry=true';
        } 
        weexEntry[name] = fullpath + '?entry=true';
      } else if (stat.isDirectory() && file !== 'build' && file !== 'include') {
        const subdir = pathTo.join(dir, file);
        walk(subdir);
      }
    });
}

walk();
// web need vue-loader
const plugins = [
  new webpack.optimize.UglifyJsPlugin({minimize: true}),
  new webpack.BannerPlugin({
    banner: '// { "framework": ' + (fileType === '.vue' ? '"Vue"' : '"Weex"') + '} \n',
    raw: true,
    exclude: 'Vue'
  })
];
const webConfig = {
  context: pathTo.join(__dirname, ''),
  entry: entry,
  output: {
    path: pathTo.join(__dirname, 'dist'),
    filename: '[name].web.js',
  },
  module: {
    // webpack 2.0 
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules/
      },
      {
        test: /\.vue(\?[^?]+)?$/,
        use: [{
          loader: 'vue-loader'
        }]
      }
    ]
  },
  plugins: plugins
};
const weexConfig = {
  entry: weexEntry,
  output: {
    path: pathTo.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
        }],
        exclude: /node_modules/
      },
      {
        test: /\.vue(\?[^?]+)?$/,
        use: [{
          loader: 'weex-loader'
        }]
      },
      {
        test: /\.we(\?[^?]+)?$/,
        use: [{
          loader: 'weex-loader'
        }]
      }
    ]
  },
  plugins: plugins,
};

var exports = [webConfig, weexConfig];

if (fileType === '.we') {
  exports = weexConfig;
}
module.exports = exports;
