import React from "react";
import {StoryFn} from "@storybook/react";
import {ListBox} from "./ListBox";

export default {
    title: "shared/Popups/ListBox",
    component: ListBox,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    decorators: [
        (Story: StoryFn) => <div style={{padding: 200}}><Story /></div>
    ]
};

export const Normal = {
    args: {
        value: "1",
        items: [
            {content: "First option", value: "1"},
            {content: "Second option", value: "2"},
            {content: "Third option", value: "3"},
        ]
    }
};

export const TopLeft = {
    args: {
        value: "1",
        direction: "top left",
        items: [
            {content: "First option", value: "1"},
            {content: "Second option", value: "2"},
            {content: "Third option", value: "3"},
        ]
    }
};

export const TopRight = {
    args: {
        value: "1",
        direction: "top right",
        items: [
            {content: "First option", value: "1"},
            {content: "Second option", value: "2"},
            {content: "Third option", value: "3"},
        ]
    }
};

export const BottomLeft = {
    args: {
        value: "1",
        direction: "bottom left",
        items: [
            {content: "First option", value: "1"},
            {content: "Second option", value: "2"},
            {content: "Third option", value: "3"},
        ]
    }
};

export const BottomRight = {
    args: {
        value: "1",
        direction: "bottom right",
        items: [
            {content: "First option", value: "1"},
            {content: "Second option", value: "2"},
            {content: "Third option", value: "3"},
        ]
    }
};
