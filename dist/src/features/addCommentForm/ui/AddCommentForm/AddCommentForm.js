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
import cls from "./AddCommentForm.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Input } from "@/shared/ui/Input";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { useSelector } from "react-redux";
import { getAddCommentFormText } from "../../model/selectors/addCommentFormSelectors";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addCommentFormActions, addCommentFormReducer } from "../../model/slice/addCommentFormSlice";
import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { HStack } from "@/shared/ui/Stack";
var reducers = {
    addCommentForm: addCommentFormReducer,
};
var AddCommentForm = function (props) {
    var className = props.className, onSendComment = props.onSendComment;
    var t = useTranslation().t;
    var text = useSelector(getAddCommentFormText);
    //const error = useSelector(getAddCommentFormError);
    var dispatch = useAppDispatch();
    var onCommentTextChange = useCallback(function (value) {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);
    var onSendHandler = useCallback(function () {
        onSendComment(text || "");
        onCommentTextChange("");
    }, [onCommentTextChange, onSendComment, text]);
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers }, { children: _jsxs(HStack, __assign({ justify: "between", max: true, className: classNames(cls.AddCommentForm, {}, [className]) }, { children: [_jsx(Input, { className: cls.input, placeholder: t("Введите текст комментария"), value: text || "", onChange: onCommentTextChange }), _jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, onClick: onSendHandler }, { children: t("Отправить") }))] })) })));
};
export default memo(AddCommentForm);
