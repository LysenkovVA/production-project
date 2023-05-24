import { EditableProfileCard } from "./EditableProfileCard";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
    title: "features/EditableProfileCard/EditableProfileCard",
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator({})]
};

export const Normal = {
    args: {

    }
};
