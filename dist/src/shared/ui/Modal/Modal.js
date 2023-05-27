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
import cls from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
var ANIMATION_DELAY = 100;
export var Modal = function (props) {
    var _a;
    var className = props.className, children = props.children, isOpen = props.isOpen, onClose = props.onClose, lazy = props.lazy;
    var _b = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose: onClose,
        isOpen: isOpen
    }), close = _b.close, isMounted = _b.isMounted, isClosing = _b.isClosing;
    var theme = useTheme().theme;
    var mods = (_a = {},
        _a[cls.opened] = isOpen,
        _a[cls.isClosing] = isClosing,
        _a);
    if (lazy && !isMounted) {
        return null;
    }
    return (_jsx(Portal, { children: _jsxs("div", __assign({ className: classNames(cls.Modal, mods, [className, theme, "app_modal"]) }, { children: [_jsx(Overlay, { onClick: close }), _jsx("div", __assign({ className: cls.content }, { children: children }))] })) }));
};
