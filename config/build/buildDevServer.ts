import {BuildOptions} from "./types/config";
// Чтобы не было пересечений с webpack Configuration
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        // Открывает в браузере страницу с приложением
        open: true,
        // Для проксирования запросов через главную страницу (чтобы при обновлении страницы в браузере не было ошибок)
        historyApiFallback: true,
        // Обновление стилей на странице без перезагрузки страницы
        // Согласно документации можно не добавлять плагин для обновления в конфигурацию
        // webpack, этого флага достаточно
        hot: true,
    };
}
