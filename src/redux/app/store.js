import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../feature/userSlice";

const store = configureStore({ reducer: { user: authSlice } });

export default store;