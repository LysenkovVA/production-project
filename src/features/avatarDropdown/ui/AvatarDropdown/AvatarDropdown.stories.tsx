import {AvatarDropdown} from "./AvatarDropdown";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
    title: "features/AvatarDropdown/AvatarDropdown",
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    decorators: [
        RouterDecorator,
        StoreDecorator({
            user: {
                authData: {
                    id: "1",
                    avatar: "",
                    username: "Viktor"
                }
            }
        })
    ]
};

export const Normal = {
    args: {

    }
};
