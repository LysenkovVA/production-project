import {Modal} from "./Modal";
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/shared/const/theme";

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Primary = {
    args: {
        isOpen: true,
        children: "Modal dialog text"
    }
};

export const Dark = {
    args: {
        isOpen: true,
        children: "Modal dialog text"
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
