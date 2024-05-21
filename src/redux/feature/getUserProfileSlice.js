import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

export const getUserProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {
        userProfileRequest: (state) => {
            state.loading = true
        },
        userProfileSuccess: (state, action) => {
            state.loading = false;
            state.userProfile = action.payload;
        },
        userProfileFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})
export const { userProfileFailure, userProfileRequest, userProfileSuccess } = getUserProfileSlice.actions;
export default getUserProfileSlice.reducer