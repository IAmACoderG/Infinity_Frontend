import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const postOfFollowingSlice = createSlice({
    name: "postOfFollowing",
    initialState,
    reducers: {

        postOfFollowingRequest: (state) => {
            state.loading = true;
        },
        postOfFollowingSuccess: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        postOfFollowingFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearErrors: (state) => {
            state.error = null;
        },

    }
})
export const { postOfFollowingFailure, postOfFollowingRequest, postOfFollowingSuccess, clearErrors } = postOfFollowingSlice.actions;
export default postOfFollowingSlice.reducer;