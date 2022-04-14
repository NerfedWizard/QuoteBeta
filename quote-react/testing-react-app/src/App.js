// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SelectVariants from './Component/QuoteManagement/CategorySelect';
// import RandomQuote from './Component/QuoteManagement/RandomQuote';
// import AuthorSelect from './Component/QuoteManagement/AuthorSelect';
// import NavButtons from './Component/Layout/NavButtons';
// import Register from './Component/UserManagement/Register';
// import Login from './Component/UserManagement/Login';
import SecureRoute from "./SecurityUtils/SecureRoute";
import { Provider } from "react-redux";
import setJWTToken from "./SecurityUtils/setJWTToken";
import store from "./store";
import { logout } from "./Actions/securityActions";
import { SET_CURRENT_USER } from "./Actions/types";
// import Landing from './Component/Layout/Landing';
import AuthService from './services/authService';
import React from 'react';
import { Box, Container, CssBaseline, Paper, styled } from '@mui/material';
import './App.css';
import { Outlet, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";


// const ColorButton = styled(Button)(({ theme }) => ({
//     color: 'black',
//     font: 'bold',
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//     fontFamily: 'Bitter',
//     '&:hover': {
//         background: "rgb(0, 206, 209,.3)",
//         variant: 'outlined',
//         focusRipple: true,
//     },
// }));
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(86, 11, 184, 0.0)',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    position: 'relative',
    justifyContent: 'center',
    textAlign: 'center',
    elevation: 5,
    fontFamily: 'Hurricane',
    fontSize: 65,
    square: false,
    color: 'antiquewhite',
}));
// const jwtToken = localStorage.jwtToken;

// if (jwtToken) {
//     setJWTToken(jwtToken);
//     const decoded_jwtToken = jwt_decode(jwtToken);
//     store.dispatch({
//         type: SET_CURRENT_USER,
//         payload: decoded_jwtToken,
//     });

//     const currentTime = Date.now() / 1000;
//     if (decoded_jwtToken.exp < currentTime) {
//         store.dispatch(logout());
//         window.location.href = "/quote/landing";
//     }
// };

const Navigation = () => {
    return (
        <nav>
            <Link to="/landing">Landing</Link>
            {/* <Link to="/login">Login</Link>
            <Link to="/register">Register</Link> */}

            {/* Secure Routes */}

            {/* <Link to="/loginsuccess">Login Success</Link>
            <Link to="/random">Random</Link>
            <Link to="/category">Category</Link>
            <Link to="/author">Author</Link> */}
        </nav>
    );
}

const App = () => {

    return (

        <Box id='gradient-shift' display='flex' style={{ height: '100vh', margin: 0, padding: 0 }}>
            {/* <Provider store={store}> */}
            <Navigation />
            <Container sx={{
                p: 0,
                m: 'auto',
            }}><CssBaseline />
                <Item variant='contained'>
                    It's Time For Quotes.....
                </Item>
                <Outlet />
            </Container>

        </Box>
    );
};
export default App;
