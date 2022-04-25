import React, {useEffect, useState } from 'react';
import {
    // Stack,
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
import AuthService from './../../services/auth.service';
import { ColorButton } from '../../Style/styles';
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    // const [flag, setFlag] = useState(false);
    const [newUser, setNewUser] = useState({
        username: '',
        fullName: '',
        password: '',
        confirmPassword: '',
        errors: {},
    });
    // const user = AuthService.getCurrentUser();
    const showErrors = () => {
        if (newUser.errors) {
            return (
                <FormHelperText error>
                    {Object.values(JSON.stringify(newUser.errors)).map((error, i) => {
                        return <p key={i}>{error}</p>
                    })}
                </FormHelperText>
            )
        }
    }
    const handleChange = (props) => (event) => {
        setNewUser({ ...newUser, [props]: event.target.value });
    };
    async function onSubmit(event) {
        AuthService.register(newUser).then(
            () => {
                navigate("/login");
                window.location.reload();
            },
            (err) => {
                setNewUser({ ...newUser, errors: err.response.data });
                console.log(JSON.stringify(newUser.errors));
                showErrors();
            }
        );
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
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                    <InputLabel htmlFor="standard-adornment-username">
                        Username
                    </InputLabel>
                    <OutlinedInput
                        id='outlined-adornment-username'
                        value={newUser.username}
                        onChange={handleChange('username')}
                        label="Username"
                        // error
                        // helperText={JSON.stringify(newUser.errors) }
                        sx={{ borderRadius: 15 }}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                    <InputLabel htmlFor="standard-adornment-fullName">
                        Fullname
                    </InputLabel>
                    <OutlinedInput
                        id='outlined-adornment-fullname'
                        value={newUser.fullName}
                        // error
                        onChange={handleChange('fullName')}
                        label="fullName"
                        // helperText={JSON.stringify(newUser.errors)}
                        sx={{ borderRadius: 15 }}
                    />
                </FormControl>

                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                    <InputLabel htmlFor="standard-adornment-password">
                        Password
                    </InputLabel>
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
                    <InputLabel htmlFor="standard-adornment-confirmPassword">
                        Confirm Password
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-confirmPassword"
                        value={newUser.confirmPassword}
                        onChange={handleChange('confirmPassword')}
                        type={newUser.showConfirmPassword ? 'text' : 'password'}
                        label="Confirm Password"
                        onKeyPress={(e) => {if (e.key === 'Enter') {onSubmit();}}}
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
                    onClick={onSubmit}
                    sx={{ color: 'antiquewhite', bgcolor: 'cornflowerblue', height: 35, alignSelf: 'center' }}>
                    Submit
                </ColorButton>
            </Box>
        </>
    )
}