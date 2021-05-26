const PATH = require("path");
const FS = require("fs");
const HTML_WEBPACK_PLUGIN = require("html-webpack-plugin");
const MINI_CSS_EXTRACT_PLUGIN = require("mini-css-extract-plugin");

// Basic Conifg data, Mode and DEV_TOOl will be changed in production mode to decrease the file size
const MODE = 'development';
const DEV_TOOl = 'source-map';
const TARGET = 'web';

console.clear();
console.log('Initiating...')


// Get File extensions
const TEST = {
    pug: /\.pug$/i,
    script: /\.ts$/i,
    style: /\.sass$/i,
    assets: /\.(png|jpeg|svg|ico)$/i
};

// Entry & output
const ENTRY = {
    primary: PATH.resolve(__dirname, "src/lib", "primary.ts"),
    bundle: PATH.resolve(__dirname, "src", "index.ts"),
};

const OUTPUT = {
    path: PATH.resolve(__dirname, 'build'),
    filename: "static/scripts/[name].js",
};


// Templates

function generateHtmlPlugins(templateDir) {
  // Read files in template directory
  const dir = PATH.resolve(__dirname, templateDir);
  if (!FS.existsSync(dir)) {
    FS.mkdir(dir, { recursive: true }, (err) => {
      if (err) throw err;
    });
  }

  const templateFiles = FS.readdirSync(dir);
  return templateFiles.map((item) => {
    // Split names and extension
    const parts = item.split(".");
    const name = parts[0];
    const extension = parts[1];

    if (extension === "pug") {
      // Create new HTMLWebpackPlugin with options
      return new HTML_WEBPACK_PLUGIN({
        filename: `pages/${name}.html`,
        template: `${templateDir}/${name}.${extension}`,
      });
    }
  });
}

const templates = generateHtmlPlugins("./src/pages/");


/**
 *
 * Main Configuration Object
 * Add all the config to the main Configuration object then export it using
 * module.exports
 */

const CONFIG = {
    mode: MODE,
    devtool: DEV_TOOl,
    target: TARGET,
    resolve: {
        extensions: [".js", ".ts", ".sass", ".pug"],
        alias: {
            core: PATH.join(__dirname, 'src'),
        },
    },

    // optimization: {
    //     runtimeChunk: true,
    // },

    // Entry file should named as givien in README.md file
    entry: ENTRY,

    // Output will be in build folder
    output: OUTPUT,

    // development server
    devServer: {
        contentBase: PATH.join(__dirname, 'build'),
        port: 8080,
    },

    //modules
    module: {}
};

/**
 *
 * Loader
 * Include all the loader to the loader objects then include it to the CONFIG
 * Object
 */

const LOADERS = [
    {
        test: TEST.script,
        include: PATH.resolve(__dirname, 'src'),
        use: ["babel-loader", "ts-loader"],
    },

    {
        test: TEST.style,
        use: [
            MINI_CSS_EXTRACT_PLUGIN.loader,
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: ['autoprefixer']
                    }
                }
            },
            'sass-loader'
        ]
    },

    {
        test: TEST.pug,
        use: {
            loader: "pug-loader",
            options: {
                pretty: true
            }
        },
    },

    /**
     *
     * Type: assets/resource is only work with latest version of webpack 5 >=
     * otherwise need to install file-loader, url-loader or raw-loaders to handle all the assets
     */
    {
        test: TEST.assets,
        type: 'asset/resource',
        generator: {
            filename: 'static/images/[name][ext]'
        }
    }

];


/**
 *
 * PLUGINS
 * HTML plugins to resolve pug file and MINI_CSS_EXTRACT_PLUGIN is for css sheets.
 */

const PLUGINS = [

    new MINI_CSS_EXTRACT_PLUGIN( {
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: 'static/styles/[name].css',
        chunkFilename: 'static/styles/[id].css'
    }),

    new HTML_WEBPACK_PLUGIN({
        filename: 'index.html',
        template: 'src/index.pug'
    })
].concat(templates);


// Append all configuration
CONFIG.module.rules = LOADERS;
CONFIG.plugins = PLUGINS;

// Export the main config object
module.exports = CONFIG;