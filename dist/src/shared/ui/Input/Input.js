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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import { memo, useEffect, useRef, useState } from "react";
export var Input = memo(function (props) {
    var _a;
    var className = props.className, value = props.value, onChange = props.onChange, _b = props.type, type = _b === void 0 ? "text" : _b, _c = props.placeholder, placeholder = _c === void 0 ? undefined : _c, autofocus = props.autofocus, readonly = props.readonly, otherProps = __rest(props, ["className", "value", "onChange", "type", "placeholder", "autofocus", "readonly"]);
    //const ref = useRef<HTMLInputElement>();
    var ref = useRef();
    var _d = useState(false), isFocused = _d[0], setIsFocused = _d[1];
    var _e = useState(0), caretPosition = _e[0], setCaretPosition = _e[1];
    var isCaretVisible = isFocused && !readonly;
    useEffect(function () {
        if (autofocus) {
            setIsFocused(true);
            ref.current.focus();
        }
    }, [autofocus]);
    var onChangeHandler = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
        setCaretPosition(e.target.value.length);
    };
    var onBlur = function () {
        setIsFocused(false);
    };
    var onFocus = function () {
        setIsFocused(true);
    };
    var onSelect = function (e) {
        var _a;
        setCaretPosition(((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.selectionStart) || 0);
    };
    var mods = (_a = {},
        _a[cls.readonly] = true,
        _a);
    return (_jsxs("div", __assign({ className: classNames(cls.InputWrapper, mods, [className]) }, { children: [placeholder && (_jsx("div", __assign({ className: cls.placeholder }, { children: "".concat(placeholder, ">") }))), _jsxs("div", __assign({ className: cls.caretWrapper }, { children: [_jsx("input", __assign({ ref: ref, type: type, value: value, onChange: onChangeHandler, className: cls.input, onBlur: onBlur, onFocus: onFocus, onSelect: onSelect, readOnly: readonly }, otherProps)), isCaretVisible && (_jsx("span", { className: cls.caret, style: { left: "".concat(caretPosition * 9, "px") } }))] }))] })));
});
