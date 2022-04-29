import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Menu, MenuItem } from '@mui/material';
import { useNavigate, NavLink } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { linkStyle } from './../../Style/styles';
import AuthService from './../../services/auth.service';
import jwtDecode from 'jwt-decode';



const pages = [
    <NavLink to="/random" style={linkStyle}>Random</NavLink>,
    <NavLink to="/category" style={linkStyle}>Category</NavLink>,
    <NavLink to="/author" style={linkStyle}>Author</NavLink>
];

export default function NavBar() {
    const [authed, setAuthed] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorE2, setAnchorE2] = useState(null);
    const [greeting, setGreeting] = useState("It's a beautiful day!");
    const navigate = useNavigate();
    const user = AuthService.getCurrentUser();

    useEffect(() => {
        if (user && user.token) {
            setGreeting('Welcome ' + jwtDecode(user.token).username);
            setAuthed(true);
        }
    }, []);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleNavMenu = (event) => {
        setAnchorE2(event.currentTarget);
    };
    const handleLogout = () => {
        setAuthed(false);
        AuthService.logout();
        setGreeting("You've been logged out, until we meet again!");
        navigate('/');
    };
    const handleHome = () => {
        setAnchorEl(null);
        navigate('/');
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCloseNav = () => {
        setAnchorE2(null);
    };
    const closeMenu = () => {
        setAnchorE2(null);
    };
    return (

        <AppBar position="static" sx={{ bgcolor: 'transparent' }}>
            <Toolbar id='gradient-shift'>
                <Typography component="div" sx={{
                    flexGrow: 1,
                }}>
                    <Button
                        variant='text'
                        size="small"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        sx={{
                            fontweight: 'bold',
                            textShadow: '1px 1px 2px rgb(117, 31, 64), 0 0 25px rgb(255, 77, 86),0 0 5px rgb(202, 173, 77)',
                            color: 'black',
                            fontFamily: 'Bitter',
                            fontSize: '125%',
                            textTransform: 'unset',
                        }}> {greeting}</Button>

                </Typography>
                {authed && (
                    <div>
                        <Button
                            aria-controls='menu-navigation'
                            aria-label='navigation'
                            aria-haspopup="true"
                            onClick={handleNavMenu}
                            variant='text'
                            size="small"
                            sx={{
                                textTransform: 'unset',
                                color: 'black',
                                fontFamily: 'Hurricane',
                                fontSize: '250%',
                                textShadow: '.05vw .05vw .05vw rgb(20, 200, 32), 0 0 2vw rgb(255, 120, 114),0 0 .5vw rgb(20, 75,180) ',
                            }}
                        >
                            Menu
                        </Button>
                        <Menu id="menu-navigation"
                            anchorE2={anchorE2}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorE2)}
                            onClose={handleCloseNav}>
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    variant='text'
                                    onClick={closeMenu}
                                    sx={{
                                        textTransform: 'unset',
                                        square: 'false',
                                        p: '1',
                                    }}
                                >
                                    {page}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                )}
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleHome}>Home</MenuItem>
                    {authed && (
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>)}
                </Menu>
            </Toolbar>
        </AppBar>
    );
}