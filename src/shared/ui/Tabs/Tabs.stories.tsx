import {Tabs} from "./Tabs";
import {action} from "@storybook/addon-actions";

export default {
    title: "shared/Tabs",
    component: Tabs,
    argTypes: {
        backgroundColor: {control: "color"},
    },
};

export const Normal = {
    args: {
        tabs: [
            {
                value: "tab 1",
                content: "tab 1"
            },
            {
                value: "tab 2",
                content: "tab 2"
            },
            {
                value: "tab 3",
                content: "tab 3"
            },
        ],
        value: "tab 1",
        onTabClick: action("onTabClick")
    }
};
