import React, { useState, useEffect } from 'react';
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Box,
    IconButton
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import { ColorButton } from '../../Style/styles';
import AuthService from './../../services/auth.service';


export default function Login() {
    const [user, setUser] = useState({ username: '', password: '', errors: {} });
    const navigate = useNavigate();

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
    async function onSubmit(event) {
        event.preventDefault();
        AuthService.login(user).then(
            () => {
                navigate("/random");
                window.location.reload();
            },
            (error) => {
                setUser({ ...user, errors: error.response.data });
            }
        );
    }
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
                        onKeyPress={(e) => { if (e.key === 'Enter') { onSubmit(); } }}
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
                {/* {auth ? <Navigate to="/loginsuccess" /> : null} */}
            </Box>
        </>
    )
}