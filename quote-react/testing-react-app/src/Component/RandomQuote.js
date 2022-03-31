import React from 'react';
import { Container, Box, CssBaseline, Button, Paper } from '@mui/material';
import { useState } from 'react';

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
            <Container maxWidth="lg" className="permanent-font">
                <Box sx={{
                    bgcolor: '#000000',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    minWidth: 300,
                }}>
                    <Paper variant="outlined" >
                        <h1 font="hurricane-font">Random Inspiration</h1>
                        <Button variant="contained" color="error" onClick={GetQuotes}>Random Quote</Button>

                        <h1>
                            {author}
                        </h1>
                        <h2 className="smokum-font">
                            {quote}
                        </h2>
                    </Paper>
                </Box>
            </Container>
        </React.Fragment>
    );
}