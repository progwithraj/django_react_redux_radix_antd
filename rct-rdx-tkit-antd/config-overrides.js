const { override, fixBabelImports, addWebpackPlugin, addPostcssPlugins } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader');
const AntdDayJsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = override(
    fixBabelImports('antd', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessLoaderOptions: {
            lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                    '@primary-color': '#038fde',
                }
            }
        }
    }),
    addPostcssPlugins([require('./postcss.config.js', require('autoprefixer'))]),
    addWebpackPlugin(
        new AntdDayJsWebpackPlugin()
    )
)
