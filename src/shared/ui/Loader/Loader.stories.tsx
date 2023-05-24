import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Loader } from "./Loader";
import {Theme} from "@/shared/const/theme";

export default {
    title: "shared/Loader",
    component: Loader,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Normal = {
    args: {}
};

export const Dark = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};




