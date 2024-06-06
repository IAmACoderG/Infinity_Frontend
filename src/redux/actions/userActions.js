import axiosInstance from "./axiosInstance";
import { loginRequest, loginSuccess, loginFailure, loadUserFailure, loadUserRequest, loadUserSuccess, logOutFailure, logOutRequest, logOutSuccess } from "../feature/userSlice";
import { postOfFollowingSuccess, postOfFollowingFailure, postOfFollowingRequest } from "../feature/postOfFollowingSlice";
import { allUsersFailure, allUsersRequest, allUsersSuccess } from "../feature/allUserSlice";
import { getMyPostFailure, getMyPostRequest, getMyPostSuccess } from "../feature/getMyPostSlice";
import { getUserPostFailure, getUserPostRequest, getUserPostSuccess } from "../feature/getUserPostSlice";
import { userProfileFailure, userProfileRequest, userProfileSuccess } from "../feature/getUserProfileSlice"
import { followFailure, followRequest, followSuccess } from "../feature/followSlice";

export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch(loginRequest());
        const { data } = await axiosInstance.post(`/api/v1/users/login`, { email, password },
            {
                headers: { "Content-Type": "application/json" },
            });
        dispatch(loginSuccess(data.data.loggedInUser));
        console.log("Data1:- ", dispatch(loginSuccess(data.data.loggedInUser)))
    } catch (error) {
        dispatch(loginFailure(error.response.data.message));
    }
};

export const loadUserIfLoggedIn = () => async (dispatch) => {
    try {
        dispatch(loadUserRequest());
        const { data } = await axiosInstance.get(`/api/v1/users/user-profile`);
        dispatch(loadUserSuccess(data.data));
    } catch (error) {
        dispatch(loadUserFailure(error.response.data.message));
    }
};

export const getPostFollowingUser = () => async (dispatch) => {
    try {
        dispatch(postOfFollowingRequest());
        const { data } = await axiosInstance.get(`/api/v1/posts/following-user-posts`);
        dispatch(postOfFollowingSuccess(data.data));
    } catch (error) {
        dispatch(postOfFollowingFailure(error.response.data.message));
    }
};

export const getMyPosts = () => async (dispatch) => {
    try {
        dispatch(getMyPostRequest());
        const { data } = await axiosInstance.get(`/api/v1/users/my-post`);
        dispatch(getMyPostSuccess(data.data));
    } catch (error) {
        dispatch(getMyPostFailure(error.response.data.message));
    }
};

export const getUserPosts = (id) => async (dispatch) => {
    try {
        dispatch(getUserPostRequest());
        const { data } = await axiosInstance.get(`/api/v1/users/user-post/${id}`);
        dispatch(getUserPostSuccess(data.data));
    } catch (error) {
        dispatch(getUserPostFailure(error.response.data.message));
    }
};

export const getUserProfile = (id) => async (dispatch) => {
    try {
        dispatch(userProfileRequest());
        const { data } = await axiosInstance.get(`/api/v1/users/user_profile/${id}`);
        dispatch(userProfileSuccess(data.data));
    } catch (error) {
        dispatch(userProfileFailure(error.response.data.message));
    }
};

export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch(allUsersRequest());
        const { data } = await axiosInstance.get(`/api/v1/users/all-users`);
        dispatch(allUsersSuccess(data.data));
    } catch (error) {
        dispatch(allUsersFailure(error.response.data.message));
    }
};

export const followAccess = (id) => async (dispatch) => {
    try {
        dispatch(followRequest())
        const { data } = await axiosInstance.get(`/api/v1/users/follow/${id}`);
        dispatch(followSuccess(data.message))
    } catch (error) {
        dispatch(followFailure(error.reponse.data.message))
    }
};

export const logOutUser = () => async (dispatch) => {
    try {
        dispatch(logOutRequest());
        const { data } = await axiosInstance.get(`/api/v1/users/logout`);
        dispatch(logOutSuccess(data.message));
    } catch (error) {
        dispatch(logOutFailure(error.response.data.message));
    }
};
