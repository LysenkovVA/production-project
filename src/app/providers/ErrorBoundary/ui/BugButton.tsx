import { useEffect, useState } from "react";
import { Button } from "@/shared/ui/deprecated/Button";
import { useTranslation } from "react-i18next";

// Компонент для тестирования Error Boundary
export const BugButton = () => {
    const [error, setError] = useState(false);

    const { t } = useTranslation();

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <Button onClick={onThrow}>{t("throw error")}</Button>;
};
