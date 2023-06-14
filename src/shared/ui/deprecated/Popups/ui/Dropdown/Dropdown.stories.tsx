import { Button } from "../../../Button/Button";

import { Dropdown } from "./Dropdown";

export default {
    title: "shared/Popups/Dropdown",
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Normal = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: "first",
            },
            {
                content: "second",
            },
            {
                content: "third",
            },
        ],
    },
};
