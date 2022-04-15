import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setJWTToken from "../SecurityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser, history) => async (dispatch) => {
    try {
        await axios.post("/api/quote/users/register", newUser);
        history.push("/login");
        dispatch({
            type: GET_ERRORS,
            payload: {},
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
        });
    }
};
export const login = (LoginRequest) => async (dispatch) => {
    try {
        // post => Login Request
        const res = await axios.post("/api/quote/users/login", LoginRequest).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            setJWTToken(response.data.token);
            return response.data;

        });
        // extract token from res.data
        // const { token } = res.data.token;
        // store the token in the localStorage
        // localStorage.setItem("jwtToken", JSON.stringify(token));
        // set our token in header ***
        // setJWTToken(token);
        // decode token on React
        const decoded = jwt_decode(res.data.token);
        // dispatch to our securityReducer
        // console.log(decoded);
        dispatch({
            type: SET_CURRENT_USER,
            payload: decoded,
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
        });
    }
};
export const logout = () => (dispatch) => {
    localStorage.removeItem("jwtToken");
    setJWTToken(false);
    dispatch({
        type: SET_CURRENT_USER,
        payload: {},
    });
};