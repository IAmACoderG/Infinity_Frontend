import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        //login ..>>>
        loginRequest: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        //SignUp ...>>>
        signupRequest: (state) => {
            state.loading = true;
        },
        signupSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        signupFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        //loading ...>>>
        loadingRequest: (state) => {
            state.loading = true;
        },
        loadingSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        loadingFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

    }
})
export const { loginRequest, loginSuccess, loginFailure, signupRequest, signupSuccess, signupFailure, loadingRequest, loadingSuccess, loadingFailure } = userSlice.actions;
export default userSlice.reducer;