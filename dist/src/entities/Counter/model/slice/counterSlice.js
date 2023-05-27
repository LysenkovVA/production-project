import { buildSlice } from "@/shared/lib/store";
var initialState = {
    value: 0,
};
export var counterSlice = buildSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: function (state) {
            state.value += 1;
        },
        decrement: function (state) {
            state.value -= 1;
        },
    },
});
export var counterActions = counterSlice.actions, counterReducer = counterSlice.reducer, useCounterActions = counterSlice.useActions;
