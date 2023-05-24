import {Input} from "./Input";

export default {
    title: "shared/Input",
    component: Input,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Primary = {
    args: {
        placeholder: "Type text",
        value: "Hello world"
    }
};

