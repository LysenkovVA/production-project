import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
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
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
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
};

export const withError = Template.bind({});
withError.args = {
    error: "error"
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};
