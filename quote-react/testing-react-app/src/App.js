import axios from 'axios';
// import { Provider } from "react-redux";
import setJWTToken from "./SecurityUtils/setJWTToken";
// import store from "./store";
// import { SET_CURRENT_USER } from "./Actions/types";
import React from 'react';
import { Box, Container, CssBaseline, Paper, styled, Button, Stack, Alert } from '@mui/material';
import './App.css';
import { Outlet, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { linkStyle } from './Style/styles';
import { Item, ColorButton } from './Style/styles';
// import { NavBar } from './Component/Layout/NavButtons';
import logout from "./Component/Layout/Landing";


const jwtToken = localStorage.jwtToken;

if (jwtToken) {
    setJWTToken(jwtToken);
    const decoded_jwtToken = jwt_decode(jwtToken);

    const currentTime = Date.now() / 1000;
    if (decoded_jwtToken.exp < currentTime) {
        window.location.href = "/quote/landing";
    }
};
// const logout = async () => {
//     try {
//         await axios.get("/clear-cookie");
//         window.location = "http://localhost:3000/";
//     } catch (e) {
//         console.log(e);
//     }
// };

const Navigation = () => {
    return (
        <nav>
            <Link to="/landing" style={linkStyle}><ColorButton onClick={logout}>Home</ColorButton></Link>
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

            <Stack direction="column" justifyContent="flex-end" >
                <Navigation />
            </Stack>
            <Container sx={{
                p: 0,
                // m: 'auto',
            }}>
                <CssBaseline />
                {/* <NavBar /> */}
                <Item variant='contained'>
                    It's Time For Quotes.....
                </Item>
                <Outlet />
            </Container>

        </Box>
    );
};
export default App;
