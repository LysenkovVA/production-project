import { rtkApi } from "@/shared/api/rtkApi";
var articleRatingApi = rtkApi.injectEndpoints({
    endpoints: function (build) { return ({
        getArticleRating: build.query({
            query: function (_a) {
                var userId = _a.userId, articleId = _a.articleId;
                return ({
                    url: "/article-ratings",
                    params: {
                        userId: userId,
                        articleId: articleId
                    }
                });
            },
        }),
        rateArticle: build.mutation({
            query: function (arg) { return ({
                url: "/article-ratings",
                method: "POST",
                body: arg,
            }); },
        }),
    }); },
});
export var useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export var useRateArticle = articleRatingApi.useRateArticleMutation;
