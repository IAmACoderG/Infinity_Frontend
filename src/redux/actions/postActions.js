import axiosInstance from "./axiosInstance";
import { likesFailure, likesRequest, likesSuccess } from "../feature/likesSlice";
import { commentsFailure, commentsRequest, commentsSuccess } from "../feature/commentsSlice";
import { createNewPostFailure, createNewPostRequest, createNewPostSuccess } from "../feature/createNewPostSlice"

export const createNewPost = (caption, imageFile) => async (dispatch) => {
    try {
        dispatch(createNewPostRequest());
        const formData = new FormData();
        formData.append("caption", caption);
        formData.append("imageFile", imageFile);
        const { data } = await axiosInstance.post(`api/v1/posts/add_post`, formData, { headers: { "Content-Type": "multipart/form-data" } });
        dispatch(createNewPostSuccess(data.data));
    } catch (error) {
        dispatch(createNewPostFailure(error.response.data.message));
    }
};

export const likePost = (id) => async (dispatch) => {
    try {
        dispatch(likesRequest());
        const { data } = await axiosInstance.get(`api/v1/posts/accessed_id/${id}`);
        dispatch(likesSuccess(data.message));
    } catch (error) {
        dispatch(likesFailure(error.response.data.message));
    }
};

export const commentOnPost = (id, comment) => async (dispatch) => {
    try {
        dispatch(commentsRequest());
        const { data } = await axiosInstance.get(`api/v1/posts/comment/${id}`, { comment }, { headers: { "Content-Type": "application/json" } });
        dispatch(commentsSuccess(data.message));
    } catch (error) {
        dispatch(commentsFailure(error.response.data.message));
    }
};
