import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT } from "./types";

export const getProjects = () => async (dispatch) => {
    const res = await axios.get("/api/quote/all");
    dispatch({
        type: GET_PROJECTS,
        payload: res.data,
    });
};
export const getProject = (id, history) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/quote/${id}`);
        dispatch({
            type: GET_PROJECT,
            payload: res.data,
        });
    } catch (error) {
        history.push("/loginsuccess");
    }
};