import * as React from 'react';
import { Stack, Box, CssBaseline, Button, Paper, styled, Autocomplete, TextField } from '@mui/material';
import axios from 'axios';

import { CatButtons } from './NavButtons';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'oldlace',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    fontFamily: 'Bitter',
    textAlign: 'left',
    // display: 'fixed',
    // width: 300,
    color: 'darkslategrey',
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

const CustomAutoComplete = styled(Autocomplete)(({ theme }) => ({
    color: "cyan",
    backgroundColor: "azure",
    width: 575,
    fontWeight: 'bold',
    fontFamily: 'Caveat',
    '&:hover': {
        backgroundColor: "lightgreen",
    },
}));
function RandomNum(length) {
    const min = 0;
    const max = length;
    const rand = Math.floor(Math.random() * (max - min)) + min;
    return (rand);
}
export default function SelectVariants() {
    const [choice, setChoice] = React.useState('');
    const [quote, setQuote] = React.useState([]);
    const [author, setAuthor] = React.useState([]);
    // eslint-disable-next-line
    const handleChange = (event) => {
        setChoice(event.target.value);
        GetQuoteByCategory(event.target.value);
    };
    const handleClick = (event) => {
        GetQuoteByCategory(choice);
    };
    const changeGreeting = () => {
        if (choice !== '') {
            return author;
        }
        return "Choose a Category";
    }
    async function GetQuoteByCategory(event) {
        let category = await axios.get(`/api/quote/category/${event}`);
        // eslint-disable-next-line
        const quoteList = new Array();
        // eslint-disable-next-line
        const authorList = new Array();
        for (let i = 0; i < category.data.length; i++) {
            quoteList.push(category.data[i].quoted);
            authorList.push(category.data[i].quoteAuthor);
        }
        const num = RandomNum(category.data.length);
        setAuthor(authorList[num]);
        setQuote("\"" + quoteList[num] + "\"");

    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{
                bgcolor: 'rgb(0, 206, 209,.3)',
                boxShadow: 5,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
                justifyContent: 'center',
            }}>
                <Stack spacing={2} direction="row" justifyContent="flex-end" sx={{ p: 3 }}>
                    <CustomAutoComplete
                        value={choice}
                        onChange={(event, newChoice) => {
                            setChoice(newChoice);
                            GetQuoteByCategory(newChoice);
                        }}
                        selectOnFocus
                        options={qCategory.sort()}
                        renderInput={(params) => <TextField {...params} label="Category" variant="standard" />} />
                    <ColorButton onClick={handleClick} sx={{ p: 0 }}> Next Quote</ColorButton>
                </Stack>
                <Item>
                    <Item variant='contained' sx={{ fontWeight: 'bold', fontSize: 20 }}>{changeGreeting()}</Item>
                    <Item variant='contained' sx={{ fontFamily: 'Caveat', color: 'darkslategrey', fontSize: 40, fontWeight: 'bold', width: 800, p: 0 }}>{quote}</Item>
                </Item>
            </Box>
            <CatButtons />

        </React.Fragment>
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