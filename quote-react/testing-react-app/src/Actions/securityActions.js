import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setJWTToken from "../SecurityUtils/setJWTToken";
import jwt_decode from "jwt-decode";
import React from 'react';

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
    console.log("Made it to login");
    const [token, setToken] = React.useState([]);
    // try {
    // post => Login Request
    const res = await axios.post(`/api/quote/users/login`, LoginRequest).then(response => {
        if (response.data.accessToken) {
            localStorage.setItem("jwtToken", JSON.stringify(response.data));
        }
        setToken(response.data);
        console.log(response.data.messages);
        setJWTToken(response.data.token);
        dispatch({
            type: SET_CURRENT_USER,
            payload: jwt_decode(token),
        });
    }).catch(error => {
        if (error.response) {
            console.log(error.response.data);
        }
    });
    // extract token from res.data
    // const { token } = res.data;
    // store the token in the localStorage
    // localStorage.setItem("jwtToken", token);
    // set our token in header ***
    // setJWTToken(token);
    // decode token on React
    // const decoded = jwt_decode(token);
    // dispatch to our securityReducer
    // dispatch({
    //     type: SET_CURRENT_USER,
    //     payload: decoded,
    // });
    // } catch (err) {
    // dispatch({
    //     type: GET_ERRORS,
    //     payload: err.response.data,
    // });
    // }
};
export const logout = () => (dispatch) => {
    localStorage.removeItem("jwtToken");
    setJWTToken(false);
    dispatch({
        type: SET_CURRENT_USER,
        payload: {},
    });
};