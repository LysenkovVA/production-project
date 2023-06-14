import {Button, ButtonSize, ButtonTheme} from "./Button";
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/shared/const/theme";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Primary = {
    args: {
        children: "Text"
    }
};

export const Clear = {
    args: {
        children: "Text",
        theme: ButtonTheme.CLEAR,
    }
};

export const ClearInverted = {
    args: {
        children: "Text",
        theme: ButtonTheme.CLEAR_INVERTED,
    }
};

export const Outline = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
    }
};

export const OutlineSizeL = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    }
};

export const OutlineSizeXL = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    }
};

export const OutlineDark = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const BackgroundTheme = {
    args: {
        children: "Text",
        theme: ButtonTheme.BACKGROUND,
    }
};

export const BackgroundThemeInverted = {
    args: {
        children: "Text",
        theme: ButtonTheme.BACKGROUND_INVERTED,
    }
};

export const Square = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true
    }
};

export const SquareSizeL = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L
    }
};

export const SquareSizeXL = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL
    }
};

export const Disabled = {
    args: {
        children: ">",
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    }
};
