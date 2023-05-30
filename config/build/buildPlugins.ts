import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
//import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CircularDependencyPlugin from "circular-dependency-plugin";
import CopyPlugin from "copy-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths, isDev, apiUrl, project}: BuildOptions): webpack.WebpackPluginInstance[] {
    const isProd = !isDev;
    const plugins = [
        // Для добавления index.html в сборку
        new HtmlWebpackPlugin({
            // Файл из определенной папки, который будет использоваться как шаблон, чтобы в него встраивались скрипты
            template: paths.html
        }),
        // Для отслеживания прогресса сборки
        new webpack.ProgressPlugin(),
        // Прокидывает в приложение глобальные переменные
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new CircularDependencyPlugin({
            exclude: /node-modules/,
            failOnError: true
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: "write-references",
            },
        }),
    ];

    if (isDev) {
        //plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
        // Вытаскиваем этот плагин для прод режима из условия для анализа бандла
        // plugins.push(new BundleAnalyzerPlugin({
        //     // Открывать в браузере при сборке
        //     openAnalyzer: false
        // }));
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }));

        // Перемещение переводов
        plugins.push(new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.buildLocales },
            ]
        }));
    }

    return plugins;
}
