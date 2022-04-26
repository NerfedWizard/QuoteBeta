import React from "react";
import { Link } from "react-router-dom";
import { Stack, Box } from '@mui/material';
import { linkStyle, ColorButton } from "../Style/styles";


export default function Landing() {
    return (
        <>
            <Box sx={{
                boxShadow: 5,
                borderRadius: 10,
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