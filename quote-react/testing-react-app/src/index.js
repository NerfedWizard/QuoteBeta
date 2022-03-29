import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import axios from 'axios';
// import Author from './Author';

const PlusOne = () => {
    // const [counter, setCounter] = useState(0);
    const axios = require('axios');
    const [data, setData] = useState([]);
    const [quote, setQuote] = useState([]);
    async function GetQuotes() {
        // increment();

        const min = 1;
        const max = 37489;
        const rand = Math.floor(Math.random() * (max - min)) + min;
        const ident = "ID" + rand;

        let identifier = await axios.get(`/api/quote/${ident}`);
        setData(identifier.data);
        console.log(ident);
        setQuote(JSON.stringify(data, ['id', 'quoteAuthor', 'quoted', 'quoteCategory'], 10));
        console.log(data);
    }
    async function GetQuoteByAuthor(event) {
        const qAuthor = event.target.value;
        console.log(qAuthor);
        let author = await axios.get(`/api/quote/author/${qAuthor}`);
        setData(author.data);
        setQuote(JSON.stringify(data, ['id', 'quoteAuthor', 'quoted', 'quoteCategory'], 10));
        console.log(author.data);
    }
    async function GetQuoteByCategory() {
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
        let category = await axios.get(`/api/quote/category/${qCategory}`);
        setData(category.data);
        console.log(category.data);
    }


    // const increment = () => {
    //     setCounter(counter + 1);
    //     console.log(counter);
    // }
    return <div className="App-header">
        <div className="palette-mosaic">
            <p>This is a counter Wahoo </p>

            <h2>{quote}</h2>
            <Button onClick={GetQuotes} > Random</Button>
            <input type="text" placeholder="Enter Author" value={data.value} />
            <Button onClick={GetQuoteByAuthor}> By Author</Button>

            <Button onClick={GetQuoteByCategory}>Category</Button>
        </div>
    </div>
}



ReactDOM.render(<PlusOne />, document.getElementById('root'));