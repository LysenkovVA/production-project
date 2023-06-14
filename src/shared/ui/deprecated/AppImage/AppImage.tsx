import {
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from "react";

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 *@deprecated
 */
export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = "image",
        fallback,
        errorFallback,
        ...otherProps
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // Вызовется синхронно до монтирования компонента
    useLayoutEffect(() => {
        const image = new Image();
        image.src = src ?? "";
        image.onload = () => {
            setIsLoading(false);
        };
        image.onerror = () => {
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

    return (
        <img className={className} src={src} alt={alt} {...otherProps}></img>
    );
});
