// import axios from 'axios';
// import authHeader from './authHeader';


// const API_URL = "http://localhost:8080/api/quote";

// //This looks like maybe I should access my components from here

// export default function UserService() {

//     async function getQuotesByAuthor(author) {
//         return axios.get(API_URL + '/author/' + author, { headers: authHeader() });
//     }
//     async function getQuotesByCategory(category) {
//         return axios.get(API_URL + '/category/' + category, { headers: authHeader() });
//     }
//     async function getRandomQuote(ranNum) {
//         return axios.get(API_URL + '/' + ranNum, { headers: authHeader() });
//     }
// }

// export default new UserService();