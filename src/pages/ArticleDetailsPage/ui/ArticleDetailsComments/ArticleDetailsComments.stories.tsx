import {ArticleDetailsComments} from "./ArticleDetailsComments";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
    title: "pages/ArticleDetailsPage/ArticleDetailsComments",
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    decorators: [
        StoreDecorator({})
    ]
};

export const Normal = {
    args: {
        id: "1",
    }
};
