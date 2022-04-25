import { useState } from 'react';
import { Stack, Box, Button, Paper, styled, Autocomplete, TextField } from '@mui/material';
// import axios from 'axios';
import { ColorButton, QuoteItem, linkStyle } from './../../Style/styles';
import UserService from './../../services/user.service';
import { Outlet } from 'react-router-dom';
import RandomNumber from './../../Actions/RandomNumber';
// import NavButtons from '../Layout/NavButtons';





const CustomAutoComplete = styled(Autocomplete)(({ theme }) => ({
    color: "cyan",
    backgroundColor: "azure",
    maxWidth: 575,
    minWidth: 300,
    fontWeight: 'bold',
    fontFamily: 'Caveat',
    '&:hover': {
        backgroundColor: "lightgreen",
    },
}));
// function RandomNum(length) {
//     const min = 0;
//     const max = length;
//     const rand = Math.floor(Math.random() * (max - min)) + min;
//     return (rand);
// }
export default function SelectVariants() {
    const [choice, setChoice] = useState('');
    const [history, setHistory] = useState([{}]);
    const [count, setCount] = useState(history.length);
    const [quotes, setQuotes] = useState({ quote: '', author: 'Choose a Category' });
    // eslint-disable-next-line
    const handleChange = (props) => (event) => {
        setChoice(event.target.value);
        setQuotes([{
            ...quotes, [props]: event.target.value
        }]);
    };
    const handleClick = (event) => {
        GetQuoteByCategory(choice);
    };
    async function GetQuoteByCategory(event) {
        let category = await UserService.getQuoteByCategory(event);
        const num = RandomNumber.getRandomNumSet(category.data.length);
        setQuotes({
            ...quotes, quote: category.data[num].quoted, author: category.data[num].quoteAuthor
        });
        history.push({
            ...quotes, quote: category.data[num].quoted, author: category.data[num].quoteAuthor
        })
        setCount(history.length - 2);
    }
    const prevIndex = async () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    const prevQuote = async () => {
        if (history.length > 1) {
            // console.log(history.length);
            setQuotes(history[count]);
            prevIndex();
        }
    }
    return (
        <>
            <Box sx={{
                boxShadow: 5,
                borderRadius: 10,
                p: 2,
                m: 'auto',
                maxWidth: 'fit-content',
                minWidth: 'fit-content',
                justifyContent: 'center',
            }}>
                <Stack spacing={2} direction="row" justifyContent="flex-start" >
                    <CustomAutoComplete
                        value={choice}
                        onChange={(event, newChoice) => {
                            setChoice(newChoice);
                            GetQuoteByCategory(newChoice);
                        }}
                        isOptionEqualToValue={(option, value) => option.value === value.value}
                        selectOnFocus
                        options={qCategory.sort()}
                        renderInput={(params) => <TextField {...params} label="Category" variant="standard" />}
                        sx={{ borderRadius: 2 }}
                    />
                    <ColorButton onClick={handleClick} sx={{ p: 0 }}> Next Quote</ColorButton>
                    <ColorButton onClick={prevQuote}>Previous Quote</ColorButton>
                </Stack>
                <br />
                <QuoteItem>
                    <QuoteItem variant='contained' sx={{ fontSize: 20 }}>{quotes.author}</QuoteItem>
                    <QuoteItem variant='contained' sx={{ fontFamily: 'Caveat', color: 'darkslategrey', fontSize: 40, p: 0 }}>{quotes.quote}</QuoteItem>
                </QuoteItem>
                <Stack direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={5}>
                    {/* {NavButtons('category')} */}
                </Stack>
            </Box>
            <Outlet />
        </>
    );
}
const qCategory = [
    'life',
    'love',
    'inspiration',
    'humor',
    'wildcard',
    'soul',
    'truth',
    'poetry',
    'wisdom',
    'friendship',
    'happiness',
    'books',
    'romance',
    'writing',
    'success',
    'hope',
    'arts',
    'education',
    'motivation',
    'death',
    'faith',
    'philosophy',
    'mind',
    'god',
    'funny',
    'relationship',
    'religion',
    'science',
    'knowledge',
    'quotes',
    'purpose',
    'positive',
    'dad',
];