import React, { useState, useEffect, useContext, useReducer, useRef } from 'react';
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
// import axios from 'axios';
import useAuth from './../../Hooks/useAuth';
import axios from 'axios';
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import setJWTToken from '../../SecurityUtils/setJWTToken';
import { ColorButton, linkStyle, Item } from '../../Style/styles';
import jwt_decode from "jwt-decode";


// const LOGIN_URL = '/users/login';

export default function Login() {
    const [user, setUser] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({});
    const { auth, setAuth } = useAuth();
    const [errMsg, setErrMsg] = useState('');
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    // useEffect(() => {
    //     userRef.current.focus();
    // }, []);

    // useEffect(() => {
    //     setUser({ ...user, errors: ' ' });
    // }, [user.username, user.password]);

    useEffect(() => {
        document.title = user.username;
    });

    const handleChange = (props) => (event) => {
        setUser({ ...user, [props]: event.target.value });
    };

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

    async function onSubmit(event) {
        event.preventDefault();

        const response = await axios.post(`/api/quote/users/login`, user).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("jwtToken", JSON.stringify(response.data));
            };
            // setToken(response.data.accessToken);
            setAuth(user, response.data.accessToken);
            console.log(JSON.stringify(response.data.id));
            setJWTToken(response.data.token);
            navigate(from, { replace: true });
        }).catch(error => {
            if (error.response) {
                setErrMsg(response.data.errors);
            }
        });
        // } catch (err) {
        //     if (!err.response) {
        //         // setUser({ errors: err?.response });
        //         setErrMsg(err.response.data);
        //         console.log(errMsg);
        //     } else if (err.response.status === 400) {
        //         setErrMsg('Missing Username or Password');
        //     } else if (err.response.status === 401) {
        //         setErrMsg('Unauthorized');
        //     } else {
        //         setErrMsg('Login Failed');
        //     }
        //     // errRef.current.focus();
        // }
    }

    // await axios.post(`/api/quote/users/login`, user).then(response => {
    //     if (response.data.accessToken) {
    //         localStorage.setItem("jwtToken", JSON.stringify(response.data));
    //     }
    //     setToken(response.data.accessToken);
    //     setJWTToken(response.data.token);
    //     navigate(from, { replace: true });
    // }).catch(error => {
    //     if (error.response) {

    //     }

    //     });

    // }


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
                        sx={{ borderRadius: 15 }}
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
                {/* <Item>{errRef}</Item> */}
                <ColorButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={onSubmit}
                    sx={{ color: 'antiquewhite', bgcolor: 'cornflowerblue', height: 35, alignSelf: 'center' }}>
                    Submit
                </ColorButton>
                {auth ? <Navigate to="/loginsuccess" /> : null}
            </Box>
        </>
    )
}