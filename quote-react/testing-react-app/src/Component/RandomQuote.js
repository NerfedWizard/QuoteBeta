import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function RandomQuote() {
    const axios = require('axios');
    const [quote, setQuote] = useState([]);
    // const [author, setAuthor] = useState([]);
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
        setQuote(quoteList);
        // setQuote(JSON.stringify(identifier.data, ['quoteAuthor', 'quoted'], 2));
        // setAuthor(identifier.data[3].quoteAuthor);
        // let author = identifier.data.author;
        // console.log(author);
        // console.log(identifier.data);
        // for (let i = 0; i < quote.length; i++) {
        //     console.log(identifier.data[i]);
        // }
    }
    // function RandomQuote() {
    //     for (let i = 0; i < quote.length; i++) {
    //         console.log(quote[i]);
    //         return quote[i];
    //     }
    // }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" className="permanent-font">
                <Box sx={{ bgcolor: '#cfe8fc' }}>
                    <Button variant="contained" color="error" onClick={GetQuotes}>Random Quote</Button>
                    <h1>
                        {quote}
                    </h1>
                </Box>
            </Container>
        </React.Fragment>
    );
}