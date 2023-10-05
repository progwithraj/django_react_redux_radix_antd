const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra');
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
                '@primary-color': '#1DA57A',
            }
        }
    }),
    addWebpackPlugin(
        new AntdDayJsWebpackPlugin()
    )
)
