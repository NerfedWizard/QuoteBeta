export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { Authorization: user.token }; // for Spring Boot back-end
    } else {
        return {};
    }
}