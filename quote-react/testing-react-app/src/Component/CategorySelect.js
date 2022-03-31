import * as React from 'react';
import { InputLabel, List, MenuItem, Select, Container, Box, CssBaseline, ListItem } from '@mui/material';
import axios from 'axios';


export default function SelectVariants() {
    const [choice, setChoice] = React.useState('');
    const [value, setValue] = React.useState([]);
    const [quote, setQuote] = React.useState([]);
    const [author, setAuthor] = React.useState([]);

    const handleChange = (event) => {
        setChoice(event.target.value);
        GetQuoteByCategory(event.target.value);
    };
    async function GetQuoteByCategory(event) {
        let category = await axios.get(`/api/quote/category/${event}`);
        setQuote(JSON.stringify(category.data, ['quoteAuthor', 'quoted'], 2));
        // for (String; author;) {
        //     setQuote(author);
        // }
        // setQuote(JSON.stringify(category.data, ['quoteAuthor', 'quoted'], 2));
        // setAuthor(JSON.stringify(category.data, ['quoteAuthor'], 2));
        // console.log(value);
        // console.log(JSON.stringify(category.data, null, '\n'));
        // const quoteList = new Array();
        // quoteList.push(quote);
        // for (let i = 0; i < category.data.length; i++) {
        // console.log(category.data[i].quoted);
        // quoteList.push(category.data[i].quoted + '\n');
        // quoteList.push("\n");
        // quoteList.push(category.data[i].quoteAuthor + '\n' + category.data[i].quoted);

        // }
        // setQuote(quoteList);
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#cfe8fc' }}>
                    <InputLabel className="smokum-font">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={choice}
                        onChange={handleChange}
                        label="Category">
                        <MenuItem value="">
                            <em>None</em>
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
                    <h1>{quote}</h1>
                </Box>
            </Container>
        </React.Fragment>
    );
}