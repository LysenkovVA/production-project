import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleDetails } from "@/entities/Article";
import { useParams } from "react-router-dom";
import {
    DynamicModuleLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "@/widgets/Page";
import { articleDetailsPageReducer } from "../../model/slice";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { ArticleRecommendationsList } from "@/features/articleRecommendationsList";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleRating } from "@/features/articleRating";
import { Card } from "@/shared/ui/deprecated/Card";
import { useTranslation } from "react-i18next";
import { ToggleFeatures } from "@/shared/lib/features";
import { memo } from "react";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();

    const { t } = useTranslation();

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
                    <ToggleFeatures
                        feature={"isArticleRatingEnabled"}
                        on={<ArticleRating articleId={id} />}
                        off={<Card>{t("Оценка статей скоро появится")}</Card>}
                    />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
