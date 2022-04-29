import axios from "axios";
import { useNavigate } from "react-router-dom";
// import useStore from "./store";

const API_URL = "api/quote/users/";


const register = (newUser) => {
    return axios.post(API_URL + 'register', newUser);
};

const login = (user) => {
    return axios
        .post(API_URL + 'login', user)
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
    // navigate ("/login");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default AuthService;