import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const getMyPostSlice = createSlice({
    name: "myPosts",
    initialState,
    reducers: {
        getMyPostRequest: (state) => {
            state.loading = true;
        },
        getMyPostSuccess: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        getMyPostFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { getMyPostFailure, getMyPostRequest, getMyPostSuccess } = getMyPostSlice.actions;
export default getMyPostSlice.reducer