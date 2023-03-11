
import React from "react";
import {ComponentStory, ComponentMeta } from "@storybook/react";
import {CurrencySelect} from "./CurrencySelect";

export default {
    title: "entities/CurrencySelect",
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        // Нужный аргумент
        to: "/"
    }
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};


