import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildCssLoader} from "./loaders/buildCssLoader";
import {buildBabelLoader} from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const {isDev} = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const cssLoader = buildCssLoader(isDev);

    const babelLoader = buildBabelLoader(options);

    const typeScriptLoader = {
        // Регулярка для файлов
        test: /\.tsx?$/,
        // Какой лоадер используем
        use: "ts-loader",
        // Что исключаем
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    // ПОРЯДОК ИМЕЕТ ЗНАЧЕНИЕ!
    return [
        svgLoader,
        fileLoader,
        babelLoader,
        typeScriptLoader,
        cssLoader,
    ];
}
