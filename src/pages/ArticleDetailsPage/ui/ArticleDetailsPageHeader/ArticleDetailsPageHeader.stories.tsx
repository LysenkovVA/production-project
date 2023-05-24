import {ArticleDetailsPageHeader} from "./ArticleDetailsPageHeader";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator/RouterDecorator";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
    title: "pages/ArticleDetailsPage/ArticleDetailsPageHeader",
    component: ArticleDetailsPageHeader,
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
