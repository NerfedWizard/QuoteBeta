import React, { useState, useEffect, useContext, useReducer } from 'react';
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
import { Link, useResolvedPath } from "react-router-dom";
import setJWTToken from '../../SecurityUtils/setJWTToken';

import { linkStyle } from "../../Style/styles";




export default function Login() {
    const [user, setUser] = useState({ username: '', password: '', errors: true });
    const [token, setToken] = useState('');
    // const navigate = useNavigate();


    /**Need to add useReducer or something I can't figure out why I always go to the path even when I am failing the tests and getting errors but whatever*/



    const handleChange = (props) => (event) => {
        setUser({ ...user, [props]: event.target.value });

    };
    async function onSubmit(event) {
        await axios.post(`/api/quote/users/login`, user).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("jwtToken", JSON.stringify(response.data));

            }
            setToken(response.data.accessToken);
            setJWTToken(response.data.token);

        }).catch(error => {
            if (error.response) {


            }

        });

    }
    
    useEffect(() => {
        document.title = user.username;
    });
    const handleClickShowPassword = () => {
        setUser({
            ...user,
            showPassword: !user.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const keyPress = (event) => {
        // console.log(event.key);
        if (event.key === 'Enter') {
            callSubmit(event);
            // console.log(user.errors)
        }
    };
    const callSubmit = (event) => {
        event.preventDefault();
        onSubmit(event);
    };
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="standard-adornment-username">Username</InputLabel>
                    <OutlinedInput
                        id='outlined-adornment-username'
                        value={user.username}
                        onChange={handleChange('username')}
                        label="Username"
                        sx={{ borderRadius: 25 }}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        value={user.password}
                        onChange={handleChange('password')}
                        type={user.showPassword ? 'text' : 'password'}
                        label="Password"
                        onKeyPress={(event) => keyPress(event)}
                        sx={{ borderRadius: 25 }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end">
                                    {user.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />

                </FormControl>
                {/* <Link to="/loginsuccess" style={linkStyle}> */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={onSubmit}
                    sx={{ borderRadius: 25 }}>
                    Submit

                </Button>
                {user.errors ? <Link to="/loginsuccess" style={linkStyle} /> : <Link to="/register" style={linkStyle} />}
                {/* </Link> */}
            </Box>
        </>
    )
}