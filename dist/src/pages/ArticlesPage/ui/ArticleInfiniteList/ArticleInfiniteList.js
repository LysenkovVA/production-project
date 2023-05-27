import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getArticles } from "../../model/slices/articlePageSlice";
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from "../../model/selectors/articlesPageSelectors";
import { ArticleList } from "@/entities/Article";
import { Text } from "@/shared/ui/Text";
export var ArticleInfiniteList = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var articles = useSelector(getArticles.selectAll);
    var isLoading = useSelector(getArticlesPageIsLoading);
    var error = useSelector(getArticlesPageError);
    var view = useSelector(getArticlesPageView);
    if (error) {
        return _jsx(Text, { text: t("Ошибка при загрузке статей") });
    }
    return (_jsx(ArticleList, { isLoading: isLoading, view: view, articles: articles, className: className }));
});
