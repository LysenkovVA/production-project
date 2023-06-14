import {Skeleton} from "./Skeleton";
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/shared/const/theme";

export default {
    title: "shared/Skeleton",
    component: Skeleton,
    argTypes: {
        backgroundColor: {control: "color"},
    },
};

export const Normal = {
    args: {
        width: "100%",
        height: 200,
    }
};

export const NormalDark = {
    args: {
        width: "100%",
        height: 200,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const NormalOrange = {
    args: {
        width: "100%",
        height: 200,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)]
};

export const Circle = {
    args: {
        border: "50%",
        width: 100,
        height: 100
    }
};

export const CircleDark = {
    args: {
        border: "50%",
        width: 100,
        height: 100
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const CircleOrange = {
    args: {
        border: "50%",
        width: 100,
        height: 100
    },
    decorators: [ThemeDecorator(Theme.ORANGE)]
};
