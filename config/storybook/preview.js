import {addDecorator} from "@storybook/react";
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import {SuspenseDecorator} from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";
import {Theme} from "../../src";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    // чтобы не было пэддингов
    layout: "fullscreen",
    themes: {
        default: "light",
        list: [
            { name: "light", class: Theme.LIGHT, color: "#e5e5e5" },
            { name: "dark", class: Theme.DARK, color: "#000000" },
            { name: "orange", class: Theme.ORANGE, color: "#af812d" },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);

