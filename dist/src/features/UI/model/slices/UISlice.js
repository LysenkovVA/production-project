import { createSlice } from "@reduxjs/toolkit";
var initialState = {
    scroll: {}
};
export var uiSlice = createSlice({
    name: "ui",
    initialState: initialState,
    reducers: {
        setScrollPosition: function (state, _a) {
            var payload = _a.payload;
            state.scroll[payload.path] = payload.position;
        },
    },
});
export var UIActions = uiSlice.actions;
export var UIReducer = uiSlice.reducer;
