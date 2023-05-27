var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useLayoutEffect, useState } from "react";
export var AppImage = memo(function (props) {
    var className = props.className, src = props.src, _a = props.alt, alt = _a === void 0 ? "image" : _a, fallback = props.fallback, errorFallback = props.errorFallback, otherProps = __rest(props, ["className", "src", "alt", "fallback", "errorFallback"]);
    var _b = useState(true), isLoading = _b[0], setIsLoading = _b[1];
    var _c = useState(false), hasError = _c[0], setHasError = _c[1];
    // Вызовется синхронно до монтирования компонента
    useLayoutEffect(function () {
        var image = new Image();
        image.src = src !== null && src !== void 0 ? src : "";
        image.onload = function () {
            setIsLoading(false);
        };
        image.onerror = function () {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);
    if (isLoading && fallback) {
        return fallback;
    }
    if (hasError && errorFallback) {
        return errorFallback;
    }
    return (_jsx("img", __assign({ className: className, src: src, alt: alt }, otherProps)));
});
