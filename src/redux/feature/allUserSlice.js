import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const allUsersSlice = createSlice({
    name: "allUsers",
    initialState,
    reducers: {

        allUsersRequest: (state) => {
            state.loading = true;
        },
        allUsersSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        allUsersFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearErrors: (state) => {
            state.error = null;
        },

    }
})
export const { allUsersFailure, allUsersRequest, allUsersSuccess, clearErrors } = allUsersSlice.actions;
export default allUsersSlice.reducer;