import { createSlice } from "@reduxjs/toolkit";
var initialState = {
    text: "",
};
export var addCommentFormSlice = createSlice({
    name: "addCommentForm",
    initialState: initialState,
    reducers: {
        setText: function (state, action) {
            state.text = action.payload;
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchAddCommentFormData.pending, (state) => {
    //             state.isLoading = true;
    //             state.error = undefined;
    //         })
    //         .addCase(fetchAddCommentFormData.fulfilled, (state, action: PayloadAction<AddCommentForm>) => {
    //             state.isLoading = false;
    //             state.data = action.payload;
    //         })
    //         .addCase(fetchAddCommentFormData.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});
export var addCommentFormActions = addCommentFormSlice.actions;
export var addCommentFormReducer = addCommentFormSlice.reducer;
