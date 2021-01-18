import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import AddBookmark from './AddBookmark'
import ListBox from '../styles/boxes/ListBox'
import { ForwardIcon } from './Icons'
import Loader from './Loader'

export default function ChampionGroups() {
    const [mostChampions, setMostChampions] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=100000000000&betaLowerThan=2&betaMoreThan=1&volumeMoreThan=1000000&dividendLowerThan=1&limit=50&apikey=...`)     
        .then(response => {
            if (response && response.data) {
                setMostChampions(response.data)
            }
            setLoading(true)
        })
    }, [])
    
    const championList = mostChampions
    .filter(item => !item.symbol.includes('.', '#', '%', '[', ']') && !item.companyName.includes('%'))
    .slice(0, 48)
    .map(result => (
        <ListBox key={JSON.stringify(result.symbol)}>
            <div style={{display: 'flex'}}>
                <AddBookmark symbol={result.symbol} name={result.companyName} />
                <NavLink to={"/details/"+result.symbol} style={{width: '400px', textDecoration: 'none'}}>
                    <div style={{margin: '12px 0 0'}}>
                        <h5>{result.symbol}</h5>
                        <h4>{window.innerWidth < 460 ?
                            (result.companyName.length >= 26 ? result.companyName.substr(0, 23) + "\u2026" : result.companyName) :
                            (result.companyName.length >= 36 ? result.companyName.substr(0, 33) + "\u2026" : result.companyName)}</h4>
                    </div>
                </NavLink>
                <NavLink to={"/details/"+result.symbol} style={{padding: '22px 16px 0 0'}}>
                    <ForwardIcon />
                </NavLink>
            </div>
        </ListBox>
    ))

    if (loading) {
        return (
            <div>
                {championList}
            </div>
        )
    } else {
        return (
            <Loader />
        )
    }
}
