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
            axios.get(`https://ticker-2e1ica8b9.now.sh/keyword/${event.target.value}`)     
            .then(response => {
                if (response && response.data) {
                    setResults(response.data.map(result => (
                        <div key={JSON.stringify(result['symbol'])} style={{display: 'flex'}}>
                            <AddToWatchlist symbol={result['symbol']} name={result['name']} />
                            <NavLink to={"/details/"+result['symbol']} style={{width: '400px', textDecoration: 'none'}}>
                                <div style={{margin: '12px 0 0 12px'}}>
                                    <h5>{result['symbol']}</h5>
                                    <h4>{result['name'].length >= 27 ? result['name'].substr(0, 23) + "\u2026" : result['name']}</h4>
                                </div>
                            </NavLink>
                            <NavLink to={"/details/"+result['symbol']} style={{padding: '22px 16px 0 0'}}>
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
