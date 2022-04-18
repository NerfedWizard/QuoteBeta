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
// import { Link } from "react-router-dom";
import setJWTToken from '../../SecurityUtils/setJWTToken';
// import { GET_ERRORS, SET_CURRENT_USER } from "../../Actions/types";
// import jwt_decode from "jwt-decode";
import { useHistory, useNavigate } from 'react-router-dom';
// import securityReducer from '../../Reducers/securityReducer';
import { linkStyle } from "../../Style/styles";




export default function Login() {
    const [user, setUser] = useState({ username: '', password: '', errors: [] });
    const navigate = useNavigate();


    /**Need to add useReducer or something I can't figure out why I always go to the path even when I am failing the tests and getting errors but whatever*/



    const handleChange = (props) => (event) => {
        setUser({ ...user, [props]: event.target.value });

    };
    async function onSubmit(event) {
        axios.post(`/api/quote/users/login`, user).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("jwtToken", JSON.stringify(response.data));
            }
            setJWTToken(response.data.token);
        }).catch(error => {
            if (error.response) {
                // console.log(error.response.data);
                // user.errors.push(error.response.data);
            }
        });
        // console.log(user.errors);
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
        // console.log(user.errors.length);
        // if (user.errors.length === 0) {
        //     navigate('/loginsuccess');
        // } else {
        //     navigate('/register');
        //     // console.log(user.errors);
        // }
    };
    // const nextPath = () => {

    // }

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
                    onClick={callSubmit}
                    sx={{ borderRadius: 25 }}>
                    Submit
                </Button>
                {/* </Link> */}
            </Box>
        </>
    )
}