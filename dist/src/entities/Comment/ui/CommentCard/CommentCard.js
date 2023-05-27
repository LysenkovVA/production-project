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
import cls from "./CommentCard.module.scss";
import { memo } from "react";
import { Avatar } from "@/shared/ui/Avatar";
import { Text } from "@/shared/ui/Text";
import { Skeleton } from "@/shared/ui/Skeleton";
import { AppLink } from "@/shared/ui/AppLink";
import { VStack } from "@/shared/ui/Stack";
import { getRouteProfile } from "@/shared/const/router";
export var CommentCard = memo(function (props) {
    var className = props.className, comment = props.comment, isLoading = props.isLoading;
    if (isLoading) {
        return (_jsxs(VStack, __assign({ gap: "8", max: true, className: classNames(cls.CommentCard, {}, [className, cls.loading]) }, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsx(Skeleton, { width: 30, height: 30, border: "50%" }), _jsx(Skeleton, { height: 15, width: 100, className: cls.username })] })), _jsx(Skeleton, { width: "100%", height: 50, className: cls.text })] })));
    }
    if (!comment) {
        return null;
    }
    return (_jsxs(VStack, __assign({ gap: "8", max: true, className: classNames(cls.CommentCard, {}, [className]) }, { children: [_jsxs(AppLink, __assign({ to: getRouteProfile(comment.user.id), className: cls.header }, { children: [comment.user.avatar
                        ? _jsx(Avatar, { size: 30, src: comment.user.avatar })
                        : null, _jsx(Text, { className: cls.username, title: comment.user.username })] })), _jsx(Text, { className: cls.text, text: comment.text })] })));
});
