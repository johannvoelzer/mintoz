import { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import AuthenticationBox from '../styles/boxes/AuthenticationBox'
import FormInput from '../styles/inputs/FormInput'
import AddToWatchlist from './AddToWatchlist'
import { ForwardIcon } from './Icons'

export default function Search() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    function handleInputChange(event) {
        event.preventDefault()
        setQuery(event.target.value)
        if (event.target.value) {
            axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${event.target.value}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`)     
            .then(response => {
                if (response && response.data && response.data.bestMatches) {
                    setResults(response.data.bestMatches.map(result => (
                            <div key={JSON.stringify(result['1. symbol'])} style={{display: 'flex'}}>
                                <AddToWatchlist symbol={result['1. symbol']} name={result['2. name']} />
                                <NavLink to={"/details/"+result['1. symbol']+"/"+result['2. name']} style={{width: '400px', textDecoration: 'none'}}>
                                    <div style={{margin: '12px 0 0 12px'}}>
                                        <h5>{result['1. symbol']}</h5>
                                        <h4>{result['2. name'].length >= 27 ? result['2. name'].substr(0, 23) + "\u2026" : result['2. name']}</h4>
                                    </div>
                                </NavLink>
                                <NavLink to={"/details/"+result['1. symbol']+"/"+result['2. name']} style={{padding: '22px 16px 0 0'}}>
                                    <ForwardIcon />
                                </NavLink>
                            </div>
                    )))
                }
            })
        }
    }

    return (
        <form>
            <AuthenticationBox>
                <FormInput
                    style={{marginBottom: '20px'}}
                    value={query}
                    placeholder='ENTER KEYWORD OR SYMBOL'
                    onChange={handleInputChange}
                />
                <div style={{textAlign: 'left', }}>
                    {results}
                </div>
            </AuthenticationBox>
        </form>
    )
}
