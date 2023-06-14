import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildCssLoader} from "./loaders/buildCssLoader";
import {buildBabelLoader} from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const {isDev} = options;

    const svgLoader = {
        test: /\.svg$/,
        use: [{
            loader: "@svgr/webpack",
            options: {
                icon: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: "convertColors",
                            params: {
                                currentColor: true
                            }
                        }
                    ]
                }
            }
        }],
    };

    const cssLoader = buildCssLoader(isDev);

    const codeBabelLoader = buildBabelLoader({...options, isTsx: false});
    const tsxCodeBabelLoader = buildBabelLoader({...options, isTsx: true});

    // Если не используем, то используем babel
    // const typeScriptLoader = {
    //     // Регулярка для файлов
    //     test: /\.tsx?$/,
    //     // Какой лоадер используем
    //     use: "ts-loader",
    //     // Что исключаем
    //     exclude: /node_modules/,
    // };

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
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoader,
    ];
}
