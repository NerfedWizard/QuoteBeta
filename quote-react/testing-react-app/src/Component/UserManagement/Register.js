import React from 'react';
import {
    Stack,
    TextField,
    Button,
    // FormControl
} from '@mui/material';
import axios from 'axios';
import { Link } from "react-router-dom";


export default function Register() {
    const [newUser, setNewUser] = React.useState({
        username: '',
        fullname: '',
        password: '',
        confirmPassword: '',
    });
    async function onSubmit(event) {
        // console.log(newUser);
        await axios.post(`/api/quote/users/register`, newUser);
    }
    const handleChange = (event) => {
        setNewUser({ ...newUser, [event.target.name]: event.target.value });
        // console.log(newUser.username, newUser.fullname, newUser.password, newUser.confirmPassword);
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
                    name="username"
                    placeholder="Enter username"
                    value={newUser.username}
                    onChange={handleChange}
                    label="Username"
                />
                <TextField
                    required
                    variant="outlined"
                    placeholder="Enter Full Name"
                    name='fullname'
                    value={newUser.fullname}
                    onChange={handleChange}
                    label="Full Name"
                />
                <TextField
                    required
                    variant="outlined"
                    placeholder="Enter Password"
                    value={newUser.password}
                    onChange={handleChange}
                    name='password'
                    type="password"
                    helperText="Password must be at least 4 characters long"
                    autoComplete="current-password"
                    label="Password"
                />
                <TextField
                    required
                    variant="outlined"
                    placeholder="Confirm Password"
                    value={newUser.confirmPassword}
                    type="password"
                    name='confirmPassword'
                    autoComplete="current-password"
                    onChange={handleChange}
                    label="Confirm Password"
                />
                <Link to="/login">
                    <Button variant="contained" color="primary" onClick={onSubmit}>Submit</Button>
                </Link>
            </Stack>
        </>
    )
}