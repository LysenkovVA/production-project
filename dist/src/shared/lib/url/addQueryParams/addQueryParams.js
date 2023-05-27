export function getQueryParams(params) {
    // Объект с уже существующими параметрами в строке запроса
    var searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(function (_a) {
        var name = _a[0], value = _a[1];
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });
    return "?".concat(searchParams.toString());
}
/**
 * Функция добавления параметров строки запроса в URL
 * @param params
 */
export function addQueryParams(params) {
    // Объект с уже существующими параметрами в строке запроса
    var searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(function (_a) {
        var name = _a[0], value = _a[1];
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });
    window.history.pushState(null, "", getQueryParams(params));
}
