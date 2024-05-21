import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        commentsRequest: (state) => {
            state.loading = true;
        },
        commentsSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        commentsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearErrors: (state) => {
            state.error = null;
        },
        clearMessages: (state) => {
            state.message = null;
        }
    }
})

export const { clearErrors, clearMessages, commentsFailure, commentsRequest, commentsSuccess } = commentsSlice.actions;
export default commentsSlice.reducer;