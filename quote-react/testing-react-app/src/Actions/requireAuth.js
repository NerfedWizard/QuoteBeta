import { useLocation, Navigate, Outlet } from "react-router-dom";
// import { useAuth } from './../Hooks/useAuth';
import AuthService from './../services/auth.service';

const RequireAuth = () => {
    const user = AuthService.getCurrentUser();
    const location = useLocation();
    if (user && user.token) {
        return (<Outlet />);
    }
    return (<Navigate to="/login" state={{ from: location }} replace />)
}
export default RequireAuth;