import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SelectVariants from './Component/QuoteManagement/CategorySelect';
import RandomQuote from './Component/QuoteManagement/RandomQuote';
import AuthorSelect from './Component/QuoteManagement/AuthorSelect';
import NavButtons from './Component/Layout/NavButtons';
import Register from './Component/UserManagement/Register';
import Login from './Component/UserManagement/Login';
import SecureRoute from "./PrivateRoute";
import { Provider } from "react-redux";
import setJWTToken from "./SecurityUtils/setJWTToken";
import store from "./store";
// import { logout } from "./Actions/securityActions";
// import { SET_CURRENT_USER } from "./Actions/types";
import Landing from './Component/Landing';
// import AuthService from './services/authService';
import React from 'react';
import { Box, Container, CssBaseline, Paper, styled, Button, Stack, Alert } from '@mui/material';
import './App.css';
import { Outlet, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { AuthContext, useAuth } from "./Context/auth";

import { Item, ColorButton, linkStyle } from './Style/styles';
import useStateHistory from './services/useStateHistory';
import PrivateRoute from './PrivateRoute';
import NavBar from './Component/Layout/NavBar';
// import logout from "./Component/Layout/Landing";


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
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: 'rgba(86, 11, 184, 0.0)',
//     ...theme.typography.body2,
//     padding: theme.spacing(0.5),
//     position: 'relative',
//     justifyContent: 'center',
//     textAlign: 'center',
//     elevation: 5,
//     fontFamily: 'Hurricane',
//     fontSize: 65,
//     square: false,
//     color: 'antiquewhite',
// }));
const jwtToken = localStorage.jwtToken;


if (jwtToken) {
    setJWTToken(jwtToken);
    const decoded_jwtToken = jwt_decode(jwtToken);

    const currentTime = Date.now() / 1000;
    if (decoded_jwtToken.exp < currentTime) {
        logout();
        window.location.href = "/login";
    }
};
const logout = () => {
    // alert("You have been logged out");
    // console.log('LocalStorage Removed ', localStorage.getItem(jwtToken));
    localStorage.removeItem("jwtToken");
    setJWTToken(false);
    // console.log('LocalStorage Removed ', localStorage.jwtToken);
};

// const Navigation = () => {
//     return (
//         <nav>
//             
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>

//             {/* Secure Routes */}

//             <Link to="/loginsuccess">Login Success</Link>
//             <Link to="/random">Random</Link>
//             <Link to="/category">Category</Link>
//             <Link to="/author">Author</Link>
//         </nav>
//     );
// }

const App = () => {

    return (
        <>

            {/* <Provider store={store}> */}
            <BrowserRouter>
                {/* <Provider store={store}> */}
                <Box id='gradient-shift' display='flex' style={{ height: '100vh', margin: 0, padding: 0 }} >
                    <Container width='fit-content' height='fit-content'>
                        <CssBaseline />
                        <NavBar />
                        {/* <Item variant='contained' sx={{ fontweight: 'bold', textShadow: '1px 1px 2px rgb(117, 31, 64), 0 0 25px rgb(255, 77, 86),0 0 5px rgb(202, 173, 77)', color: 'black' }}>
                            It's Time For Quotes.....
                        </Item> */}
                        <Box sx={{ m: 20, p: 'auto' }}>
                            <Routes>
                                {
                                    //Public Routes
                                }
                                <Route exact path='/' element={<Landing />} />
                                <Route exact path='login' element={<Login />} />
                                <Route exact path='register' element={<Register />} />
                                <Route path='*' element={<Navigate to="/" replace />} />
                                {
                                    //Private Routes
                                }
                                <Route exact path='/' element={<PrivateRoute />}>
                                    <Route exact path='loginsuccess' element={<NavButtons />} />
                                    <Route path='random' element={<RandomQuote />} />
                                    <Route path='category' element={<SelectVariants />} />
                                    <Route path='author' element={<AuthorSelect />} />
                                </Route>
                            </Routes>
                        </Box>
                    </Container>
                </Box>
                {/* </Provider> */}
            </BrowserRouter>

        </>
    );
};
export default App;
