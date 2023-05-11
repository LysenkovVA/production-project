import * as webpack from "webpack";
import {BuildPaths} from "../build/types/config";
import path from "path";
import {buildCssLoader} from "../build/loaders/buildCssLoader";
import {DefinePlugin, RuleSetRule} from "webpack";

export default ({config}:{config:webpack.Configuration}) => {

    const paths: BuildPaths = {
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
        html: "",
        build: "",
        locales: "",
        buildLocales: "",
    };

    //config.resolve.modules.push(paths.src);
    config!.resolve!.modules = [ paths.src, "node_modules" ];
    config!.resolve!.extensions!.push("ts", "tsx");
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        "@": paths.src
    };

    // Находим правило, которое обрабатывает svg и если это правило нашлось
    // исключаем обработку svg для этого правила

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config!.module!.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    });
    config!.module!.rules.push(buildCssLoader(true));

    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify("https://testapi.ru"),
        __PROJECT__: JSON.stringify("storybook"),
    }));

    return config;
};
