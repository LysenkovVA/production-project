import {ArticlesPageFilters} from "./ArticlesPageFilters";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
    title: "pages/ArticlesPage/ArticlesPageFilters",
    component: ArticlesPageFilters,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    decorators: [StoreDecorator({

    })]
};

export const Normal = {
    args: {

    }
};
