import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import setJWTToken from './SecurityUtils/setJWTToken';

export default function PrivateRoute() {
    //Changed this from useAuth();
    const [auth, setAuth] = React.useState(true);
    // if (setJWTToken !== null) {
    //     setAuth(true);
    // }
    // determine if authorized, from context or however you're doing it
    // auth.set(true);
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/login" />;
}