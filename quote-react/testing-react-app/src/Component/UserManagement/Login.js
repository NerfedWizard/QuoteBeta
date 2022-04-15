import React from 'react';
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



export default function Login() {
    const [user, setUser] = React.useState({ username: '', password: '' });
    // const { token } = null;
    const handleChange = (props) => (event) => {
        setUser({ ...user, [props]: event.target.value });
    };
    async function onSubmit() {
        await axios.post(`/api/quote/users/login`, user).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("jwtToken", JSON.stringify(response.data));
            }
            // token = response.data.token;
            setJWTToken(response.data.token);
        });
    }
    const handleClickShowPassword = () => {
        setUser({
            ...user,
            showPassword: !user.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
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
                <Link to="/loginsuccess">
                    <Button variant="contained" color="primary" onClick={onSubmit}>Submit</Button>
                </Link>
            </Box>
        </>
    )
}