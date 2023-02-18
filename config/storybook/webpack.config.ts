import * as webpack from "webpack";
import {BuildPaths} from "../build/types/config";
import path from "path";
import {buildCssLoader} from "../build/loaders/buildCssLoader";
import {RuleSetRule} from "webpack";

export default ({config}:{config:webpack.Configuration}) => {

    const paths: BuildPaths = {
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
        html: "",
        build: ""
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push("ts", "tsx");

    // Находим правило, которое обрабатывает svg и если это правило нашлось
    // исключаем обработку svg для этого правила
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    });
    config.module.rules.push(buildCssLoader(true));

    return config;
};
