import ArticleRating from "./ArticleRating";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
    title: "features/ArticleRating",
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator({
        user: {
            authData: { id: "1" },
        },
    })],
};

export const Normal = {
    args: {
        articleId: "1",
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: "GET",
                status: 200,
                response: [
                    {
                        rate: 4,
                    },
                ],
            },
        ],
    }
};

export const WithoutRate = {
    args: {
        articleId: "1",
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: "GET",
                status: 200,
                response: [],
            },
        ],
    }
};
