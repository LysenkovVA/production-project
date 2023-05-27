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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleImageBlockComponent.module.scss";
import { memo } from "react";
import { Text, TextAlign } from "@/shared/ui/Text";
export var ArticleImageBlockComponent = memo(function (props) {
    var className = props.className, block = props.block;
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleImageBlockComponent, {}, [className]) }, { children: [_jsx("img", { src: block.src, alt: block.title, className: cls.img }), block.title &&
                _jsx(Text, { text: block.title, align: TextAlign.CENTER })] })));
});
