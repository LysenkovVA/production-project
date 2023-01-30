import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        // Для добавления index.html в сборку
        new HtmlWebpackPlugin({
            // Файл из определенной папки, который будет использоваться как шаблон, чтобы в него встраивались скрипты
            template: paths.html
        }),
        // Для отслеживания прогресса сборки
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
    ]
}
