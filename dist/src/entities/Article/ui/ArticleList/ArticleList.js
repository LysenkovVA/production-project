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
import cls from "./ArticleList.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { Text, TextSize } from "@/shared/ui/Text";
import { ArticleView } from "../../model/consts/consts";
var getSkeletons = function (view) {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map(function (item, index) { return (_jsx(ArticleListItemSkeleton, { className: cls.card, view: view }, index)); });
};
export var ArticleList = memo(function (props) {
    var className = props.className, articles = props.articles, isLoading = props.isLoading, _a = props.view, view = _a === void 0 ? ArticleView.SMALL : _a, target = props.target;
    var t = useTranslation().t;
    if (!isLoading && !articles.length) {
        return (_jsx("div", __assign({ className: classNames(cls.ArticleList, {}, [className, cls[view]]) }, { children: _jsx(Text, { size: TextSize.L, title: t("Статьи не найдены") }) })));
    }
    return (_jsxs("div", __assign({ "data-testid": "ArticleList", className: classNames(cls.ArticleList, {}, [className, cls[view]]) }, { children: [articles.map(function (item) { return (_jsx(ArticleListItem, { article: item, view: view, target: target, className: cls.card }, item.id)); }), isLoading && getSkeletons(view)] })));
});
