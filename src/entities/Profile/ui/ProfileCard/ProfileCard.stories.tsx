import {ProfileCard} from "../ProfileCard/ProfileCard";
import {Country} from "@/entities/Country";
import {Currency} from "@/entities/Currency";
import avatar from "@/shared/assets/tests/storybook.jpg";

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Primary =  {
    args: {
        data: {
            username: "admin",
            age: 30,
            country: Country.Russia,
            lastname: "Ivanov",
            first: "Ivan",
            city: "Moscow",
            currency: Currency.RUB,
            avatar
        }
    }
};

export const WithError = {
    args: {
        error: "error"
    }
};

export const Loading = {
    args: {
        isLoading: true
    }
};
