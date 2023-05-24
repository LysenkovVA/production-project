import {NotificationButton} from "./NotificationButton";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
    title: "features/NotificationButton/NotificationButton",
    component: NotificationButton,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    decorators: [StoreDecorator({})]
};

export const Normal = {
    args: {

    }
};
