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
import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Modal } from "@/shared/ui/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Loader } from "@/shared/ui/Loader";
export var LoginModal = function (_a) {
    var className = _a.className, isOpen = _a.isOpen, onClose = _a.onClose;
    return (_jsx(Modal, __assign({ className: classNames("", {}, [className]), isOpen: isOpen, onClose: onClose, lazy: true }, { children: _jsx(Suspense, __assign({ fallback: _jsx(Loader, {}) }, { children: _jsx(LoginFormAsync, { onSuccess: onClose }) })) })));
};
