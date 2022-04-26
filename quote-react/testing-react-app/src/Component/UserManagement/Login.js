import React, { useState, useEffect } from 'react';
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Box,
    IconButton,
    Snackbar
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import { ColorButton } from '../../Style/styles';
import AuthService from './../../services/auth.service';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
    const [user, setUser] = useState({ username: '', password: '', errors: {} });
    const navigate = useNavigate();
    const [userErrors, setUserErrors] = useState('');
    const [errUser, setErrUser] = useState('');
    const [errPass, setErrPass] = useState('');
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    useEffect((props) => (event) => {
        if (userErrors) {
            setState({
                ...state,
                vertical: 'top',
                horizontal: 'center',
                open: true,
            });
            console.log(userErrors);
            if (userErrors.username) {
                setErrUser(userErrors.username);
            }
            if (userErrors.password) {
                setErrPass(userErrors.password);
            }
        }
    }, [userErrors]);
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
        AuthService.login(user).then(
            () => {
                navigate("/random");
                window.location.reload();
            },
            (err) => {
                setUserErrors(err.response.data);
            }
        );
    };


    const handleClose = () => {
        setState({ ...state, open: false });
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
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    key={vertical + horizontal}>
                    <Alert onClose={handleClose} severity="warning">
                        {errUser}<br />{errPass}
                    </Alert>
                </Snackbar>
            </Box>
        </>
    )
}