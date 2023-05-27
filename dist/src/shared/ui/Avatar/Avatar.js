import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import { useMemo } from "react";
import { AppImage } from "../AppImage";
import { Icon } from "../Icon";
import UserIcon from "../../assets/icons/fallback-avatar.svg";
import { Skeleton } from "../Skeleton";
export var Avatar = function (_a) {
    var className = _a.className, src = _a.src, _b = _a.size, size = _b === void 0 ? 100 : _b, alt = _a.alt, fallbackInverted = _a.fallbackInverted;
    var mods = {};
    var styles = useMemo(function () {
        return {
            width: size,
            height: size
        };
    }, [size]);
    var fallback = _jsx(Skeleton, { width: size, height: size, border: "50%" });
    var errorFallback = _jsx(Icon, { Svg: UserIcon, width: size, height: size, inverted: fallbackInverted });
    return (_jsx(AppImage, { fallback: fallback, errorFallback: errorFallback, src: src, alt: alt, style: styles, className: classNames(cls.Avatar, mods, [className]) }));
};
