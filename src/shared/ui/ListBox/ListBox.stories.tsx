import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {ListBox} from "./ListBox";

export default {
    title: "shared/ListBox",
    component: ListBox,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    decorators: [
        Story => <div style={{padding: 100}}><Story /></div>
    ]
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: "1",
    items: [
        {content: "First option", value: "1"},
        {content: "Second option", value: "2"},
        {content: "Third option", value: "3"},
    ]
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    value: "1",
    direction: "top left",
    items: [
        {content: "First option", value: "1"},
        {content: "Second option", value: "2"},
        {content: "Third option", value: "3"},
    ]
};

export const TopRight = Template.bind({});
TopRight.args = {
    value: "1",
    direction: "top right",
    items: [
        {content: "First option", value: "1"},
        {content: "Second option", value: "2"},
        {content: "Third option", value: "3"},
    ]
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    value: "1",
    direction: "bottom left",
    items: [
        {content: "First option", value: "1"},
        {content: "Second option", value: "2"},
        {content: "Third option", value: "3"},
    ]
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    value: "1",
    direction: "bottom right",
    items: [
        {content: "First option", value: "1"},
        {content: "Second option", value: "2"},
        {content: "Third option", value: "3"},
    ]
};
