import {Code} from "./Code";

export default {
    title: "shared/Code",
    component: Code,
    argTypes: {
        backgroundColor: {control: "color"},
    },
};
export const Normal = {
    args: {
        text: "import {Code} from \"./Code\";\n" +
            "\n" +
            "export default {\n" +
            "    title: \".../Code\",\n" +
            "    component: Code,\n" +
            "    argTypes: {\n" +
            "        backgroundColor: {control: \"color\"},\n" +
            "    },\n" +
            "} as ComponentMeta<typeof Code>;"
    }
};
