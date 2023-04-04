import {StateSchema} from "app/providers/StoreProvider";
import {createSelector} from "@reduxjs/toolkit";
import {Simulate} from "react-dom/test-utils";

export const getUIScroll = (state: StateSchema) => state.ui.scroll;
export const getUIScrollByPath = createSelector(
    getUIScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
