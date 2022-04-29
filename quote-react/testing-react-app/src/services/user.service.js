import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "api/quote/";

const getQuoteByAuthor = (author) => {
    return axios.get(API_URL + `author/${author}`, { headers: authHeader() });
};

const getRandomQuote = (identifier) => {
    return axios.get(API_URL + `${identifier}`, { headers: authHeader() });
};

const getQuoteByCategory = (category) => {
    return axios.get(API_URL + `category/${category}`, { headers: authHeader() });
};

// const getAdminBoard = () => {
//     return axios.get(API_URL + "admin", { headers: authHeader() });
// };

const UserService = {
    getQuoteByAuthor,
    getQuoteByCategory,
    getRandomQuote,
};

export default UserService;