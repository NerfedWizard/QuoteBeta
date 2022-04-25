import { BrowserRouter, Route, Routes, useNavigate, Navigate, Outlet, Link } from "react-router-dom";
import SelectVariants from './Component/QuoteManagement/CategorySelect';
import RandomQuote from './Component/QuoteManagement/RandomQuote';
import AuthorSelect from './Component/QuoteManagement/AuthorSelect';
import Register from './Component/UserManagement/Register';
import Login from './Component/UserManagement/Login';
import RequireAuth from './Actions/requireAuth';
import Landing from './Component/Landing';
import React from 'react';
import { Box, Container, CssBaseline, Paper, styled, Button, Stack, Alert } from '@mui/material';
import './App.css';
// import { Outlet, Link } from "react-router-dom";
import { Item, ColorButton, linkStyle } from './Style/styles';
import AuthService from './services/auth.service';
import jwtDecode from 'jwt-decode';
import NavBar from './Component/Layout/NavBar';

const user = AuthService.getCurrentUser();
// const navigate = useNavigate();

if (user && user.token) {
    const expTime = jwtDecode(user.token).exp;
    if (expTime < new Date().getTime() / 1000) {
        AuthService.logout();
        localStorage.removeItem('user');
        console.log('Token Expired');
        // navigate('/login');

    }
}
const App = () => {
    // const navigate = useNavigate();
    // if (!user && user.token) {
    //     navigate('/login');
    // }


    // const { auth } = useAuth();
    return (
        <>
            {/* <AuthContext value={auth}> */}
            <BrowserRouter>
                <Box id='gradient-shift' position='relative' justifyContent='center' alignItems='center' style={{ height: '100%', width: '100%', top: '0%', left: '0%' }} >
                    <Container>
                        <CssBaseline />
                        <NavBar />
                        <Box sx={{ m: 20 }}>
                            <Routes>
                                {
                                    //Public Routes
                                }
                                <Route path="/" element={<Landing />} />
                                <Route exact path='/' element={<Landing />} />
                                <Route exact path='login' element={<Login />} />
                                <Route exact path='register' element={<Register />} />
                                {/* Catch All */}
                                <Route path='*' element={<Navigate to="/" replace />} />
                                {/* <Route path='random' element={<RandomQuote />} /> */}
                                {/*
                                        Private Routes
                                    */}
                                <Route exact path='/' element={<RequireAuth />}>
                                    {/* <Route path='loginsuccess' element={<NavButtons />} /> */}
                                    <Route path='random' element={<RandomQuote />} />
                                    <Route path='category' element={<SelectVariants />} />
                                    <Route path='author' element={<AuthorSelect />} />
                                </Route>
                            </Routes>
                        </Box>
                    </Container>
                </Box>
            </BrowserRouter>
            {/* </AuthContext> */}
        </>
    );
};
export default App;
