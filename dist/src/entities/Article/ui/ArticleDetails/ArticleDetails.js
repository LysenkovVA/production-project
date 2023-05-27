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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleDetails.module.scss";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { memo, useCallback, useEffect } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { useSelector } from "react-redux";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "../../model/selectors/articleDetails";
import { Text, TextAlign, TextSize } from "@/shared/ui/Text";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Avatar } from "@/shared/ui/Avatar";
import EyeIcon from "@/shared/assets/icons/eye20.svg";
import CalendarIcon from "@/shared/assets/icons/calendar.svg";
import { Icon } from "@/shared/ui/Icon";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { HStack, VStack } from "@/shared/ui/Stack";
import { ArticleBlockType } from "../../model/consts/consts";
var reducers = {
    articleDetails: articleDetailsReducer,
};
export var ArticleDetails = memo(function (props) {
    var className = props.className, id = props.id;
    var t = useTranslation("article-details").t;
    var dispatch = useAppDispatch();
    var isLoading = useSelector(getArticleDetailsIsLoading);
    var error = useSelector(getArticleDetailsError);
    var article = useSelector(getArticleDetailsData);
    var renderBlock = useCallback(function (block) {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return _jsx(ArticleCodeBlockComponent, { className: cls.block, block: block }, block.id);
            case ArticleBlockType.IMAGE:
                return _jsx(ArticleImageBlockComponent, { className: cls.block, block: block }, block.id);
            case ArticleBlockType.TEXT:
                return _jsx(ArticleTextBlockComponent, { className: cls.block, block: block }, block.id);
            default:
                return null;
        }
    }, []);
    useEffect(function () {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);
    var content;
    if (isLoading) {
        content = (_jsxs(_Fragment, { children: [_jsx(Skeleton, { className: cls.avatar, width: 200, height: 200, border: "50%" }), _jsx(Skeleton, { className: cls.title, width: 300, height: 32 }), _jsx(Skeleton, { className: cls.skeleton, width: 600, height: 24 }), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 200 })] }));
    }
    else if (error) {
        content = (_jsx(Text, { align: TextAlign.CENTER, title: t("Произошла ошибка при загрузке статьи") }));
    }
    else {
        content = (_jsxs(_Fragment, { children: [_jsx(HStack, __assign({ justify: "center", max: true, className: cls.avatarWrapper }, { children: _jsx(Avatar, { size: 200, src: article === null || article === void 0 ? void 0 : article.img, className: cls.avatar }) })), _jsxs(VStack, __assign({ gap: "4", max: true }, { children: [_jsx(Text, { className: cls.title, title: article === null || article === void 0 ? void 0 : article.title, text: article === null || article === void 0 ? void 0 : article.subtitle, size: TextSize.L }), _jsxs(HStack, __assign({ gap: "8", className: cls.articleInfo }, { children: [_jsx(Icon, { className: cls.icon, Svg: EyeIcon }), _jsx(Text, { text: String(article === null || article === void 0 ? void 0 : article.views) })] })), _jsxs(HStack, __assign({ gap: "8", className: cls.articleInfo }, { children: [_jsx(Icon, { className: cls.icon, Svg: CalendarIcon }), _jsx(Text, { text: article === null || article === void 0 ? void 0 : article.createdAt })] }))] })), article === null || article === void 0 ? void 0 : article.blocks.map(renderBlock)] }));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsx(VStack, __assign({ gap: "16", max: true, className: classNames(cls.ArticleDetails, {}, [className]) }, { children: content })) })));
});
