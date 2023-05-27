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
import cls from "./ArticleListItem.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text } from "@/shared/ui/Text";
import { Icon } from "@/shared/ui/Icon";
import EyeIcon from "@/shared/assets/icons/eye20.svg";
import { Card } from "@/shared/ui/Card";
import { Avatar } from "@/shared/ui/Avatar";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { AppLink } from "@/shared/ui/AppLink";
import { ArticleBlockType, ArticleView } from "../../model/consts/consts";
import { getRouteArticleDetails } from "@/shared/const/router";
import { AppImage } from "@/shared/ui/AppImage";
import { Skeleton } from "@/shared/ui/Skeleton";
export var ArticleListItem = memo(function (props) {
    var className = props.className, article = props.article, view = props.view, target = props.target;
    var t = useTranslation().t;
    //const navigate = useNavigate();
    // const onOpenArticle = useCallback(() => {
    //     navigate(RoutePath.article_details + article.id);
    // }, [article.id, navigate]);
    var types = _jsx(Text, { className: cls.types, text: article.type.join(", ") });
    var views = (_jsxs(_Fragment, { children: [_jsx(Text, { className: cls.views, text: String(article.views) }), _jsx(Icon, { Svg: EyeIcon })] }));
    if (view === ArticleView.BIG) {
        var textBlock = article.blocks.find(function (block) { return block.type === ArticleBlockType.TEXT; });
        return (_jsx("div", __assign({ "data-testid": "ArticleListItem", className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, __assign({ className: cls.card }, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsx(Avatar, { size: 30, src: article.user.avatar }), _jsx(Text, { text: article.user.username, className: cls.username }), _jsx(Text, { text: article.createdAt, className: cls.date })] })), _jsx(Text, { title: article.title, className: cls.title }), types, _jsx(AppImage, { fallback: _jsx(Skeleton, { width: "100%", height: 250 }), src: article.img, className: cls.img, alt: article.title }), textBlock && (_jsx(ArticleTextBlockComponent, { block: textBlock, className: cls.textBlock })), _jsxs("div", __assign({ className: cls.footer }, { children: [_jsx(AppLink, __assign({ target: target, to: getRouteArticleDetails(article.id) }, { children: _jsx(Button
                                //onClick={onOpenArticle}
                                , __assign({ 
                                    //onClick={onOpenArticle}
                                    theme: ButtonTheme.OUTLINE }, { children: t("Читать далее...") })) })), views] }))] })) })));
    }
    return (_jsx(AppLink, __assign({ "data-testid": "ArticleListItem", target: target, to: getRouteArticleDetails(article.id), className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, __assign({ className: cls.card }, { children: [_jsxs("div", __assign({ className: cls.imageWrapper }, { children: [_jsx(AppImage, { fallback: _jsx(Skeleton, { width: 200, height: 200 }), className: cls.img, src: article.img, alt: article.title }), _jsx(Text, { className: cls.date, text: article.createdAt })] })), _jsxs("div", __assign({ className: cls.infoWrapper }, { children: [types, views] })), _jsx(Text, { className: cls.title, text: article.title })] })) })));
});
