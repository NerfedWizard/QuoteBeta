import React from "react";
import { Box, Button, Paper, styled, Stack } from '@mui/material';
import { useState } from 'react';
import NavButtons from '../Layout/NavButtons';
import RandomNumber from './../../Actions/RandomNumber';
import authHeader from './../../services/authHeader';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'oldlace',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    fontFamily: 'Bitter',
    textAlign: 'left',
    color: 'darkslategrey',
    fontWeight: 'bold',
    maxWidth: 800,
    minWidth: 200,
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
    const [category, setCategory] = useState([]);
    const rand = RandomNumber();

    async function GetQuotes() {

        const ident = "ID" + rand;
        let identifier = await axios.get(`/api/quote/${ident}`);
        // eslint-disable-next-line
        const quoteList = new Array();
        quoteList.push(identifier.data.quoteAuthor);
        quoteList.push(identifier.data.quoted);
        quoteList.push(identifier.data.quoteCategory);
        displayQuote("\"" + quoteList[1] + "\"", quoteList[0], quoteList[2]);

    }
    function displayQuote(theQuote, theAuthor, theCategory) {
        setQuote(theQuote);
        setAuthor(theAuthor);
        setCategory(theCategory);
    }
    return (
        <>

            <Box sx={{
                boxShadow: 5,
                borderRadius: 10,
                p: 2,
                m: 'auto',
                maxWidth: 800,
                minWidth: 200,
                justifyContent: 'center',
            }}>
                {GetQuotes}
                <Stack direction="row"
                    justifyContent="flex-end"
                    spacing={32}>
                    <ColorButton onClick={GetQuotes}>Next Quote</ColorButton>
                </Stack>
                <Item>
                    <Item variant='contained' sx={{ color: 'slateblue', fontSize: 28 }}>{author}</Item>
                    <Item variant='contained' sx={{ fontFamily: 'Caveat', fontSize: 40, p: 0 }}>{quote}</Item>
                    <Item variant='contained' sx={{ color: 'lightpink', fontSize: 20 }}>{category}</Item>
                </Item>
                {NavButtons('random')}
            </Box>
        </>
    );
}