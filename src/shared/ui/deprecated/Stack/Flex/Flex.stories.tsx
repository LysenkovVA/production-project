import React from "react";
import {Flex} from "./Flex";

export default {
    title: "shared/Stack/Flex",
    component: Flex,
    argTypes: {
        backgroundColor: {control: "color"},
    },
};

export const Row = {
    args: {
        children: (
            <>
                <div>one</div>
                <div>two</div>
                <div>three</div>
                <div>four</div>
            </>
        )
    }
};

export const RowGap4 = {
    args: {
        gap: "4",
        children: (
            <>
                <div>one</div>
                <div>two</div>
                <div>three</div>
                <div>four</div>
            </>
        )
    }
};

export const RowGap8 = {
    args: {
        gap: "8",
        children: (
            <>
                <div>one</div>
                <div>two</div>
                <div>three</div>
                <div>four</div>
            </>
        )
    }
};

export const RowGap16 = {
    args: {
        gap: "16",
        children: (
            <>
                <div>one</div>
                <div>two</div>
                <div>three</div>
                <div>four</div>
            </>
        )
    }
};

export const RowGap32 = {
    args: {
        gap: "32",
        children: (
            <>
                <div>one</div>
                <div>two</div>
                <div>three</div>
                <div>four</div>
            </>
        )
    }
};

export const Column = {
    args: {
        direction: "column",
        children: (
            <>
                <div>one</div>
                <div>two</div>
                <div>three</div>
                <div>four</div>
            </>
        )
    }
};

export const ColumnGap4 = {
    args: {
        direction: "column",
        gap: "4",
        children: (
            <>
                <div>one</div>
                <div>two</div>
                <div>three</div>
                <div>four</div>
            </>
        )
    }
};

export const ColumnGap8 = {
    args: {
        direction: "column",
        gap: "8",
        children: (
            <>
                <div>one</div>
                <div>two</div>
                <div>three</div>
                <div>four</div>
            </>
        )
    }
};

export const ColumnGap16 = {
    args: {
        direction: "column",
        gap: "16",
        children: (
            <>
                <div>one</div>
                <div>two</div>
                <div>three</div>
                <div>four</div>
            </>
        )
    }
};

export const ColumnGap32 = {
    args: {
        direction: "column",
        gap: "32",
        children: (
            <>
                <div>one</div>
                <div>two</div>
                <div>three</div>
                <div>four</div>
            </>
        )
    }
};
