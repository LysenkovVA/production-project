import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { NotFoundPage } from "./NotFoundPage";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {Theme} from "@/shared/const/theme";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [
        RouterDecorator,
        StoreDecorator({

        })]
};

export const Normal = {
    args: {

    }
};
export const Dark = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
