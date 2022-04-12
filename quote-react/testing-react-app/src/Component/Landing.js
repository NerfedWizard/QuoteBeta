import React from 'react';
import { Stack, TextField, Button } from '@mui/material';
// import AddUserToDB from '../Actions/AddUser';
// import axios, { AxiosError } from 'axios';
// import NavButtons from './NavButtons';
import axios from 'axios';
import { Link } from "react-router-dom";
// import NavButtons from './NavButtons';

export default function Landing() {
    const [username, setUsername] = React.useState('');
    const [fullname, setFullname] = React.useState('');
    const newUsers = [{ username: `${username}`, fullName: `${fullname}` }];
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    const handleFullname = (event) => {
        setFullname(event.target.value);
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
                    placeholder="Enter username"
                    value={username}
                    onChange={handleUsername}
                    label="Username"
                />
                <TextField
                    required
                    placeholder="Enter Full Name"
                    value={fullname}
                    onChange={handleFullname}
                    label="Full Name"
                />
                <Link to="/loginsuccess">
                    <Button variant="contained" color="primary" onClick={onSubmit}>Submit</Button>
                </Link>
            </Stack>
        </>
    )
}