import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SelectVariants from './Component/QuoteManagement/CategorySelect';
import RandomQuote from './Component/QuoteManagement/RandomQuote';
import AuthorSelect from './Component/QuoteManagement/AuthorSelect';
import NavButtons from './Component/Layout/NavButtons';
import Register from './Component/UserManagement/Register';
import Login from './Component/UserManagement/Login';
import RequireAuth from './Actions/requireAuth';
import Landing from './Component/Landing';
import React from 'react';
import { Box, Container, CssBaseline, Paper, styled, Button, Stack, Alert } from '@mui/material';
import './App.css';
import { Outlet, Link } from "react-router-dom";
// import { Provider } from 'react-redux';
import useAuth from './Hooks/useAuth';
import AuthContext from './Context/authProvider';
import { Item, ColorButton, linkStyle } from './Style/styles';

import NavBar from './Component/Layout/NavBar';

const App = () => {
    const { auth } = useAuth();
    return (
        <>
            {/* <AuthContext value={auth}> */}
                <BrowserRouter>
                    <Box id='gradient-shift' display='flex' style={{ height: '100vh', margin: 0, padding: 0 }} >
                        <Container width='fit-content' height='fit-content'>
                            <CssBaseline />
                            {/* <NavBar /> */}
                            <Box sx={{ m: 20, p: 'auto' }}>
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
                                    {/*
                                        Private Routes
                                    */}

                                    {/* <Route path='loginsuccess' element={<NavButtons />} /> */}
                                    <Route exact path='/' element={<RequireAuth />}>
                                        <Route path='/loginsuccess' element={<NavButtons />} />
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
