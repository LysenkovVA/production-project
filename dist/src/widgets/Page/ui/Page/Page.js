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
import cls from "./Page.module.scss";
import { memo, useRef } from "react";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUIScrollByPath, UIActions } from "@/features/UI";
import { useLocation } from "react-router-dom";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle";
export var Page = memo(function (props) {
    var _a;
    var className = props.className, children = props.children, onScrollEnd = props.onScrollEnd;
    var wrapperRef = useRef();
    var triggerRef = useRef();
    var dispatch = useAppDispatch();
    var pathname = useLocation().pathname;
    var scrollPosition = useSelector(function (state) { return getUIScrollByPath(state, pathname); });
    useInfiniteScroll({
        callback: onScrollEnd,
        triggerRef: triggerRef,
        wrapperRef: wrapperRef,
    });
    useInitialEffect(function () {
        wrapperRef.current.scrollTop = scrollPosition;
    });
    var onScroll = useThrottle(function (e) {
        dispatch(UIActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);
    return (_jsxs("main", __assign({ ref: wrapperRef, className: classNames(cls.Page, {}, [className]), onScroll: onScroll, "data-testid": (_a = props["data-testid"]) !== null && _a !== void 0 ? _a : "Page" }, { children: [children, onScrollEnd
                ?
                    _jsx("div", { className: cls.trigger, ref: triggerRef })
                : null] })));
});
