import React from 'react';
import { Stack, TextField, Button } from '@mui/material';
import axios from 'axios';
import { Link } from "react-router-dom";
import AuthService from './../../services/authService';
import setJWTToken from '../../SecurityUtils/setJWTToken';



export default function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const userLoggedIn = [{ username: `${username}`, password: `${password}` }];
    const auth = new AuthService();

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    async function onSubmit(event) {
        await axios.post(`/api/quote/users/login`, userLoggedIn[0]).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            console.log(response.data.token);
            setJWTToken(response.data.token);
            // return response.data;
        });
    }

    return (
        <>
            <Stack
                direction="row column"
                justifyContent="center"
                spacing={32}>
                <TextField
                    required
                    variant="outlined"
                    placeholder="Enter username"
                    value={username}
                    onChange={handleUsername}
                    label="Username"
                />
                <TextField
                    required
                    variant="outlined"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePassword}
                    type="password"
                    autoComplete="current-password"
                    label="Password" />
                <Link to="/loginsuccess">
                    <Button variant="contained" color="primary" onClick={onSubmit}>Submit</Button>
                </Link>
            </Stack>
        </>
    )
}