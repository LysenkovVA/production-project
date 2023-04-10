import {combineReducers} from "@reduxjs/toolkit";
import {ArticleDetailsPageSchema} from "../types";
import {articleDetailsPageRecommendationsReducer} from "pages/ArticleDetailsPage/model/slice/articleDetailsPageRecommendationsSlice";
import {articleDetailsCommentsReducer} from "pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer
});
