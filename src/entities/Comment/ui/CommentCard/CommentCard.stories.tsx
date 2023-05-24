import {CommentCard} from "./CommentCard";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
    title: "entities/Comment/CommentCard",
    component: CommentCard,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    decorators: [RouterDecorator]
};

export const Normal = {
    args: {
        comment: {
            id: "1",
            text: "hello world",
            user: {
                id: "1",
                username: "Vasya"
            }
        },
    }
};

export const IsLoading = {
    args: {
        comment: {
            id: "1",
            text: "hello world",
            user: {
                id: "1",
                username: "Vasya"
            }
        },
        isLoading: true
    }
};
