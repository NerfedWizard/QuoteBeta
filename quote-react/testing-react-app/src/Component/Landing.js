import PropTypes from "prop-types";
import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, styled, Stack, Box } from '@mui/material';
import { linkStyle } from "../Style/styles";

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    font: 'bold',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Bitter',
    borderRadius: 25,
    '&:hover': {
        background: "rgb(0, 206, 209,.3)",
        variant: 'outlined',
        borderRadius: 25,
        focusRipple: true,
    },
}));

export default function Landing() {
    return (
        <>
            <Box sx={{
                boxShadow: 5,
                borderRadius: 10,
                // p: 2,
                m: 'auto',
                maxWidth: 250,
                minWidth: 100,
                justifyContent: 'center',
            }}>
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="space-evenly">
                    <Link to='/register' style={linkStyle}>
                        <ColorButton>
                            Register
                        </ColorButton>
                    </Link>
                    <Link to='/login' style={linkStyle}>
                        <ColorButton>
                            Login
                        </ColorButton>
                    </Link>
                </Stack>
            </Box>
        </>
    )
}