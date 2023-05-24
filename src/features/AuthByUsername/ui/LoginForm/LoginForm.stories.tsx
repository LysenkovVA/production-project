import LoginForm from "./LoginForm";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
    title: "features/LoginForm",
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Primary = {
    args: {

    },
    decorators: [StoreDecorator({
        loginForm: {username: "123", password: "asd"}
    })]
};

export const withError = {
    args: {

    },
    decorators: [StoreDecorator({
        loginForm: {username: "123", password: "asd", error: "Error message"}
    })]
};

export const Loading = {
    args: {

    },
    decorators: [StoreDecorator({
        loginForm: {isLoading: true}
    })]
};
