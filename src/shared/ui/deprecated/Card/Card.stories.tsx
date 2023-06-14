import React from "react";
import { Card } from "./Card";
import { Text } from "../Text/Text";

export default {
    title: "shared/Card",
    component: Card,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Normal = {
    args: {
        children: (
            <Text
                title={"Test"}
                text={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                }
            />
        ),
    },
};
