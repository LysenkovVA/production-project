import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        // Настройка уникальных имен css модулей
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            // Для разработки показываем понятное имя
                            ? '[path][name]__[local]--[hash:base64:5]'
                            // Для продакшена - хеш
                            : '[hash:base64:8]'
                    },
                }
            },
            "sass-loader",
        ],
    };

    const typeScriptLoader = {
        // Регулярка для файлов
        test: /\.tsx?$/,
        // Какой лоадер используем
        use: 'ts-loader',
        // Что исключаем
        exclude: /node_modules/,
    };

    const fileLoader = {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        };

    // ПОРЯДОК ИМЕЕТ ЗНАЧЕНИЕ!
    return [
        svgLoader,
        fileLoader,
        typeScriptLoader,
        cssLoader,
    ]
}
