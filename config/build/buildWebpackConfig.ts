import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            // Удаление ненужного мусора из папки сборки
            clean: true,
            // Чтобы в дев режиме маршрутизация не лазила по разным папкам
            publicPath: "/",
        },
        plugins: buildPlugins(options),
        module: {
            //Конфигурируем лоадеры (они предназначены для обработки файлов, которые выходят за рамки JS (css, ts, jpg и т.д.)
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        // Построение Source map, чтобы отслеживать ошибки
        // Добавляем их только в режиме разработки (используем флаг isDev)
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev? buildDevServer(options) : undefined,
    };
}
