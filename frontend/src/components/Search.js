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
            axios.get(`https://financialmodelingprep.com/api/v3/search?query=${event.target.value}&limit=6&apikey=...`) 
            .then(response => {
                if (response && response.data) {
                    setResults(response.data
                    .filter(item => !item['symbol'].includes('.', '#', '%', '[', ']')
                    && !item['exchangeShortName'].includes('MUTUAL_FUND', 'None')
                    && !item['name'].includes('ETF'))
                    .map(result => (
                        <div key={JSON.stringify(result['symbol'])} style={{display: 'flex'}}>
                            <AddBookmark symbol={result['symbol']} name={result['name']} />
                            <NavLink to={"/details/"+result['symbol']} style={{width: '400px', textDecoration: 'none'}}>
                                <div style={{margin: '12px 20px 0 0'}}>
                                    <h5>{result['symbol']}</h5>
                                    <h4>{window.innerWidth < 460 ?
                                    (JSON.stringify(result['name']).length >= 26 ? result['name'].substr(0, 23) + "\u2026" : result['name']) :
                                    (JSON.stringify(result['name']).length >= 36 ? result['name'].substr(0, 33) + "\u2026" : result['name'])}</h4>
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
