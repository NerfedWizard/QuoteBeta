import axios from "axios";
import { GET_QUOTES, GET_QUOTES_AUTHOR, GET_QUOTES_CATEGORY } from "./types";

export const getQuotes = () => async (dispatch) => {
    const res = await axios.get("/quote/all");
    dispatch({ type: GET_QUOTES, payload: res.data, });
};
export const getAuthorQuotes = () => async (dispatch) => {
    const res = await axios.get(`/quote/author/${author}`);
    dispatch({ type: GET_QUOTES_AUTHOR, payload: res.data, });
};
export const getCategoryQuotes = () => async (dispatch) => {
    const res = await axios.get(`/quote/category/${category}`);
    dispatch({ type: GET_QUOTES_CATEGORY, payload: res.data, });
};
