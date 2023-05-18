import {classNames, Mods} from "@/shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import {CSSProperties, useMemo} from "react";
import {AppImage} from "../AppImage";
import { Icon } from "../Icon";
import UserIcon from "../../assets/icons/fallback-avatar.svg";
import { Skeleton } from "../Skeleton";

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = ({
    className, 
    src, 
    size = 100, 
    alt,
    fallbackInverted
}: AvatarProps) => {

    const mods: Mods = {

    };

    const styles = useMemo<CSSProperties>(()=> {
        return {
            width: size,
            height: size
        };
    }, [size]);

    const fallback = <Skeleton
        width={size}
        height={size}
        border={"50%"}/>;

    const errorFallback = <Icon
        Svg={UserIcon}
        width={size}
        height={size}
        inverted={fallbackInverted}
    />;


    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
