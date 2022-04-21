// import axios from "axios";
// import { GET_ERRORS, SET_CURRENT_USER } from "./types";
// import setJWTToken from "../SecurityUtils/setJWTToken";
// import jwt_decode from "jwt-decode";
// import React, { useReducer, useState } from 'react';
// import securityReducer from './../Reducers/securityReducer';

// export const createNewUser = (newUser, history) => async () => {
    // const [registerState, dispatch] = useReducer(
    //     securityReducer,
    //     {
    //         type: '',
    //         payload: {},
    //     }
    // );
//     try {
//         await axios.post("/api/quote/users/register", newUser);
//         history.push("/login");
//         dispatch({
//             type: GET_ERRORS,
//             payload: {},
//         });
//     } catch (err) {
//         dispatch({
//             type: GET_ERRORS,
//             payload: err.response.data,
//         });
//     }
// };
// export const login = (LoginRequest) => async () => {
//     const [loginState, dispatch] = useReducer(

//         securityReducer,
//         {
//             type: '',
//             payload: {},
//         }
//     );
//     const [token, setToken] = useState('');
//     try {
//         // post => Login Request
//         const res = await axios.post("/api/quote/users/login", LoginRequest);
//         // extract token from res.data
//         setToken(res.data.accessToken);
//         console.log(res.data.accessToken);
//         // store the token in the localStorage
//         localStorage.setItem("jwtToken", token);
//         // set our token in header ***
//         setJWTToken(token);
//         // decode token on React
//         const decoded = jwt_decode(token);
//         // dispatch to our securityReducer
//         dispatch({
//             type: SET_CURRENT_USER,
//             payload: decoded,
//         });
//     } catch (err) {
//         dispatch({
//             type: GET_ERRORS,
//             payload: err.response.data,
//         });
//     }
// };
// export const logout = () => (dispatch) => {
//     localStorage.removeItem("jwtToken");
//     setJWTToken(false);
//     dispatch({
//         type: SET_CURRENT_USER,
//         payload: {},
//     });
// };