import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const likesSlice = createSlice({
    name: "likes",
    initialState,
    reducers: {
        likesRequest: (state) => {
            state.loading = true;
        },
        likesSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        likesFailure: (state, action) => {
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

export const { clearErrors, clearMessages, likesFailure, likesRequest, likesSuccess } = likesSlice.actions;
export default likesSlice.reducer;