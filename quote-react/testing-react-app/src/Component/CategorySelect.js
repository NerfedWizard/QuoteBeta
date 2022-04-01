import * as React from 'react';
import { InputLabel, MenuItem, Select, Container, Box, CssBaseline, Button, Paper, ThemeProvider, createTheme, styled, Stack, Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import { purple, pink, red, blue, black, white, yellow } from '@mui/material/colors';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#708090',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));
const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    font: 'bold',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Indie Flower',
    backgroundColor: "seagreen",
    '&:hover': {
        backgroundColor: "darkgreen",
    },
}));

const CustomSelect = styled(Select)(({ theme }) => ({
    color: "black",
    backgroundColor: "#696969",
    '&:hover': {
        backgroundColor: "#F5F5F5",
    },
}));

export default function SelectVariants() {
    const [choice, setChoice] = React.useState(qCategory[0]);
    const [quote, setQuote] = React.useState([]);
    const [author, setAuthor] = React.useState([]);
    const defaultProps = {
        options: qCategory,
        getOptionLabel: (option) => option,
    };
    const handleChange = (event) => {
        setChoice(event.target.value);
        GetQuoteByCategory(event.target.value);
    };
    const handleClick = (event) => {
        GetQuoteByCategory(choice);
    };
    async function GetQuoteByCategory(event) {
        let category = await axios.get(`/api/quote/category/${event}`);
        const quoteList = new Array();
        const authorList = new Array();
        for (let i = 0; i < category.data.length; i++) {
            quoteList.push(category.data[i].quoted);
            authorList.push(category.data[i].quoteAuthor);
        }
        const min = 0;
        const max = category.data.length;
        const rand = Math.floor(Math.random() * (max - min)) + min;
        setAuthor(authorList[rand]);
        setQuote(quoteList[rand]);
        // setChoice(event);
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
                    <Item>
                        <Item variant='contained' sx={{ fontFamily: 'Dancing Script', fontWeight: 'bold', fontSize: 40 }}>Choose a Quote by Category</Item>
                        <FormControl sx={{ width: '25ch' }}>
                            <Autocomplete
                                value={choice}
                                onChange={(event, newChoice) => {
                                    setChoice(newChoice);
                                    GetQuoteByCategory(newChoice);
                                }}
                                id="combo-box-demo"
                                options={qCategory}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Category" />}
                            />
                            <br />
                            <ColorButton onClick={handleClick} sx={{ width: 400 }}> Next Quote about {choice}</ColorButton>
                            <Item variant='contained' sx={{ fontFamily: 'Dancing Script', fontWeight: 'bold', fontSize: 40, width: 800, color: 'navajowhite' }}>{author}</Item>
                            <Item variant='contained' sx={{ fontFamily: ', width: 800', fontWeight: 'bold', fontSize: 30, width: 800, color: 'silver' }}>{quote}</Item>
                        </FormControl>
                    </Item>
                </Box>
            </Container>
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