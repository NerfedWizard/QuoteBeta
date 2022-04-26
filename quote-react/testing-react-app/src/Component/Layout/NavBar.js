import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, Button, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate, NavLink } from 'react-router-dom';
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
    const [setAnchorElNav] = useState(null);
    const [greeting, setGreeting] = useState("It's a beautiful day!");
    const navigate = useNavigate();
    const user = AuthService.getCurrentUser();

    useEffect(() => {
        if (user && user.token) {
            setGreeting('Welcome ' + jwtDecode(user.token).username + ', it\'s time for quotes!');
            setAuthed(true);
        }
    }, []);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
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
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (

        <Box sx={{
            flexGrow: 2
        }}> <AppBar position="static" sx={{ bgcolor: 'transparent' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontweight: 'bold', textShadow: '1px 1px 2px rgb(117, 31, 64), 0 0 25px rgb(255, 77, 86),0 0 5px rgb(202, 173, 77)', color: 'black', fontFamily: 'Dancing Script', fontSize: '2.5rem' }}>
                        {greeting}
                    </Typography>
                    {authed && (<div>
                        <Box sx={{ flexGrow: 10, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'ivory', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </div>
                    )}
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
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
        </Box>
    );
}