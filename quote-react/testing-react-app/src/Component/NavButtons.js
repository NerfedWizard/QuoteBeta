import React from 'react';
import { Button, styled, Stack } from '@mui/material';
import { Link } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    font: 'bold',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Bitter',
    // backgroundColor: 'rgb(20, 191, 255,0.4)',
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
                spacing={20}
                justifyContent="space-between"
                alignItems="flex-end">

                <Link to='/author'>
                    <ColorButton color="secondary"
                    >
                        Search by Author
                    </ColorButton>
                </Link>
                <Link to='/'>
                    <ColorButton
                    >
                        Random Quote
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
                spacing={20}
                justifyContent="space-between"
                alignItems="flex-end">

                <Link to='/'>
                    <ColorButton color="secondary"
                    >
                        Random Quote
                    </ColorButton>
                </Link>
                <Link to='/category'>
                    <ColorButton
                    >
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
                spacing={20}
                justifyContent="space-between"
                alignItems="flex-end">

                <Link to='/author'>
                    <ColorButton color="secondary"
                    >
                        Search by Author
                    </ColorButton>
                </Link>
                <Link to='/category'>
                    <ColorButton
                    >
                        Search by Category
                    </ColorButton>
                </Link>
            </Stack>
        </React.Fragment>
    )
}
