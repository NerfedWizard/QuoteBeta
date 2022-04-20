// import React, { useEffect } from "react";
import { Box, Button, Paper, styled, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react';
import NavButtons from '../Layout/NavButtons';
import RandomNumber from './../../Actions/RandomNumber';
// import useStateHistory from 'use-state-history'
import useStateHistory from '../../services/useStateHistory';
import { linkStyle, ColorButton, QuoteItem } from '../../Style/styles';


// const QuoteItem = styled(Paper)(({ theme }) => ({
//     backgroundColor: 'oldlace',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     fontFamily: 'Bitter',
//     textAlign: 'left',
//     color: 'darkslategrey',
//     fontWeight: 'bold',
//     maxWidth: 800,
//     minWidth: 200,
// }));

const sleep = ms => new Promise(r => setTimeout(r, ms));
export default function RandomQuote() {
    const axios = require('axios');
    const [history, setHistory] = useState([]);
    const [count, setCount] = useState(history.length);

    // const [index, setIndex] = useState(0);
    const rand = RandomNumber();
    const [quoteData, setQuoteData] = useState({ author: '', quoted: '', category: '' });
    const ident = "ID" + rand;
    let isMounted = false;


    const loadData = async () => {
        await sleep(500);
        const response = await axios.get(`/api/quote/${ident}`);
        setQuoteData({ author: response.data.quoteAuthor, quoted: response.data.quoted, category: response.data.quoteCategory });
        history.push({ author: response.data.quoteAuthor, quoted: response.data.quoted, category: response.data.quoteCategory });
    };
    async function GetQuotes() {
        const identifier = await axios.get(`/api/quote/${ident}`);
        setQuoteData({ author: identifier.data.quoteAuthor, quoted: identifier.data.quoted, category: identifier.data.quoteCategory });
        history.push({
            author: identifier.data.quoteAuthor, quoted: identifier.data.quoted, category: identifier.data.quoteCategory
        });
        setCount(history.length - 1);
    }
    useEffect(async () => {
        if (isMounted) {
            loadData();
        }
        return () => { };
    }, []);
    const prevIndex = async () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    const prevQuote = async () => {
        if (history.length > 1) {
            // console.log(history.length);
            setQuoteData(history[count]);
            prevIndex();
        }
    }
    return (
        <>
            {isMounted = true}
            <Box sx={{
                boxShadow: 5,
                borderRadius: 10,
                p: 2,
                m: 'auto',
                maxWidth: 'fit-content',
                minWidth: 'fit-content',
                justifyContent: 'center',
            }}>
                {GetQuotes}
                <Stack direction="row"
                    justifyContent="space-evenly"
                >
                    <ColorButton onClick={GetQuotes}>Next Quote</ColorButton>
                    <ColorButton onClick={prevQuote}>Previous Quote</ColorButton>
                </Stack>
                <QuoteItem>
                    <QuoteItem variant='contained' sx={{ color: 'slateblue', fontSize: 28 }}>{quoteData.author}</QuoteItem>
                    <QuoteItem variant='contained' sx={{ fontFamily: 'Caveat', fontSize: 40, p: 0 }}>{quoteData.quoted}</QuoteItem>
                    <QuoteItem variant='contained' sx={{ color: 'lightpink', fontSize: 20 }}>{quoteData.category}</QuoteItem>
                </QuoteItem>
                {NavButtons('random')}
            </Box>
        </>
    );
}