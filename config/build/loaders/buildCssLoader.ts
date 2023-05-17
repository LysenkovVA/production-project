import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        // Настройка уникальных имен css модулей
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: isDev
                            // Для разработки показываем понятное имя
                            ? "[path][name]__[local]--[hash:base64:5]"
                            // Для продакшена - хеш
                            : "[hash:base64:8]"
                    },
                }
            },
            "sass-loader",
        ],
    };
}
