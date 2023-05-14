import {useTranslation} from "react-i18next";
import {memo} from "react";
import {useSelector} from "react-redux";
import {getArticles} from "../../model/slices/articlePageSlice";
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from "../../model/selectors/articlesPageSelectors";
import {ArticleList} from "@/entities/Article";
import {Text} from "@/shared/ui/Text";

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const {className} = props;
    const {t} = useTranslation();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    if (error) {
        return <Text text={t("Ошибка при загрузке статей") as string} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});
