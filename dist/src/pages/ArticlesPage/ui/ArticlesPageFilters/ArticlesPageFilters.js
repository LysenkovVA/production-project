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
import cls from "./ArticlesPageFilters.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { articlesPageActions } from "../../model/slices/articlePageSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView } from "../../model/selectors/articlesPageSelectors";
import { Card } from "@/shared/ui/Card";
import { Input } from "@/shared/ui/Input";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "@/shared/lib/hooks/useDebounce/useDebounce";
import { ArticleSortSelector } from "@/features/ArticleSortSelector";
import { ArticleViewSelector } from "@/features/ArticleViewSelector";
import { ArticleTypeTabs } from "@/features/ArticleTypeTabs";
export var ArticlesPageFilters = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var view = useSelector(getArticlesPageView);
    var sort = useSelector(getArticlesPageSort);
    var order = useSelector(getArticlesPageOrder);
    var search = useSelector(getArticlesPageSearch);
    var type = useSelector(getArticlesPageType);
    var fetchData = useCallback(function () {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);
    var debouncedFetchData = useDebounce(fetchData, 500);
    var onChangeView = useCallback(function (view) {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);
    var onChangeSort = useCallback(function (newSort) {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    var onChangeOrder = useCallback(function (newOrder) {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    var onChangeSearch = useCallback(function (search) {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);
    var onChangeType = useCallback(function (value) {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    return (_jsxs("div", __assign({ className: classNames(cls.ArticlesPageFilters, {}, [className]) }, { children: [_jsxs("div", __assign({ className: cls.sortWrapper }, { children: [_jsx(ArticleSortSelector, { sort: sort, order: order, onChangeOrder: onChangeOrder, onChangeSort: onChangeSort }), _jsx(ArticleViewSelector, { view: view, onViewClick: onChangeView })] })), _jsx(Card, __assign({ className: cls.search }, { children: _jsx(Input, { placeholder: t("Поиск"), value: search, onChange: onChangeSearch }) })), _jsx(ArticleTypeTabs, { value: type, onChangeType: onChangeType, className: cls.tabs })] })));
});
