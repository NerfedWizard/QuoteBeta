import React from 'react';
import { Stack } from '@mui/material';
import NavButtons from './NavButtons';

function Landing() {
    return (
        <>
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