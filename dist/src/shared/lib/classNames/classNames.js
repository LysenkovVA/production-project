var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Функция для удобного комбинирования классов
export function classNames(cls, mods, additional) {
    if (mods === void 0) { mods = {}; }
    if (additional === void 0) { additional = []; }
    return __spreadArray(__spreadArray([
        cls
    ], additional.filter(Boolean), true), Object.entries(mods)
        // Оставляем элементы со значением true
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return Boolean(value);
    })
        .map(function (_a) {
        var className = _a[0];
        return className;
    }), true).join(" ");
}
