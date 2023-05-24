import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Navbar} from "./Navbar";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {Theme} from "@/shared/const/theme";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
    title: "widgets/Navbar",
    component: Navbar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Light = {
    args: {

    },
    decorators: [StoreDecorator({})]
};

export const Dark = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};

export const AuthNavbar = {
    args: {

    },
    decorators: [
        RouterDecorator, 
        StoreDecorator({
            user: {
                authData: {
                    id: "1",
                    username: "User"
                }
            }
        })]
};
