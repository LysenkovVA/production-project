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
import cls from "./ArticlesPage.module.scss";
import { memo, useCallback } from "react";
import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlesPageReducer } from "../../model/slices/articlePageSlice";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Page } from "@/widgets/Page";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import { useSearchParams } from "react-router-dom";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";
var reducers = {
    articlesPage: articlesPageReducer,
};
var ArticlesPage = function (_a) {
    var className = _a.className;
    var dispatch = useAppDispatch();
    var searchParams = useSearchParams()[0];
    var onLoadNextPart = useCallback(function () {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);
    useInitialEffect(function () {
        dispatch(initArticlesPage(searchParams));
    });
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: false }, { children: _jsxs(Page, __assign({ onScrollEnd: onLoadNextPart, className: classNames(cls.ArticlesPage, {}, [className]), "data-testid": "ArticlesPage" }, { children: [_jsx(ArticlesPageFilters, {}), _jsx(ArticleInfiniteList, { className: cls.list })] })) })));
};
export default memo(ArticlesPage);
