import { Box, Button, Paper, styled, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import RandomNumber from './../../Actions/RandomNumber';
import { linkStyle, ColorButton, QuoteItem } from '../../Style/styles';
import UserService from './../../services/user.service';


const sleep = ms => new Promise(r => setTimeout(r, ms));
export default function RandomQuote() {
    const [history, setHistory] = useState([]);
    const [count, setCount] = useState(history.length);
    const rand = RandomNumber.getRandomNum();
    const [quoteData, setQuoteData] = useState({ author: '', quoted: '', category: '' });
    const ident = "ID" + rand;
    let isMounted = false;

    async function GetQuotes() {
        const identifier = await UserService.getRandomQuote(ident);
        setQuoteData({ author: identifier.data.quoteAuthor, quoted: identifier.data.quoted, category: identifier.data.quoteCategory });
        history.push({
            author: identifier.data.quoteAuthor, quoted: identifier.data.quoted, category: identifier.data.quoteCategory
        });
        setCount(history.length - 2);
    }
    useEffect(async () => {
        if (isMounted) {
            GetQuotes();
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
            </Box>
            <Outlet />
        </>
    );
}