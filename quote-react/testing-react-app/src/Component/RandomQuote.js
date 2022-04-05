import React from 'react';
import { Box, CssBaseline, Button, Paper, styled, Stack } from '@mui/material';
import { useState } from 'react';
// import 'C:/Users/loeln/OneDrive/Desktop/QuoteBeta/quote-react/testing-react-app/src/App.css';
import NavButtons from './NavButtons';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'oldlace',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    display: 'flex',
    fontFamily: 'Satisfy',
    color: 'slateblue',
    fontSize: '200%',
    maxWidth: "800%",
}));
const QuoteStack = styled(Stack)(({ theme }) => ({
    direction: 'column',
    spacing: 5,
    marginBottom: '5vh',


}));
const ItemQuote = styled(Paper)(({ theme }) => ({
    backgroundColor: 'oldlace',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    display: 'flex',
    textAlign: 'left',
    justifyContent: 'center',
    fontFamily: 'Caveat',
    color: 'darkslategrey',
    fontSize: '250%',
    fontWeight: 'bold',
    maxWidth: '800%',
    square: true,
    p: 0
}));
const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    font: 'bold',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Bitter',
    backgroundColor: "seagreen",
    '&:hover': {
        backgroundColor: "darkgreen",
    },
}));
export default function RandomQuote() {
    const axios = require('axios');
    const [quote, setQuote] = useState(['Welcome to the Quote Machine']);
    const [author, setAuthor] = useState(['By Loel Nelson']);
    const min = 1;
    const max = 37489;
    const rand = Math.floor(Math.random() * (max - min)) + min;
   


    async function GetQuotes() {

        const ident = "ID" + rand;
           let identifier = await axios.get(`/api/quote/${ident}`);
        // eslint-disable-next-line
        const quoteList = new Array();
        quoteList.push(identifier.data.quoteAuthor);
        quoteList.push(identifier.data.quoted);
        displayQuote("\"" + quoteList[1] + "\"", quoteList[0]);

    }
    // async function GetLastQuote() {
    //     const ident = counter;
    //     let identifier = await axios.get(`/api/quote/${ident}`);
    //     console.log(identifier);
    //     // eslint-disable-next-line
    //     const quoteList = new Array();
    //     quoteList.push(identifier.data.quoteAuthor);
    //     quoteList.push(identifier.data.quoted);
    //     displayQuote(quoteList[1], quoteList[0]);
    // }
    function displayQuote(theQuote, theAuthor) {
        setQuote(theQuote);
        setAuthor(theAuthor);
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{
                bgcolor: 'rgb(0,0,0,.6)',
                boxShadow: 3,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
                justifyContent: 'center',
            }}>
                <Stack direction="row"
                    justifyContent="flex-end"
                    spacing={32}>
                    <ColorButton onClick={GetQuotes}>
                        Next Quote
                    </ColorButton>
                </Stack>
                <QuoteStack >
                    <ItemQuote variant='contained'>
                        {quote}
                    </ItemQuote>
                    <Item variant='contained'>
                        {author}
                    </Item>
                </QuoteStack>
            </Box>
            <NavButtons />
        </React.Fragment>
    );
}