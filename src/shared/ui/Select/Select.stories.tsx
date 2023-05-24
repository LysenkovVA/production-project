import { Select } from "./Select";

export default {
    title: "shared/Select",
    component: Select,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Primary = {
    args: {
        label: "Укажите значение",
        options: [
            {value: "1", content: "Первый пункт"},
            {value: "2", content: "Второй пункт"}
        ]
    }
};
