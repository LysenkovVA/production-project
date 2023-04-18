import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleList.module.scss";
import {useTranslation} from "react-i18next";
import {HTMLAttributeAnchorTarget, memo} from "react";
import {Article, ArticleView} from "../../model/types/article";
import {ArticleListItem} from "../ArticleListItem/ArticleListItem";
import {ArticleListItemSkeleton} from "../ArticleListItem/ArticleListItemSkeleton";
import {Text, TextSize} from "shared/ui/Text/Text";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
        ));
};

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
        virtualized = true,
    } = props;
    const {t} = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            >
                <Text size={TextSize.L} title={t("Статьи не найдены")}/>
            </div>
        );
    }

    // const renderArticle = (article: Article) => {
    //     return (
    //         <ArticleListItem
    //             article={article}
    //             view={view}
    //             className={cls.card}
    //             key={article.id}
    //             target={target}
    //         />
    //     );
    // };

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {/*{articles.length > 0*/}
            {/*    ? articles.map(renderArticle)*/}
            {/*    : null}*/}
            {virtualized
                // eslint-disable-next-line i18next/no-literal-string
                ? (<Text text={"Виртуализация списка"}/>)
                // (
                //     <List
                //         height={height ?? 700}
                //         rowCount={rowCount}
                //         rowHeight={isBig ? 700 : 330}
                //         rowRenderer={rowRender}
                //         width={width ? width - 80 : 700}
                //         autoHeight
                //         onScroll={onChildScroll}
                //         isScrolling={isScrolling}
                //         scrollTop={scrollTop}
                //     />
                // )
                : (
                    articles.map((item) => (
                        <ArticleListItem
                            article={item}
                            view={view}
                            target={target}
                            key={item.id}
                            className={cls.card}
                        />
                    ))
                )}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
