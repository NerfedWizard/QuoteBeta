import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Container, CssBaseline, Paper, styled } from '@mui/material';
// import { styled, createTheme, ThemeProvider } from '@mui/system';
import SelectVariants from './Component/CategorySelect';
import RandomQuote from './Component/RandomQuote';
import AuthorSelect from './Component/AuthorSelect';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#B0C4DE',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    elevation: 3,
    fontFamily: 'Hurricane',
    fontSize: '1.5rem',
    square: false,
    color: "#483D8B",
}));

const PlusOne = () => {


    return (
        <Box sx={{
            display: 'fixed',
            width: '100%',
            alignItems: 'left',
            justifyContent: 'left',
            bgcolor: '#6A5ACD',
            color: '#fff',
            borderRadius: 1,
            p: 3,
        }}>
            <CssBaseline />
            <Container maxWidth='xl' component="span" sx={{ bgcolor: '#2F4F4F' }}>

                <Item>
                    <h1>It's Time For Quotes.....</h1>
                    <Item>
                        <RandomQuote />
                    </Item>
                    <Item>
                        <SelectVariants />
                    </Item>
                    <Item>
                        <AuthorSelect />
                    </Item>
                </Item>

            </Container>
        </Box >
    );
}



ReactDOM.render(<PlusOne />, document.getElementById('root'));