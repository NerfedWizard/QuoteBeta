import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SelectVariants from './Component/QuoteManagement/CategorySelect';
import RandomQuote from './Component/QuoteManagement/RandomQuote';
import AuthorSelect from './Component/QuoteManagement/AuthorSelect';
import NavButtons from './Component/Layout/NavButtons';
import Register from './Component/UserManagement/Register';
import Login from './Component/UserManagement/Login';
import SecureRoute from "./PrivateRoute";
import setJWTToken from "./SecurityUtils/setJWTToken";
import Landing from './Component/Landing';
import React from 'react';
import { Box, Container, CssBaseline, Paper, styled, Button, Stack, Alert } from '@mui/material';
import './App.css';
import { Outlet, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Item, ColorButton, linkStyle } from './Style/styles';
import PrivateRoute from './PrivateRoute';
import NavBar from './Component/Layout/NavBar';





const jwtToken = localStorage.getItem('user');


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
    localStorage.removeItem("user");
    setJWTToken(false);
    // console.log('LocalStorage Removed ', localStorage.jwtToken);
};


const App = () => {

    return (
        <>
            {/* <AuthContext.Provider value={GetCurrentUser}> */}
            {/* <Provider store={store}> */}
            <BrowserRouter>
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
                                    <Route path='loginsuccess' element={<NavButtons />} />
                                    <Route path='random' element={<RandomQuote />} />
                                    <Route path='category' element={<SelectVariants />} />
                                    <Route path='author' element={<AuthorSelect />} />
                                </Route>
                            </Routes>
                        </Box>
                    </Container>
                </Box>
            </BrowserRouter>
            {/* </AuthContext.Provider> */}
        </>
    );
};
export default App;
