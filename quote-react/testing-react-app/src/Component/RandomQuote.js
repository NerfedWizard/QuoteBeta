import React from 'react';
import { Container, Box, CssBaseline, Button, Paper, styled } from '@mui/material';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#708090',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));
const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    font: 'bold',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Indie Flower',
    backgroundColor: "seagreen",
    '&:hover': {
        backgroundColor: "darkgreen",
    },
}));
export default function RandomQuote() {
    const axios = require('axios');
    const [quote, setQuote] = useState([]);
    const [author, setAuthor] = useState([]);
    async function GetQuotes() {
        const min = 1;
        const max = 37489;
        const rand = Math.floor(Math.random() * (max - min)) + min;
        const ident = "ID" + rand;
        let identifier = await axios.get(`/api/quote/${ident}`);
        const quoteList = new Array();
        quoteList.push(identifier.data.quoteAuthor);
        quoteList.push("\n");
        quoteList.push(identifier.data.quoted);
        setAuthor(quoteList[0]);
        setQuote(quoteList[2]);
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{
                    bgcolor: '#000000',
                    boxShadow: 3,
                    borderRadius: 2,
                    p: 2,
                    minWidth: 300,
                }}>
                    <Item variant="outlined" >
                        <Item variant='contained' sx={{ fontFamily: 'Indie Flower', fontWeight: 'bold', fontSize: 40 }}>Random Inspiration</Item>
                        <ColorButton variant="contained" onClick={GetQuotes} sx={{ width: 300 }}>Random Quote</ColorButton>
                        <h1>
                            {quote}
                        </h1>
                        <h2>
                            {author}
                        </h2>
                    </Item>
                </Box>
            </Container>
        </React.Fragment>
    );
}