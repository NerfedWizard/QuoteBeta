import * as React from 'react';
import { InputLabel, MenuItem, Select, Container, Box, CssBaseline, Button, Paper, ThemeProvider, createTheme, FormControl, styled } from '@mui/material';
import axios from 'axios';



export default function SelectVariants() {
    const [choice, setChoice] = React.useState('');
    const [quote, setQuote] = React.useState([]);
    const [author, setAuthor] = React.useState([]);



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
                        <h1>Choose a Quote by Category</h1>
                        {/* <InputLabel className="smokum-font">Category</InputLabel> */}
                        <FormControl autoWidth>
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={choice}
                                onChange={handleChange}

                                label="Category"
                                variant="filled"
                                sx={{ bgcolor: "#696969" }}>
                                <MenuItem value="" label="Category">

                                </MenuItem>
                                <MenuItem value={'life'}>Life</MenuItem>
                                <MenuItem value={'love'}>Love</MenuItem>
                                <MenuItem value={'inspiration'}>Inspiration</MenuItem>
                                <MenuItem value={'humor'}>Humor</MenuItem>
                                <MenuItem value={'wildcard'}>Wildcard</MenuItem>
                                <MenuItem value={'soul'}>Soul</MenuItem>
                                <MenuItem value={'truth'}>Truth</MenuItem>
                                <MenuItem value={'poetry'}>Poetry</MenuItem>
                                <MenuItem value={'wisdom'}>Wisdom</MenuItem>
                                <MenuItem value={'friendship'}>Friendship</MenuItem>
                                <MenuItem value={'happiness'}>Happiness</MenuItem>
                                <MenuItem value={'books'}>Books</MenuItem>
                                <MenuItem value={'romance'}>Romance</MenuItem>
                                <MenuItem value={'writing'}>Writing</MenuItem>
                                <MenuItem value={'success'}>Success</MenuItem>
                                <MenuItem value={'hope'}>Hope</MenuItem>
                                <MenuItem value={'arts'}>Arts</MenuItem>
                                <MenuItem value={'education'}>Education</MenuItem>
                                <MenuItem value={'motivation'}>Motivation</MenuItem>
                                <MenuItem value={'death'}>Death</MenuItem>
                                <MenuItem value={'faith'}>Faith</MenuItem>
                                <MenuItem value={'philosophy'}>Philosophy</MenuItem>
                                <MenuItem value={'mind'}>Mind</MenuItem>
                                <MenuItem value={'god'}>God</MenuItem>
                                <MenuItem value={'funny'}>Funny</MenuItem>
                                <MenuItem value={'relationship'}>Relationship</MenuItem>
                                <MenuItem value={'religion'}>Religion</MenuItem>
                                <MenuItem value={'science'}>Science</MenuItem>
                                <MenuItem value={'knowledge'}>Knowledge</MenuItem>
                                <MenuItem value={'quotes'}>Quotes</MenuItem>
                                <MenuItem value={'purpose'}>Purpose</MenuItem>
                                <MenuItem value={'positive'}>Positive</MenuItem>
                                <MenuItem value={'dad'}>Dad</MenuItem>
                            </Select>
                            <Button variant="contained" color="error" onClick={handleClick}>
                                Next Quote about {choice}
                            </Button>

                            <h1>
                                {author}
                            </h1>
                            <h2>
                                {quote}
                            </h2>
                        </FormControl>
                    </Paper>
                </Box>
            </Container>
        </React.Fragment>
    );
}