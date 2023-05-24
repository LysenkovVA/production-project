import {Text, TextSize, TextTheme} from "./Text";
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/shared/const/theme";

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Primary = {
    args: {
        title: "Title",
        text: "Text"
    }
};

export const OnlyTitle = {
    args: {
        title: "Title",
        text: undefined
    }
};

export const OnlyText = {
    args: {
        title: undefined,
        text: "Text"
    }
};

export const PrimaryDark = {
    args: {
        title: "Title",
        text: "Text"
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const OnlyTitleDark = {
    args: {
        title: "Title",
        text: undefined
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const OnlyTextDark = {
    args: {
        title: undefined,
        text: "Text"
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Error = {
    args: {
        title: "Title",
        text: "Text",
        theme: TextTheme.ERROR
    }
};

export const ErrorDark = {
    args: {
        title: "Title",
        text: "Text",
        theme: TextTheme.ERROR
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const SizeL = {
    args: {
        title: "Title",
        text: "Text",
        size: TextSize.L,
    }
};

export const SizeM = {
    args: {
        title: "Title",
        text: "Text",
        size: TextSize.M,
    }
};

export const SizeS = {
    args: {
        title: "Title",
        text: "Text",
        size: TextSize.S,
    }
};
