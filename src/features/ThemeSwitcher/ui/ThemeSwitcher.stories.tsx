import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ThemeSwitcher } from "./ThemeSwitcher";
import {Theme} from "@/shared/const/theme";

export default {
    title: "features/ThemeSwitcher",
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: "color" },
    },
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




