// import axios from 'axios';

// const API_URL = "http://localhost:8080/api/quote";

//  function AuthService() {

//     async function login(username, password) {
//         return axios
//             .post(API_URL + '/users/login', { username: `${username}`, password: `${password}` })
//             .then(response => {
//                 if (response.data.accessToken) {
//                     localStorage.setItem("user", JSON.stringify(response.data));
//                 }
//                 return response.data;
//             });
//     }
//     function logout() {
//         localStorage.removeItem("user");
//     }
//     async function register(username, password, fullname, confirmPassword) {
//         return axios.post(API_URL + '/users/register', { username: `${username}`, fullName: `${fullname}`, password: `${password}`, confirmPassword: `${confirmPassword}` });
//     }
    // function getCurrentUser() {
    //     return JSON.parse(localStorage.getItem('user'));
    // }
// }

export default new AuthService();