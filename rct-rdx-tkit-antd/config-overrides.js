const { override, fixBabelImports, addLessLoader, addWebpackPlugin, addPostcssPlugins } = require('customize-cra');
const AntdDayJsWebpackPlugin = require('antd-dayjs-webpack-plugin');
module.exports = override(
    fixBabelImports('antd', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                '@primary-color': '#1262ae',
            }
        }
    }),
    addPostcssPlugins([require('autoprefixer')]),
    addWebpackPlugin(
        new AntdDayJsWebpackPlugin()
    )
)
