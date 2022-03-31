import React from 'react'
import { useState } from 'react';
import { styled, Card, Box, Paper, Grid, Select, CardActions, CssBaseline, Typography, Button, Container, OutlinedInput, FormHelperText } from '@mui/material';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import { purple, pink } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: "darkred",
    '&:hover': {
        backgroundColor: "pink",
    },
}));
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const CustomInput = styled(OutlinedInput)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    '&:hover': {
        backgroundColor: "#F5F5F5",
    },
}));
function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = React.useMemo(() => {
        if (focused) {
            return 'Are you looking for someone famous?';
        }

        return 'Search for Author';
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
}

export default function AuthorSelect() {

    const axios = require('axios');
    const [category, setCategory] = useState([]);
    const [choice, setChoice] = React.useState('');
    const [quote, setQuote] = useState([]);

    const handleChange = (event) => {
        setChoice(event.target.value);
        GetQuoteByAuthor(event.target.value);
    };
    const handleClick = (event) => {
        GetQuoteByAuthor(choice);
    };
    async function GetQuoteByAuthor(event) {
        let category = await axios.get(`/api/quote/author/${event}`);
        const quoteList = new Array();
        const catList = new Array();
        for (let i = 0; i < category.data.length; i++) {
            quoteList.push(category.data[i].quoted);
            catList.push(category.data[i].quoteCategory);
        }
        const min = 0;
        const max = category.data.length;
        const rand = Math.floor(Math.random() * (max - min)) + min;
        setCategory(catList[rand]);
        setQuote(quoteList[rand]);
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{
                    bgcolor: '#000000',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    minWidth: 300,
                }}>
                    <Paper sx={{ color: '#000000', fontSize: 20, fontWeight: 'medium' }}>
                        <h1>Choose a Quote by Author</h1>
                        <FormControl sx={{ width: '25ch' }}>
                            <CustomInput variant="filled" onChange={handleChange} placeholder="Please enter text" sx={{ color: "black", bgcolor: "#696969" }} />
                            <MyFormHelperText />
                        </FormControl>
                        <ColorButton onClick={handleClick}>See more from {choice}</ColorButton>
                        <h1>{quote}</h1>
                        <h2>{category}</h2>
                    </Paper>
                </Box>
            </Container>
        </React.Fragment>
    );
}


