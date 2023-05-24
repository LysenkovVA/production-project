import { ArticleRecommendationsList } from "./ArticleRecommendationsList";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {Article} from "@/entities/Article";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator/RouterDecorator";

const article: Article = {
    id: "1",
    img: "",
    createdAt: "",
    views: 123,
    user: { id: "1", username: "123"},
    blocks: [],
    type: [],
    title: "title",
    subtitle: "subtitle"
};

export default {
    title: "features/ArticleRecommendationsList",
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [
        RouterDecorator,
        StoreDecorator({})
    ],
};

export const Normal = {
    args: {},
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3`,
                method: "GET",
                status: 200,
                response: [
                    {...article, id: "1"},
                    {...article, id: "2"},
                    {...article, id: "3"}
                ],
            },
        ],
    }
};
