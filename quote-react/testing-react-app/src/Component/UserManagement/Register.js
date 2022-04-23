import React, { useReducer, useCallback, useState } from 'react';
import {
    Stack,
    TextField,
    Button,
    FormGroup,
    FormControl,
    InputAdornment,
    Input,
    InputLabel,
    OutlinedInput,
    Box,
    FormHelperText,
    IconButton
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { ColorButton } from '../../Style/styles';
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [flag, setFlag] = useState(false);
    const [newUser, setNewUser] = useState({
        username: '',
        fullName: '',
        password: '',
        confirmPassword: '',
        // errors: {},
    });

    const handleChange = (props) => (event) => {
        setNewUser({ ...newUser, [props]: event.target.value });
    };
    async function onSubmit(event) {
        // console.log(JSON.stringify(newUser));
        try {
            await axios.post("/api/quote/users/register", newUser);
            event.history.push("/login");

        } catch (err) {

        }
    };
    const handleClickShowPassword = () => {
        setNewUser({
            ...newUser,
            showPassword: !newUser.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClickShowConfirmPassword = () => {
        setNewUser({
            ...newUser,
            showConfirmPassword: !newUser.showConfirmPassword,
        });
    };
    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };
    const callSubmit = (event) => {
        event.preventDefault();
        onSubmit(event);
        if (newUser.errors !== undefined) {
            navigate("/login");
        } else {
            navigate("/landing");
            // console.log(newUser.errors);
            // hasErrors();
        }
    };
    // const hasErrors = () => {
    //     return <h1>{newUser.errors}</h1>
    // }
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                    <InputLabel htmlFor="standard-adornment-username">Username</InputLabel>
                    <OutlinedInput
                        id='outlined-adornment-username'
                        value={newUser.username}
                        onChange={handleChange('username')}
                        label="Username"
                        sx={{ borderRadius: 15 }}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                    <InputLabel htmlFor="standard-adornment-fullName">Fullname</InputLabel>
                    <OutlinedInput
                        id='outlined-adornment-fullname'
                        value={newUser.fullName}
                        onChange={handleChange('fullName')}
                        label="fullName"
                        sx={{ borderRadius: 15 }}
                    />
                </FormControl>

                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        value={newUser.password}
                        onChange={handleChange('password')}
                        type={newUser.showPassword ? 'text' : 'password'}
                        label="Password"
                        sx={{ borderRadius: 15 }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end">
                                    {newUser.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                    <InputLabel htmlFor="standard-adornment-confirmPassword">Confirm Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-confirmPassword"
                        value={newUser.confirmPassword}
                        onChange={handleChange('confirmPassword')}
                        type={newUser.showConfirmPassword ? 'text' : 'password'}
                        label="Confirm Password"
                        sx={{ borderRadius: 15 }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle confirmPassword visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownConfirmPassword}
                                    edge="end">
                                    {newUser.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <ColorButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={callSubmit}
                    sx={{ color: 'antiquewhite', bgcolor: 'cornflowerblue', height: 35, alignSelf: 'center'}}>
                    Submit
                </ColorButton>
            </Box>
        </>
    )
}