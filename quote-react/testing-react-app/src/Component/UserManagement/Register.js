import React from 'react';
import { Stack, TextField, Button } from '@mui/material';
import axios from 'axios';
import { Link } from "react-router-dom";


export default function Register() {
    const [username, setUsername] = React.useState('');
    const [fullname, setFullname] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const newUsers = [{ username: `${username}`, fullName: `${fullname}`, password: `${password}`, confirmPassword: `${confirmPassword}` }];
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    const handleFullname = (event) => {
        setFullname(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }
    async function onSubmit(event) {
        await axios.post(`/api/quote/users/register`, newUsers[0]);
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
                    placeholder="Enter Full Name"
                    value={fullname}
                    onChange={handleFullname}
                    label="Full Name"
                />
                <TextField
                    required
                    variant="outlined"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePassword}
                    type="password"
                    helperText="Password must be at least 4 characters long"
                    autoComplete="current-password"
                    label="Password" />
                <TextField
                    required
                    variant="outlined"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    type="password"
                    autoComplete="current-password"
                    onChange={handleConfirmPassword}
                    label="Confirm Password" />
                <Link to="/login">
                    <Button variant="contained" color="primary" onClick={onSubmit}>Submit</Button>
                </Link>
            </Stack>
        </>
    )
}