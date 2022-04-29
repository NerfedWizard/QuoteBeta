import { useState } from 'react';
import { Stack, styled, Autocomplete, TextField } from '@mui/material';
import { ColorButton, QuoteItem, MyBox } from './../../Style/styles';
import UserService from './../../services/user.service';
import { Outlet } from 'react-router-dom';
import RandomNumber from './../../Actions/RandomNumber';


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

export default function SelectVariants() {
    const [choice, setChoice] = useState('');
    const [history] = useState([{}]);
    const [count, setCount] = useState(history.length);
    const [quotes, setQuotes] = useState({ quote: '', author: 'Choose a Category' });

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
            setQuotes(history[count]);
            prevIndex();
        }
    }
    return (
        <>
            <MyBox id='shine-background' sx={{
                boxShadow: 5,
                borderRadius: 10,
            }}>

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
                <Stack spacing={2} direction="row" justifyContent="flex-start" >
                    <ColorButton onClick={prevQuote}>Previous Quote</ColorButton>
                    <ColorButton onClick={handleClick} sx={{ p: 0 }}> Next Quote</ColorButton>
                </Stack>
                <br />
                <QuoteItem variant='contained'>


                    {quotes.quote}
                    <br />
                    <span class='author-span' style={{ color: 'slateBlue', fontSize: '50%', fontFamily: 'Bitter' }}>
                        {quotes.author}
                    </span>
                </QuoteItem>
                <Stack direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={5}>
                </Stack>
            </MyBox>
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
];