import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const createNewPostSlice = createSlice({
    name: "createNewPost",
    initialState,
    reducers: {

        createNewPostRequest: (state) => {
            state.loading = true;
        },
        createNewPostSuccess: (state, action) => {
            state.loading = false;
            state.createNewPost = action.payload;
        },
        createNewPostFailure: (state, action) => {
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


export const { createNewPostRequest, createNewPostSuccess, createNewPostFailure, clearErrors, clearMessages } = createNewPostSlice.actions;
export default createNewPostSlice.reducer;