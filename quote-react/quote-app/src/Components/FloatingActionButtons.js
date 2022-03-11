import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import * as React from 'react';

export default function FloatingActionButtons() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <Fab aria-label="like">
                <FavoriteIcon />
            </Fab>
        </Box>
    );
}