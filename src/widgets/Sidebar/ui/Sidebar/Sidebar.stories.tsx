import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Sidebar} from "./Sidebar";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator/RouterDecorator";


export default {
    title: "widgets/Sidebar",
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Light = {
    args: {

    },
    decorators: [
        RouterDecorator, 
        StoreDecorator({
            user: {authData: {}}
        })]
};

export const Dark = {
    args: {

    },
    decorators: [
        RouterDecorator,
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {authData: {}}
        })]
};

export const NoAuth = {
    args: {

    },
    decorators: [
        RouterDecorator,
        StoreDecorator({
            user: {}
        })]
};
