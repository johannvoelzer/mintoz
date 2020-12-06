import { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const url = 'https://www.alphavantage.co/query'
const key = process.env.ALPHA_VANTAGE_API_KEY

export default function Search() {
    const [query, setQuery] = useState(''); 
    const [results, setResults] = useState([]);

    function handleInputChange(event) {
        event.preventDefault();  
        setQuery(event.target.value)
        if (query && query.length > 1) {
            axios.get(`${url}?function=SYMBOL_SEARCH&keywords=${query}&apikey=${key}`)  
                .then(({ data }) => {
                setResults(data.bestMatches)
            })
        }
    }

    const searchResults = results.map(result => (
        <li key={result['1. symbol']}>
            <NavLink to={"/details/"+result['1. symbol']+"/"+result['2. name']}>
                <p>{result['1. symbol']}</p>
                <h3>{result['2. name']}</h3>
            </NavLink>
        </li>
    ))

    return (
        <form>
            <input
                value={query}
                placeholder="Search for keyword"
                onChange={handleInputChange}
            />
            <ul>{searchResults}</ul>
        </form>
    )
}
