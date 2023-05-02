import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        // Расширения тех файлов, в которых при импорте не указаывается расширение
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [options.paths.src, "node_modules"],
        alias: {
            "@": options.paths.src
        },
        mainFiles: ["index"]
    };
}
