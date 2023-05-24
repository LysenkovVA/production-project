import {ForbiddenPage} from "../index";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator/RouterDecorator";
import {StoreProvider} from "@/app/providers/StoreProvider";
import {getRouteAdmin} from "@/shared/const/router";
import {UserRole} from "@/entities/User";

export default {
    title: "pages/ForbiddenPage",
    component: ForbiddenPage,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    decorators: [
        RouterDecorator,
        StoreProvider({initialState: {user: {authData: {roles: [UserRole.USER]}}}})
    ]
};

export const Normal = {
    args: {
        to: getRouteAdmin()
    }
};
