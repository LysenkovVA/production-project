import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import { Modal } from "@/shared/ui/deprecated/Modal";
import { Text } from "@/shared/ui/deprecated/Text";
import { saveJsonSettings, useJsonSettings } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Drawer } from "@/shared/ui/deprecated/Drawer";
import { isMobile } from "react-device-detect";

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpened } = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
        }
    }, [dispatch, isArticlesPageWasOpened]);

    const onClose = () => setIsOpen(false);

    const text = <Text title={t("Привет")} text={t("Здесь список статей!")} />;

    if (isMobile) {
        return (
            <Drawer lazy isOpen={isOpen} onClose={onClose}>
                {text}
            </Drawer>
        );
    }

    return <Modal lazy isOpen={isOpen} onClose={onClose}></Modal>;
});
