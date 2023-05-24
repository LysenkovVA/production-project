import AddCommentForm from "./AddCommentForm";
import {action} from "@storybook/addon-actions";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
    title: "features/AddCommentForm",
    component: AddCommentForm,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    decorators: [
        StoreDecorator({

        })
    ]
};

export const Normal = {
    args: {
        onSendComment: action("onSendComment")
    }

};
