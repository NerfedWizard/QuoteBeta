import React from 'react';
import { Stack, TextField, Button } from '@mui/material';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = React.useState('');
    
    const [password, setPassword] = React.useState('');
    
    const userLoggedIn = [{ username: `${username}`, password: `${password}` }];
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    
    async function onSubmit(event) {
        await axios.post(`/api/quote/users/login`, userLoggedIn[0]);
    }

    return (
        <>
            <Stack
                direction="row column"
                justifyContent="center"
                spacing={32}>
                <TextField
                    required
                    placeholder="Enter username"
                    value={username}
                    onChange={handleUsername}
                    label="Username"
                />
                <TextField
                    required
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePassword}
                    label="Password" />
                <Link to="/loginsuccess">
                    <Button variant="contained" color="primary" onClick={onSubmit}>Submit</Button>
                </Link>
            </Stack>
        </>
    )
}