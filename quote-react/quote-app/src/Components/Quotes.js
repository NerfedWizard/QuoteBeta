import React from 'react';
import axios from 'axios';

export default class Quotes extends React.Component {
    state = {
        quotes: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/quote/all`)
            .then(res => {
                const quotes = res.data;
                this.setState({ quotes });
            })
    }

    render() {
        return (
            <ul>
                {
                    this.state.quotes
                        .map(quote =>
                            <li key={quote.id}>{quote.quoteAuthor}</li>
                        )
                }
            </ul>
        )
    }
}