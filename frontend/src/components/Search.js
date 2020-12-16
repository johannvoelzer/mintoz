import { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import AddBookmark from './AddBookmark'
import { SearchBox, SearchField, SearchResults } from '../styles/boxes/SearchBox'
import { LensIcon } from './Icons'

export default function Search() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    function handleInputChange(event) {
        event.preventDefault()
        setQuery(event.target.value)
        if (event.target.value) {
            axios.get(`https://financialmodelingprep.com/api/v3/search?query=${event.target.value}&limit=6&apikey=638d777cab0c32857e401d69e4a38e52`) 
            .then(response => {
                if (response && response.data) {
                    setResults(response.data
                    .filter(item => !item['symbol'].includes('.', '#', '%', '[', ']', 'null', '') && !item['name'].includes('%'))
                    .map(result => (
                        <div key={JSON.stringify(result['symbol'])} style={{display: 'flex'}}>
                            <AddBookmark symbol={result['symbol']} name={result['name']} />
                            <NavLink to={"/details/"+result['symbol']} style={{width: '400px', textDecoration: 'none'}}>
                                <div style={{margin: '12px 0 0 12px'}}>
                                    <h5>{result['symbol']}</h5>
                                    <h4>{result['name'].length >= 32 ? result['name'].substr(0, 28) + "\u2026" : result['name']}</h4>
                                </div>
                            </NavLink>
                        </div>
                    )))
                }
            })
        }
    }

    return (
        <form>
            <SearchBox>
                <SearchField
                    value={query}
                    placeholder='ENTER KEYWORD OR SYMBOL'
                    onChange={handleInputChange}
                />
                <LensIcon style={{position: 'absolute', margin: '27px 0 0 -40px'}}/>
                <SearchResults>
                    {results}
                </SearchResults>
            </SearchBox>
        </form>
    )
}
