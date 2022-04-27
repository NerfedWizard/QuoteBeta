import React, { useEffect, useState } from 'react';
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Box,
    IconButton,
    Snackbar,

} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AuthService from './../../services/auth.service';
import { ColorButton } from '../../Style/styles';
import { useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Register() {
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        username: '',
        fullName: '',
        password: '',
        confirmPassword: '',
    });
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const [userErrors, setUserErrors] = useState('');
    const [errUsername, setErrUsername] = useState('');
    const [errFullName, setErrFullName] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const [errConfirmPassword, setErrConfirmPassword] = useState('');
    const { vertical, horizontal, open } = state;
    useEffect((props) => (event) => {
        if (userErrors) {
            setState({
                ...state,
                vertical: 'top',
                horizontal: 'center',
                open: true,
            });
            if (userErrors.username) {
                setErrUsername(userErrors.username);
            }
            if (userErrors.fullName) {
                setErrFullName(userErrors.fullName);
            }
            if (userErrors.password) {
                setErrPassword(userErrors.password);
            }
            if (userErrors.confirmPassword) {
                setErrConfirmPassword(userErrors.confirmPassword);
            }
        }
    }, [userErrors]);

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
                setUserErrors(err.response.data);
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


    const handleClose = () => {
        setState({ ...state, open: false });
        setErrUsername('');
        setErrFullName('');
        setErrPassword('');
        setErrConfirmPassword('');
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

                        onChange={handleChange('fullName')}
                        label="fullName"

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
                        onKeyPress={(e) => { if (e.key === 'Enter') { onSubmit(); } }}
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
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    key={vertical + horizontal}>
                    <Alert onClose={handleClose} severity="warning">
                        <Box width='fit-content'>
                            {errUsername}
                            <br />
                            {errFullName}
                            <br />
                            {errPassword}
                            <br />
                            {errConfirmPassword}
                        </Box>
                    </Alert>
                </Snackbar>
            </Box>
        </>
    )
}