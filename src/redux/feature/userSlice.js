import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

export const userSlice = createSlice({
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
            state.isAuthenticated = true;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        },

        //SignUp ...>>>
        signupRequest: (state) => {
            state.loading = true;
        },
        signupSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        signupFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        },

        //load User if logged In ...>>>
        loadUserRequest: (state) => {
            state.loading = true;
        },
        loadUserSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        loadUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        },
        //logOut User ...>>>
        logOutRequest: (state) => {
            state.loading = true;
        },
        logOutSuccess: (state) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
        },
        logOutFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = true;
        },

    }
})
export const { loginRequest, loginSuccess, loginFailure, signupRequest, signupSuccess, signupFailure, loadUserRequest, loadUserSuccess, loadUserFailure, logOutFailure, logOutRequest, logOutSuccess } = userSlice.actions;
export default userSlice.reducer;