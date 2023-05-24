import {EditableProfileCardHeader} from "./EditableProfileCardHeader";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
    title: "features/EditableProfileCard/EditableProfileCardHeader",
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    decorators: [StoreDecorator({})]
};

export const Normal = {
    args: {

    }
};
