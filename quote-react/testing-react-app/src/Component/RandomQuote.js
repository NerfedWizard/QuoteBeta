import React from 'react';
import { Container, Box, CssBaseline, Button, Paper, styled } from '@mui/material';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'oldlace',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    fontFamily: 'Bitter',
    textAlign: 'left',
    color: 'darkslategrey',
    justifyContent: 'center',
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
    const [quote, setQuote] = useState([]);
    const [author, setAuthor] = useState([]);
    async function GetQuotes() {
        const min = 1;
        const max = 37489;
        const rand = Math.floor(Math.random() * (max - min)) + min;
        const ident = "ID" + rand;
        let identifier = await axios.get(`/api/quote/${ident}`);
        // eslint-disable-next-line
        const quoteList = new Array();
        quoteList.push(identifier.data.quoteAuthor);
        quoteList.push("\n");
        quoteList.push(identifier.data.quoted);
        setAuthor(quoteList[0]);
        setQuote("\"" + quoteList[2] + "\"");
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">



                <Box sx={{
                    bgcolor: 'rgb(0,0,0,.6)',
                    boxShadow: 3,
                    borderRadius: 2,
                    p: 2,
                    minWidth: 300,
                    justifyContent: 'center',
                }}>
                    <Item>
                        {/* <Item variant='contained' sx={{ fontWeight: 'bold', fontSize: 20 }}>Random Inspiration</Item> */}

                        <Item variant='contained' sx={{ fontFamily: 'Caveat', color: 'darkslategrey', fontSize: 40, fontWeight: 'bold', width: 800, p: 0 }}>
                            {quote}
                        </Item>
                        <Item variant='contained' sx={{ fontFamily: 'Satisfy', color: 'slateblue', fontSize: 35, width: 800 }}>
                            {author}
                        </Item>
                        <ColorButton onClick={GetQuotes} sx={{ p: 0 }}>
                            Next Quote
                        </ColorButton>
                    </Item>
                </Box>
                <Box sx={{ p: 25 }}>
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
                </Box>
            </Container>
        </React.Fragment>
    );
}