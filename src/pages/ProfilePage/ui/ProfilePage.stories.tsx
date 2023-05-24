import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ProfilePage from "./ProfilePage";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {Country} from "@/entities/Country";
import {Currency} from "@/entities/Currency";
import {Theme} from "@/shared/const/theme";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [
        RouterDecorator,
        StoreDecorator({
            profile: {
                form: {
                    username: "admin",
                    age: 30,
                    country: Country.Russia,
                    lastname: "Ivanov",
                    first: "Ivan",
                    city: "Moscow",
                    currency: Currency.RUB,
                }
            }
        })
    ]
};

export const Normal = {
    args: {

    }
};

export const Dark = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK)]
};




