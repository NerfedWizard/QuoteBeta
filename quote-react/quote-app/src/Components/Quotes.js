import React, { useState } from "react";
import axios from "axios";

function Quotes() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [popularity, setPopularity] = useState("");

    function getQuote() {
        axios.get("http://localhost:8080/quote", { crossdomain: true }).then(response => {
            setAuthor(response.data.author);
            setQuote(response.data.Quotes);
            setCategory(response.data.category);
            setPopularity(response.data.category);
        });
    }
    return (
        <div>
            <button onClick={getQuote}>
                Generate Quote
            </button>
            <h1>{author}</h1>
            <h3>{"-" + quote}</h3>
            <h5>{category}</h5>
            <h6>{popularity}</h6>
        </div>
    )
}
export default Quotes;