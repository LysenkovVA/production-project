import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Country } from "../../model/types/country";
import { ListBox } from "@/shared/ui/deprecated/Popups";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        return (
            <ListBox
                className={className}
                value={value}
                defaultValue={t("Укажите страну")}
                label={t("Укажите страну")}
                items={options}
                onChange={onChangeHandler}
                readonly={readonly}
                direction={"top right"}
            />
        );
    },
);
