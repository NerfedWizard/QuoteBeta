import React from 'react';
import {
    Stack,
    TextField,
    Button,
    FormControl
} from '@mui/material';
import axios from 'axios';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { createNewUser } from '../../Actions/securityActions';


export default function Register() {
    const [newUser, setNewUser] = React.useState({
        username: '',
        fullname: '',
        password: '',
        confirmPassword: '',
        // errors: {},

    });
    // const [username, setUsername] = React.useState('');
    // const [fullname, setFullname] = React.useState('');
    // const [password, setPassword] = React.useState('');
    // const [confirmPassword, setConfirmPassword] = React.useState('');
    // const newUsers = [{ username: `${username}`, fullName: `${fullname}`, password: `${password}`, confirmPassword: `${confirmPassword}` }];
    // const handleUsername = (event) => {
    //     setUsername(event.target.value);
    // }
    // const handleFullname = (event) => {
    //     setFullname(event.target.value);
    // }
    // const handlePassword = (event) => {
    //     setPassword(event.target.value);
    // }
    // const handleConfirmPassword = (event) => {
    //     setConfirmPassword(event.target.value);
    // }
    // const onSubmit = (event) => {
    //     // event.preventDefault();
    //     setNewUser({ username: newUser.username, password: newUser.password, confirmPassword: newUser.confirmPassword, fullname: newUser.fullname });
    //     // createNewUser(newUser);
    // }
    async function onSubmit(event) {
        // setNewUser({ [event.target.name]: event.target.value, [event.target.name]: event.target.value, [event.target.name]: event.target.value, [event.target.name]: event.target.value });
        // console.log(newUser);
        await axios.post(`/api/quote/users/register`, newUser);
        // createNewUser()
    }
    const onChange = (event) => {
        setNewUser({ [event.target.name]: event.target.value });
        console.log(event.target.name + ':' + event.target.value);
    }
    return (
        <>
            <Stack
                direction="row column"
                justifyContent="center"
                spacing={32}>
                {/* <FormControl> */}
                <TextField
                    required
                    variant="outlined"
                    name="username"
                    placeholder="Enter username"
                    value={newUser.username}
                    onChange={onChange}
                // label="Username"
                />
                {/* </FormControl> */}
                {/* <FormControl> */}
                <TextField
                    required
                    variant="outlined"
                    placeholder="Enter Full Name"
                    name='fullname'
                    value={newUser.fullname}
                    onChange={onChange}
                // label="Full Name"
                />
                {/* </FormControl>
                <FormControl> */}
                <TextField
                    required
                    variant="outlined"
                    placeholder="Enter Password"
                    value={newUser.password}
                    onChange={onChange}
                    name='password'
                    type="password"
                    helperText="Password must be at least 4 characters long"
                    autoComplete="current-password"
                // label="Password" 
                />
                {/* </FormControl>
                <FormControl> */}
                <TextField
                    required
                    variant="outlined"
                    placeholder="Confirm Password"
                    value={newUser.confirmPassword}
                    type="password"
                    name='confirmPassword'
                    autoComplete="current-password"
                    onChange={onChange}
                // label="Confirm Password" 
                />
                {/* </FormControl> */}
                <Link to="/login">
                    <Button variant="contained" color="primary" onClick={onSubmit}>Submit</Button>
                </Link>
            </Stack>
        </>
    )
}