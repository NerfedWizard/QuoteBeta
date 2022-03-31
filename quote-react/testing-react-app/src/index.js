import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Container, CssBaseline, Paper } from '@mui/material';
// import { styled, createTheme, ThemeProvider } from '@mui/system';
import SelectVariants from './Component/CategorySelect';
import RandomQuote from './Component/RandomQuote';
import AuthorSelect from './Component/AuthorSelect';



const PlusOne = () => {


    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#6A5ACD',
            color: '#fff',
            borderRadius: 1,
            p: 3,
        }}>
            <CssBaseline enableColorScheme />
            <Container maxWidth='xl' component="span" sx={{ bgcolor: '#2F4F4F' }}>

                <Paper className="hurricane-font" elevation={24} sx={{ bgcolor: "#B0C4DE" }}>
                    <h1 className="hurricane-font">It's Time For Quotes.....</h1>
                    <RandomQuote />
                    <SelectVariants />
                    <AuthorSelect />
                </Paper>

            </Container>
        </Box>
    );
}



ReactDOM.render(<PlusOne />, document.getElementById('root'));