import React, {useCallback, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {Modal} from "shared/ui/Modal/Modal";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(()=> {
        setIsAuthModal(prev => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t("Войти")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum eveniet iusto nisi obcaecati officia quibusdam vitae. Animi at non quos repellendus saepe sunt vel? Alias aspernatur eos ipsam iusto labore modi nobis obcaecati quas quidem, soluta, suscipit, temporibus voluptas voluptatibus?
            </Modal>
        </div>
    );
};
