import {CommentList} from "./CommentList";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
    title: "entities/Comment/CommentList",
    component: CommentList,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    decorators: [RouterDecorator]
};

export const Normal = {
    args: {
        comments: [
            {
                id: "1",
                text: "hello world",
                user: {
                    id: "1",
                    username: "Vasya"
                }
            },
            {
                id: "2",
                text: "hello world",
                user: {
                    id: "2",
                    username: "Zhenya"
                }
            }
        ]
    }
};

export const Loading = {
    args: {
        comments: [],
        isLoading: true,
    }
};
