// import axios from "axios";
// import { GET_ERRORS, GET_QUOTES, GET_QUOTE } from "./types";

// export const getQuotes = () => async (dispatch) => {
//     const res = await axios.get("/api/quote/all");
//     dispatch({
//         type: GET_QUOTES,
//         payload: res.data,
//     });
// };
// export const getQuote = (id, history) => async (dispatch) => {
//     try {
//         const res = await axios.get(`/api/quote/${id}`);
//         dispatch({
//             type: GET_QUOTE,
//             payload: res.data,
//         });
//     } catch (error) {
//         history.push("/loginsuccess");
//     }
// };