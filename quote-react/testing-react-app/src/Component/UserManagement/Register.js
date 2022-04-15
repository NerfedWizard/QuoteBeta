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

export default function Register() {
    const [newUser, setNewUser] = React.useState({
        username: '',
        fullName: '',
        password: '',
        confirmPassword: '',
    });
    async function onSubmit(event) {
        console.log(JSON.stringify(newUser));
        await axios.post(`/api/quote/users/register`, newUser);
    };
    const handleChange = (props) => (event) => {
        setNewUser({ ...newUser, [props]: event.target.value });
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
            <Box
                sx={{ display: 'flex', justifyContent: 'center' }}>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="standard-adornment-username">Username</InputLabel>
                    <OutlinedInput
                        id='outlined-adornment-username'
                        value={newUser.username}
                        onChange={handleChange('username')}
                        label="Username"
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="standard-adornment-fullName">Fullname</InputLabel>
                    <OutlinedInput
                        id='outlined-adornment-fullname'
                        value={newUser.fullName}
                        onChange={handleChange('fullName')}
                        label="fullName"
                    />
                </FormControl>
                <FormGroup>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            value={newUser.password}
                            onChange={handleChange('password')}
                            type={newUser.showPassword ? 'text' : 'password'}
                            label="Password"
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
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="standard-adornment-confirmPassword">Confirm Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-confirmPassword"
                            value={newUser.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            type={newUser.showConfirmPassword ? 'text' : 'confirmPassword'}
                            label="Confirm Password"
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
                    </FormControl></FormGroup>
                <Link to="/login">
                    <Button type='submit' variant="contained" color="primary" onClick={onSubmit}>Submit</Button>
                </Link>
            </Box>
        </>
    )
}