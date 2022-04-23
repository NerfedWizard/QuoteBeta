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
import { Link, Navigate, useNavigate } from "react-router-dom";
import setJWTToken from '../../SecurityUtils/setJWTToken';
import { ColorButton, linkStyle, Item } from '../../Style/styles';
import jwt_decode from "jwt-decode";




export default function Login() {
    const [user, setUser] = useState({ username: '', password: '' });
    // const login = React.useContext(login);
    // const { setAuthToken } = useAuth();
    // const { setAuth } = useAuth();
    const [token, setToken] = React.useState('');
    const navigate = useNavigate();
    // const [state, dispatch] = useReducer(
    //     securityReducer,
    //     {
    //         type: '',
    //         payload: {},
    //     }
    // );
    const handleChange = (props) => (event) => {
        setUser({ ...user, [props]: event.target.value });

    };
    // async function onSubmit(event) {
    //     const auth = authService();
    //     auth.login(user.username, user.password);
    // }
    let location = window.location.href;
    let from = location.state?.from?.pathname || '/';
    async function onSubmit(event) {
        // try {

        await axios.post(`/api/quote/users/login`, user).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("jwtToken", JSON.stringify(response.data));
            }
            setToken(response.data.accessToken);
            setJWTToken(response.data.token);
            navigate(from, { replace: true });
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
            onSubmit(event);

        }
    };
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                    <InputLabel htmlFor="standard-adornment-username">Username</InputLabel>
                    <OutlinedInput
                        id='outlined-adornment-username'
                        value={user.username}
                        onChange={handleChange('username')}
                        label="Username"
                        sx={{borderRadius:15}}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        value={user.password}
                        onChange={handleChange('password')}
                        type={user.showPassword ? 'text' : 'password'}
                        label="Password"
                        onKeyPress={(event) => keyPress(event)}
                        sx={{ borderRadius: 15 }}
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
                <ColorButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={onSubmit}
                    sx={{ color: 'antiquewhite', bgcolor: 'cornflowerblue', height: 35, alignSelf: 'center' }}>
                    Submit
                </ColorButton>
            </Box>
        </>
    )
}