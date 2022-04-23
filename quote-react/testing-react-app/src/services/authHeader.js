import jwtDecode from "jwt-decode";
export default function authHeader() {
    const user = jwtDecode(localStorage.getItem('user'));

    if (user && user.accessToken) {
        console.log(user);
        return { 'Authorization': user.accessToken };
    } else {
        return {};
    }
}