var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { profileActions } from "../../model/slice/profileSlice";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { HStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { Button, ButtonTheme } from "@/shared/ui/Button";
export var EditableProfileCardHeader = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var authData = useSelector(getUserAuthData);
    var profileData = useSelector(getProfileData);
    var canEdit = (authData === null || authData === void 0 ? void 0 : authData.id) === (profileData === null || profileData === void 0 ? void 0 : profileData.id);
    var readonly = useSelector(getProfileReadonly);
    var dispatch = useAppDispatch();
    var onEdit = useCallback(function () {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    var onCancelEdit = useCallback(function () {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    var onSave = useCallback(function () {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (_jsxs(HStack, __assign({ max: true, justify: "between", className: classNames("", {}, [className]) }, { children: [_jsx(Text, { title: t("Профиль пользователя") }), canEdit && (_jsx("div", { children: readonly
                    ?
                        (_jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, onClick: onEdit, "data-testid": "EditableProfileCardHeader.EditButton" }, { children: t("Редактировать") })))
                    :
                        (_jsxs(HStack, __assign({ gap: "8" }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.OUTLINE_RED, onClick: onCancelEdit, "data-testid": "EditableProfileCardHeader.CancelButton" }, { children: t("Отменить") })), _jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, onClick: onSave, "data-testid": "EditableProfileCardHeader.SaveButton" }, { children: t("Сохранить") }))] }))) }))] })));
});
