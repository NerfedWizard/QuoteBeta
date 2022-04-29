import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SelectVariants from './Component/QuoteManagement/CategorySelect';
import RandomQuote from './Component/QuoteManagement/RandomQuote';
import AuthorSelect from './Component/QuoteManagement/AuthorSelect';
import Register from './Component/UserManagement/Register';
import Login from './Component/UserManagement/Login';
import RequireAuth from './Actions/requireAuth';
import Landing from './Component/Landing';
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import './App.css';
import AuthService from './services/auth.service';
import jwtDecode from 'jwt-decode';
import NavBar from './Component/Layout/NavBar';

const user = AuthService.getCurrentUser();



if (user && user.token) {
    const expTime = jwtDecode(user.token).exp;
    if (expTime < new Date().getTime() / 1000) {
        AuthService.logout();
        localStorage.removeItem('user');
        console.log('Token Expired');
    }
    // return 
}
const App = () => {


    return (
        <>
            <BrowserRouter>
                <Box justifyContent='center' sx={{ flexGrow: 5, backgroundColor: 'black' }} >
                    <CssBaseline />
                    <NavBar />
                    <Box sx={{ p: '5em', width: 'fit-content', justifyContent: 'center', left: '40%', m: -8 }}>
                        <Routes>
                            {
                                //Public Routes
                            }
                            <Route path="/" element={<Landing />} />
                            <Route exact path='login' element={<Login />} />
                            <Route exact path='register' element={<Register />} />
                            {
                                //Catch All
                            }
                            <Route path='*' element={<Navigate to="/" replace />} />
                            {
                                //Private Routes
                            }
                            <Route exact path='/' element={<RequireAuth />}>
                                <Route path='random' element={<RandomQuote />} />
                                <Route path='category' element={<SelectVariants />} />
                                <Route path='author' element={<AuthorSelect />} />
                            </Route>
                        </Routes>
                    </Box>
                </Box>
            </BrowserRouter>
        </>
    );
};
export default App;
