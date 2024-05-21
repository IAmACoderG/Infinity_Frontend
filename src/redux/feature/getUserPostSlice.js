import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const getUserPostSlice = createSlice({
    name: "userPosts",
    initialState,
    reducers: {
        getUserPostRequest: (state) => {
            state.loading = true;
        },
        getUserPostSuccess: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        getUserPostFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { getUserPostFailure, getUserPostRequest, getUserPostSuccess } = getUserPostSlice.actions;
export default getUserPostSlice.reducer