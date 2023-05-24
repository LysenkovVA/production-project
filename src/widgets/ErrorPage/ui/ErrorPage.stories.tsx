import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {ErrorPage} from "./ErrorPage";
import {Theme} from "@/shared/const/theme";

export default {
    title: "widgets/ErrorPage",
    component: ErrorPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Light = {
    args: {

    }
};

export const Dark = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
