import React from 'react'
import { useEffect, useState } from 'react';

function Author() {
    const [quote, setQuote] = useState([]);
    const axios = require('axios');

    const res = axios.get("/api/quote/ID22");
    let quotes = res.then((response) => {
        console.log(response);
        const theQuotes = response.data;
        setQuote(theQuotes);
    });
    useEffect(() => {
        quotes();
        return () => {
            setQuote({});
        };
    }, []);

    return (
        <div>
            {quote.map((quotes) => (
                <li key={quotes[0]}></li>
            ))}

        </div>
    );
}

export default Author;