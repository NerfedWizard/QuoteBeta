import React from 'react';
import { Button, styled, Stack, Box } from '@mui/material';
import { NavLink, Outlet } from "react-router-dom";
// import styled from 'styled-components/native';

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    font: 'bold',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Bitter',
    borderRadius:25,
    '&:hover': {
        background: "rgb(0, 206, 209,.3)",
        variant: 'outlined',
        focusRipple: true,
    },
}));
// const NavUnlisted = styled.ul`
// text - decoration: none;
// `;

export const linkStyle = {
    margin: "auto",
    textDecoration: "none",
    color: 'blue'
};

export default function NavButtons(from) {
    if (from === 'random') {
        return (
            <>
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="space-evenly">

                    <NavLink to='/author'>
                        <ColorButton>
                            Author
                        </ColorButton>
                    </NavLink>
                    <NavLink to='/category' style={linkStyle}>
                        <ColorButton>
                            Category
                        </ColorButton>
                    </NavLink>
                    {/* </NavUnlisted> */}
                    <Outlet />
                </Stack>
            </>
        )
    }
    else if (from === 'author') {
        return (
            <>
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="flex-start">
                    <NavLink to='/random' style={linkStyle}>
                        <ColorButton>
                            Random
                        </ColorButton>
                    </NavLink>
                    <NavLink to='/category' style={linkStyle}>
                        <ColorButton>
                            Category
                        </ColorButton>
                    </NavLink>
                    {/* <NavLink to='/landing'>
                        <ColorButton>
                            Home
                        </ColorButton>
                    </NavLink> */}
                    <Outlet />
                </Stack>
            </>
        )
    }
    else if (from === 'category') {
        return (
            <>
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="flex-end">
                    <NavLink to='/random' style={linkStyle}>
                        <ColorButton>
                            Random
                        </ColorButton>
                    </NavLink>
                    <NavLink to='/author' style={linkStyle}>
                        <ColorButton>
                            Author
                        </ColorButton>
                    </NavLink>
                    {/* <NavLink to='/landing'>
                        <ColorButton>
                            Home
                        </ColorButton>
                    </NavLink> */}
                    <Outlet />
                </Stack>
            </>
        )
    }
    else {
        return (
            <>
                <Box sx={{
                    boxShadow: 5,
                    borderRadius: 10,
                    // p: 2,
                    m: 'auto',
                    maxWidth: 420,
                    minWidth: 100,
                    justifyContent: 'center',
                }}>
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="flex-end">
                        {/* <NavUnlisted> */}
                        <NavLink to='/random' style={linkStyle}>
                            <ColorButton>
                                Random
                            </ColorButton>
                        </NavLink>
                        <NavLink to='/author' style={linkStyle}>
                            <ColorButton>
                                Author
                            </ColorButton>
                        </NavLink>
                        <NavLink to='/category' style={linkStyle}>
                            <ColorButton>
                                Category
                            </ColorButton>
                        </NavLink>
                        {/* </NavUnlisted> */}
                        <Outlet />
                    </Stack>
                </Box>
            </>
        )
    }
}
// export function LandingButtons() {


// }