import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import React, {ReactNode} from "react";
import {Portal} from "../Portal/Portal";
import {Overlay} from "../Overlay/Overlay";
import {useModal} from "shared/lib/hooks/useModal/useModal";
import {useTheme} from "app/providers/ThemeProvider";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 100;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const {
        close,
        isMounted,
        isClosing,
    } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen
    });

    const {theme} = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, "app_modal"])}>
                <Overlay onClick={close}/>
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
