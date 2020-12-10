import { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const url = 'https://www.alphavantage.co/query'
const key1 = process.env.ALPHA_VANTAGE_API_KEY_1
const key2 = process.env.ALPHA_VANTAGE_API_KEY_2

export default function Search() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    function handleInputChange(event) {
        event.preventDefault()
        setQuery(event.target.value)
        if (event.target.value) {
            axios.get(`${url}?function=SYMBOL_SEARCH&keywords=${event.target.value}&apikey=${key1}`)     
            .then(response => {
                if (response && response.data && response.data.bestMatches) {
                    setResults(response.data.bestMatches.map(result => (
                        <li key={result['1. symbol']}>
                            <NavLink to={"/details/"+result['1. symbol']+"/"+result['2. name']}>
                                <p>{result['1. symbol']}</p>
                                <h3>{result['2. name']}</h3>
                            </NavLink>
                        </li>
                    )))
                } else {
                    axios.get(`${url}?function=SYMBOL_SEARCH&keywords=${event.target.value}&apikey=${key2}`)     
                    .then(response => {
                        if (response && response.data && response.data.bestMatches) {
                            setResults(response.data.bestMatches.map(result => (
                                <li key={result['1. symbol']}>
                                    <NavLink to={"/details/"+result['1. symbol']+"/"+result['2. name']}>
                                        <p>{result['1. symbol']}</p>
                                        <h3>{result['2. name']}</h3>
                                    </NavLink>
                                </li>
                            )))
                        }
                    })
                }
            })
        }
    }

    return (
        <form>
            <input
                value={query}
                placeholder="Enter keyword or symbol"
                onChange={handleInputChange}
            />
            <ul>{results}</ul>
        </form>
    )
}
