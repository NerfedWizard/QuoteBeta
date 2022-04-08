import React from 'react';
import { Button, styled, Stack } from '@mui/material';
import { Link } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    font: 'bold',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Bitter',
    '&:hover': {
        background: "rgb(0, 206, 209,.3)",
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
                        Author
                    </ColorButton>
                </Link>
                <Link to='/'>
                    <ColorButton>
                        Random
                    </ColorButton>
                </Link>
            </Stack>
        </React.Fragment>
    )
}
// export function AuthorButtons() {
//     return (
//         <React.Fragment>
//             <Stack
//                 direction="row"
//                 spacing={2}
//                 alignItems="flex-end">
//                 <Link to='/'>
//                     <ColorButton >
//                         Random
//                     </ColorButton>
//                 </Link>
//                 <Link to='/category'>
//                     <ColorButton>
//                         Category
//                     </ColorButton>
//                 </Link>
//             </Stack>
//         </React.Fragment>
//     )
// }

    export default function NavButtons(from) {
        if (from === 'random') {
            return (
                <>
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="space-evenly">
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
                        <Link to='/random'>
                            <ColorButton>
                                Random
                            </ColorButton>
                        </Link>
                        <Link to='/category'>
                            <ColorButton>
                                Category
                            </ColorButton>
                        </Link>
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
                        <Link to='/random'>
                            <ColorButton>
                                Random
                            </ColorButton>
                        </Link>
                        <Link to='/author'>
                            <ColorButton>
                                Author
                            </ColorButton>
                        </Link>
                    </Stack>
                </>
            )
        }
        else {
            return (
                <>
                    <Stack
                        direction="row"
                        spacing={5}
                        alignItems="flex-end">
                        <Link to='/random'>
                            <ColorButton>
                                Random
                            </ColorButton>
                        </Link>
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
                </>
            )
        }
    }
// export function LandingButtons() {


// }