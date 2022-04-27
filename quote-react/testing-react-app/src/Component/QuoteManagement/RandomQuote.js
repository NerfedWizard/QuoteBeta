import { Stack } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import RandomNumber from './../../Actions/RandomNumber';
import { ColorButton, QuoteItem, MyBox } from '../../Style/styles';
import UserService from './../../services/user.service';

export default function RandomQuote() {
    const [history] = useState([]);
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
    useEffect(() => {
        async function fetchData() {
            if (isMounted) {
                GetQuotes();
            }
        }
        fetchData();
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
            <MyBox sx={{
                boxShadow: 5,
                borderRadius: 10,
               
                
            }}>
                {GetQuotes}
                <Stack direction="row"
                    justifyContent="start"
                >
                    <ColorButton onClick={GetQuotes}>Next Quote</ColorButton>
                    <ColorButton onClick={prevQuote}>Previous Quote</ColorButton>
                </Stack>
                <QuoteItem variant='contained'>
                    <span class='author-span' style={{ color: 'slateBlue' }}>{quoteData.author}</span>
                    <br />
                    {quoteData.quoted}
                    <br />
                    <span class='category-span' style={{ color: 'coral' }}>
                        {quoteData.category}
                    </span>
                </QuoteItem>
            </MyBox>
            <Outlet />
        </>
    );
}