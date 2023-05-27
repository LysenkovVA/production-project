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
import { useNavigate } from "react-router-dom";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { useSelector } from "react-redux";
import { getArticleDetailsData } from "@/entities/Article";
import { getCanEditArticle } from "../../model/selectors/article";
import { HStack } from "@/shared/ui/Stack";
import { getRouteArticleEdit, getRouteArticles } from "@/shared/const/router";
export var ArticleDetailsPageHeader = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var navigate = useNavigate();
    var article = useSelector(getArticleDetailsData);
    var canEdit = useSelector(getCanEditArticle);
    var onBackToList = useCallback(function () {
        navigate(getRouteArticles());
    }, [navigate]);
    var onEditArticle = useCallback(function () {
        if (article) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [article, navigate]);
    return (_jsxs(HStack, __assign({ justify: "between", max: true, className: classNames("", {}, [className]) }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, onClick: onBackToList }, { children: t("Назад к списку") })), canEdit && _jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, onClick: onEditArticle }, { children: t("Редактировать") }))] })));
});
