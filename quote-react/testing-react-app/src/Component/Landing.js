import React from 'react';
import { Box, CssBaseline, Stack } from '@mui/material';
import NavButtons from './NavButtons';

function Landing() {
    return (
        <>
            <CssBaseline />
            Would Like to add sign in here
            {/* <Box sx={{
                boxShadow: 3,
                maxWidth: '50%',
                justifyContent: 'center',
                m: 'auto',
            }}> */}
            <Stack direction="row"
                justifyContent="center"
                spacing={32}>
                {NavButtons('')}
            </Stack>
            {/* </Box> */}
        </>
    )
}

export default Landing