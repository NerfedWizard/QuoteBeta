import axios from "axios";
import { GET_QUOTES, GET_QUOTES_AUTHOR, GET_QUOTES_CATEGORY } from "./types";

// export const getQuote = () => async (dispatch) => {
//     const res = await axios.get("/api/quote/ID69");
//     console.log(res);
// } catch (error) {
//     console.error(error);
// }

export async function getQuote() {
    try {
        const response = await axios.get('/api/quote/ID69');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}


// export const axios = require('axios');

// axios.get(/api/quote / ID69)
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
// export const getAuthorQuotes = () => async (dispatch) => {
//     const res = await axios.get(`/api/quote/author/${author}`);
//     dispatch({ type: GET_QUOTES_AUTHOR, payload: res.data, });
// };
// export const getCategoryQuotes = () => async (dispatch) => {
//     const res = await axios.get(`/api/quote/category/${category}`);
//     dispatch({ type: GET_QUOTES_CATEGORY, payload: res.data, });
// };
// export const getQuote = () => async (dispatch) => {
//     const res = await axios.get(`/quote/${identifier}`);
//     dispatch({ type: GET_QUOTE, payload: res.data, });
// };
