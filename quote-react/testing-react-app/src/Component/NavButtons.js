import React from 'react';
import { Button, styled, Stack } from '@mui/material';
import { Link } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    font: 'bold',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Bitter',
<<<<<<< HEAD
    underline: 'none',
=======
>>>>>>> apr6
    '&:hover': {
        background: "cyan",
        variant: 'outlined',
        focusRipple: true,
    },
}));
export function CatButtons() {
    return (
        <React.Fragment>
            <Stack
                direction="row"
                spacing={2}
                alignItems="flex-end">
                <Link to='/author'>
                    <ColorButton>
<<<<<<< HEAD
                        Author
=======
                        Search by Author
>>>>>>> apr6
                    </ColorButton>
                </Link>
                <Link to='/'>
                    <ColorButton>
<<<<<<< HEAD
                        Random
=======
                        Random Quote
>>>>>>> apr6
                    </ColorButton>
                </Link>
            </Stack>
        </React.Fragment>
    )
}
export function AuthorButtons() {
    return (
        <React.Fragment>
            <Stack
                direction="row"
                spacing={2}
                alignItems="flex-end">
                <Link to='/'>
<<<<<<< HEAD
                    <ColorButton >
=======
                    <ColorButton>
>>>>>>> apr6
                        Random Quote
                    </ColorButton>
                </Link>
                <Link to='/category'>
                    <ColorButton>
                        Search by Category
                    </ColorButton>
                </Link>
            </Stack>
        </React.Fragment>
    )
}
export default function NavButtons() {
    return (
        <React.Fragment>
            <Stack
                direction="row"
                spacing={2}
                alignItems="flex-end">
                <Link to='/author'>
                    <ColorButton>
                        Author
                    </ColorButton>
                </Link>
                <Link to='/category'>
                    <ColorButton>
                        Category
                    </ColorButton>
                </Link>
            </Stack>
        </React.Fragment>
    )
}