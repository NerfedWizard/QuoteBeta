import React, { useEffect } from 'react';
import { AppBar, Box, Toolbar, Button, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, Navigate, useNavigate, NavLink, Outlet } from 'react-router-dom';
import { linkStyle } from './../../Style/styles';
import useAuth from './../../Hooks/useAuth';

// import setJWTToken from './../../SecurityUtils/setJWTToken';


const pages = [
    <NavLink to="/random" style={linkStyle}>Random</NavLink>,
    <NavLink to="/category" style={linkStyle}>Category</NavLink>,
    <NavLink to="/author" style={linkStyle}>Author</NavLink>
];

export default function NavBar() {
    const { auth, setAuth } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (setJWTToken !== null) {
    //         setAuth(true);
    //     }
    // });
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogout = () => {
        setAuth('');
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
        <AppBar position="static" sx={{ bgcolor: 'transparent' }}>
            <Box sx={{
                flexGrow: 1
            }}>
                <Toolbar>
                    <IconButton
                        size="medium"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Box>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                textAlign: 'left',
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="left">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontweight: 'bold', textShadow: '1px 1px 2px rgb(117, 31, 64), 0 0 25px rgb(255, 77, 86),0 0 5px rgb(202, 173, 77)', color: 'black', fontFamily: 'Dancing Script', fontSize: '2.5rem' }}>
                        It's Time For Quotes.....
                    </Typography>
                    {auth && (<div>
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
                        {auth && (
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>)}
                    </Menu>
                </Toolbar>
            </Box>
        </AppBar>
    );
}