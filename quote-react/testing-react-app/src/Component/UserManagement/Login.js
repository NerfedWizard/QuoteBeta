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
import { Link } from "react-router-dom";
import setJWTToken from '../../SecurityUtils/setJWTToken';
import { GET_ERRORS, SET_CURRENT_USER } from "../../Actions/types";
import { login } from '../../Actions/securityActions';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import securityReducer from '../../Reducers/securityReducer';
import { connect, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";



export default function Login() {
    const [user, setUser] = useState({ username: '', password: '' });
    // const login = React.useContext(login);
    const [token, setToken] = React.useState('');
    const [state, dispatch] = useReducer(
        securityReducer,
        {
            type: '',
            payload: {},
        }
    );
    const handleChange = (props) => (event) => {
        setUser({ ...user, [props]: event.target.value });

    };
    async function onSubmit(event) {
        // try {

        await axios.post(`/api/quote/users/login`, user).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("jwtToken", JSON.stringify(response.data));
            }
            setToken(response.data.accessToken);
            setJWTToken(response.data.token);
            dispatch({
                type: SET_CURRENT_USER,
                payload: jwt_decode(response.data.token),
            });
        }).catch(error => {
            if (error.response) {

                dispatch({
                    type: GET_ERRORS,
                    payload: error.response.data,
                });

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
            // login(user);
        }
        // console.log(user.errors)
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
                {/* <div>{state}</div> */}
                <Link to="/loginsuccess">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={onSubmit}>
                        Submit
                    </Button>
                </Link>
            </Box>
        </>
    )
}
// Login.propTypes = {
//     login: PropTypes.func.isRequired,
//     errors: PropTypes.object.isRequired
// };

// const mapStateToProps = (props) => (user) => ({
//     errors: user.errors
// });
// export default connect(
//     mapStateToProps,
//     { login }
// )(Login);