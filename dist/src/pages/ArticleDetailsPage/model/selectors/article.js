import { createSelector } from "@reduxjs/toolkit";
import { getArticleDetailsData } from "@/entities/Article";
import { getUserAuthData } from "@/entities/User";
export var getCanEditArticle = createSelector(getArticleDetailsData, getUserAuthData, function (article, user) {
    if (!article || !user) {
        return false;
    }
    return article.user.id === user.id;
});
