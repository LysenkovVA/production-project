import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ProfilePage from "./ProfilePage";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {Country} from "@/entities/Country";
import {Currency} from "@/entities/Currency";
import {Theme} from "@/shared/const/theme";

export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...(args as object)} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [StoreDecorator({
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
})];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
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
})];




