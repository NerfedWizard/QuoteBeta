import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Box, Button } from '@mui/material';
import { linkStyle, ColorButton } from "../Style/styles";


export default function Landing() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    }
    const handleRegister = () => {
        navigate("/register");
    }

    return (
        <>
            <Stack
                direction="column"
                // m={10}
                spacing={10}
                alignItems="space-between"
                minWidth='fit-content'>
                <ColorButton onClick={handleRegister} sx={{ m: 'auto' }}>
                    Register
                </ColorButton>
                <ColorButton onClick={handleLogin} sx={{ m: 'auto' }}>
                    Login
                </ColorButton>
            </Stack>
        </>
    )
}