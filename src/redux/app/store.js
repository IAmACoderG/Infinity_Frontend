import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";
import postOfFollowingSlice from "../feature/postOfFollowingSlice"
import allUserSlice from "../feature/allUserSlice";
import createNewPostSlice from "../feature/createNewPostSlice"
import likesSlice from "../feature/likesSlice";
import commentsSlice from "../feature/commentsSlice";
import getMyPostSlice from "../feature/getMyPostSlice";
import getUserPostSlice from "../feature/getUserPostSlice";
import getUserProfileSlice from "../feature/getUserProfileSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        postOfFollowing: postOfFollowingSlice,
        allUsers: allUserSlice,
        likes: likesSlice,
        comments: commentsSlice,
        createNewPost: createNewPostSlice,
        myPosts: getMyPostSlice,
        userPosts: getUserPostSlice,
        userProfile: getUserProfileSlice
    }
});

export default store;