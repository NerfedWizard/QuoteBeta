import React from 'react'
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const AuthorSelect = () => {
    const axios = require('axios');
    const [data, setData] = useState('');
    const [quote, setQuote] = useState([]);

    async function GetAuthorQuotes(event) {
        const qAuthor = event.target.value;
        console.log(qAuthor);
        let author = await axios.get(`/api/quote/author/${qAuthor}`);
        setData(author.data);
        setQuote(data);
        console.log(author.data);
        return (
            <div>
                <p>This is something</p>
                {/* <Select onChange={GetAuthorQuotes} /> */}
                <h2>{JSON.stringify(author.data, null, 2)}</h2>
            </div>
        )
    }
}

export default AuthorSelect