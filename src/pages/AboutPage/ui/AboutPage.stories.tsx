import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import AboutPage from "./AboutPage";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
    title: "pages/AboutPage",
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [
        RouterDecorator,
        StoreDecorator({

        })
    ]
};

export const Normal = {
    args: {

    }
};

export const Dark = {
    args: {

    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};
