import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Country } from "../../model/types/country";
import { ListBox } from "@/shared/ui/Popups";
var options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
];
export var CountrySelect = memo(function (_a) {
    var className = _a.className, value = _a.value, onChange = _a.onChange, readonly = _a.readonly;
    var t = useTranslation().t;
    var onChangeHandler = useCallback(function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (_jsx(ListBox, { className: className, value: value, defaultValue: t("Укажите страну"), label: t("Укажите страну"), items: options, onChange: onChangeHandler, readonly: readonly, direction: "top right" }));
});
