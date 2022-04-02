import * as React from 'react';
import { Stack, Container, Box, CssBaseline, Button, Paper, styled, Autocomplete, TextField, FormControl } from '@mui/material';
import axios from 'axios';



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
    color: 'white',
    backgroundColor: "lightgrey",
    width: 450,
    fontFamily: 'Bitter',
    '&:hover': {
        backgroundColor: 'white',
        color: "black",
    },
}));
const BetterBox = styled(Box)(({ theme }) => ({
    flex: '1',
    justifyContent: 'space-around',
    display: 'relative',
}));

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
        const min = 0;
        const max = category.data.length;
        const rand = Math.floor(Math.random() * (max - min)) + min;
        setAuthor(authorList[rand]);
        setQuote("\"" + quoteList[rand] + "\"");
        // setChoice(event);
    }
    return (

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <BetterBox sx={{
                    bgcolor: 'rgb(0,0,0,.6)',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    minWidth: 300,
                }}>
                    <Item>
                        {/* <Item variant='contained' sx={{ fontWeight: 'bold', fontSize: 20 }}>Choose a Quote by Category</Item> */}
                        {/* <FormControl sx={{ width: '30ch' }}> */}

                        <br />

                        <Item variant='contained' sx={{ fontFamily: 'Caveat', color: 'darkslategrey', fontSize: 40, fontWeight: 'bold', width: 800, p: 0 }}>{quote}</Item>
                        <Item variant='contained' sx={{ fontFamily: 'Satisfy', color: 'slateblue', fontSize: 35, width: 800 }}>{author}</Item>
                        <Stack spacing={2} direction="row">
                            <CustomAutoComplete
                                value={choice}
                                onChange={(event, newChoice) => {
                                    setChoice(newChoice);
                                    GetQuoteByCategory(newChoice);
                                }}
                                id="combo-box-demo"
                                options={qCategory}
                                renderInput={(params) => <TextField {...params} label="Category" />} />

                            <ColorButton onClick={handleClick} sx={{ p: 0 }}> Next Quote about {choice}</ColorButton>
                        </Stack>
                        {/* </FormControl> */}
                    </Item>
                </BetterBox>
            </Container>
        </React.Fragment >
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