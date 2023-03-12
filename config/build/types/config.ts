export type BuildMode = "development" | "production";

export interface BuildPaths {
    // Путь до entryPoint
    entry: string;
    // Путь до папки со сборкой
    build: string;
    // Путь до index.html
    html: string;
    // Путь до папки src
    src: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: "storybook" | "frontend" | "jest";
}
