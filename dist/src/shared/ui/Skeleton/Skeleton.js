import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Skeleton.module.scss";
import { memo } from "react";
export var Skeleton = memo(function (props) {
    var className = props.className, height = props.height, width = props.width, border = props.border;
    var styles = {
        width: width,
        height: height,
        borderRadius: border,
    };
    return (_jsx("div", { className: classNames(cls.Skeleton, {}, [className]), style: styles }));
});
