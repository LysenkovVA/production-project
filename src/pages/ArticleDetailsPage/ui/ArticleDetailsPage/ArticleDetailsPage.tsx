import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleDetails } from "@/entities/Article";
import { useParams } from "react-router-dom";
import {
    DynamicModuleLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "@/widgets/Page";
import { articleDetailsPageReducer } from "../../model/slice";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { VStack } from "@/shared/ui/Stack";
import { ArticleRecommendationsList } from "@/features/articleRecommendationsList";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleRating } from "@/features/articleRating";
import { getFeatureFlag } from "@/shared/lib/features";
import { Counter } from "@/entities/Counter";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();

    const isArticleRatingEnabled = getFeatureFlag("isArticleRatingEnabled");
    const isCounterEnabled = getFeatureFlag("isCounterEnabled");

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <Page
                className={classNames("", {}, [className])}
                data-testid={"ArticleDetailsPage"}
            >
                <VStack gap={"16"} max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    {isArticleRatingEnabled && <ArticleRating articleId={id} />}
                    {isCounterEnabled && <Counter />}
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
