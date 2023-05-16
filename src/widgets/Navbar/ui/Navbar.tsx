import React, {memo, useCallback, useState} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "@/shared/ui/Button";
import {LoginModal} from "@/features/AuthByUsername";
import {Text, TextTheme} from "@/shared/ui/Text";
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink";
import {HStack} from "@/shared/ui/Stack";
import {NotificationButton} from "@/features/notificationButton";
import {AvatarDropdown} from "@/features/avatarDropdown";
import {useSelector} from "react-redux";
import {getUserAuthData} from "@/entities/User";
import {getRouteArticleCreate} from "@/shared/const/router";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(()=> {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(()=> {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t("Viktor's App") as string}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={getRouteArticleCreate()}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t("Создать статью")}
                </AppLink>
                <HStack
                    gap={"16"}
                    className={cls.actions}
                >
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t("Войти")}
            </Button>
            {isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />}
        </header>
    );
});
