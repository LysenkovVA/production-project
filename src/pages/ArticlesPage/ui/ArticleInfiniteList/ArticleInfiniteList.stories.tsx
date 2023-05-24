import {ArticleInfiniteList} from "./ArticleInfiniteList";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
    title: "pages/ArticlesPage/ArticleInfiniteList",
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    decorators: [
        StoreDecorator({})
    ]
};

export const NotFoundArticles = {
    args: {

    }
};
