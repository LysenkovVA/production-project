import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
    return {
        // Расширения тех файлов, в которых при импорте не указаывается расширение
        extensions: ['.tsx', '.ts', '.js'],
    }
}
