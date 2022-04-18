// import React, { useEffect } from "react";
import { Box, Button, Paper, styled, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react';
import NavButtons from '../Layout/NavButtons';
import RandomNumber from './../../Actions/RandomNumber';
import useHistory from './../../Actions/useHistory';


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
    borderRadius: 25,
    backgroundColor: "rgb(0, 0, 0,0.09)",
    '&:hover': {
        backgroundColor: "rgb(105, 106, 255,0.34)",
    },
}));
const sleep = ms => new Promise(r => setTimeout(r, ms));


export default function RandomQuote() {
    const axios = require('axios');
    const rand = RandomNumber();
    const [quoteData, setQuoteData] = useState({ author: '', quoted: '', category: '' });
    const ident = "ID" + rand;
    const loadData = async () => {
        await sleep(500);
        const response = await axios.get(`/api/quote/${ident}`);
        setQuoteData({ author: response.data.quoteAuthor, quoted: response.data.quoted, category: response.data.quoteCategory });
    };
    async function GetQuotes() {

        const identifier = await axios.get(`/api/quote/${ident}`);
        setQuoteData({ author: identifier.data.quoteAuthor, quoted: identifier.data.quoted, category: identifier.data.quoteCategory });
        useHistory(identifier.data.quoted);
    }
    useEffect(() => {
        loadData();
        return () => { };
    }, []);
    const lastQuote = () => {
        // Gotta think about this for a minute or two
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
                    <Item variant='contained' sx={{ color: 'slateblue', fontSize: 28 }}>{quoteData.author}</Item>
                    <Item variant='contained' sx={{ fontFamily: 'Caveat', fontSize: 40, p: 0 }}>{quoteData.quoted}</Item>
                    <Item variant='contained' sx={{ color: 'lightpink', fontSize: 20 }}>{quoteData.category}</Item>
                </Item>
                {NavButtons('random')}
            </Box>
        </>
    );
}