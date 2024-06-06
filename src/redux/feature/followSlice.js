import { createSlice } from "@reduxjs/toolkit"
const initialState = {}

const followSlice = createSlice({
    name: "follow",
    initialState,
    reducers: {
        followRequest: (state) => {
            state.loading = true;
        },
        followSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        followFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { followFailure, followRequest, followSuccess } = followSlice.actions;
export default followSlice.reducer;