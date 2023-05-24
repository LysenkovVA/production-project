import ArticleEditPage from "./ArticleEditPage";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
    title: "pages/ArticleEditPage/ArticleEditPage",
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    decorators: [
        RouterDecorator,
        StoreDecorator({})
    ]
};

export const Normal = {
    args: {

    }
};
