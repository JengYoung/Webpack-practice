const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    }
                ]
            }, {
                test: /\.hbs$/,
                use: ['handlebars-loader']
            }
        ]
    },
    plugins: [
        // 외부 저장소에서 관리되어지는 플러그인은, 로더와 마찬가지로 README.md에서 자세히 살펴봐야 함.
        new HtmlWebpackPlugin({
            title: 'webpack',
            // 자동으로 생성되는 html이 특정 파일을 기준으로 만들어지게끔 파일을 지정해주는 역할.
            template: './template.hbs',
            meta: {
                viewport: "width-device-width, initial-scale=1.0"
            }
        })
    ],
    mode: 'none'
}