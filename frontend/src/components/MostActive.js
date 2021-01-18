import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import ListBox from '../styles/boxes/ListBox'
import AddBookmark from './AddBookmark'
import { ForwardIcon, ActiveIcon } from './Icons'

export default function MostActive() {
    const [activelist, setActivelist] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`https://financialmodelingprep.com/api/v3/actives?apikey=...`)     
        .then(response => {
            if (response && response.data) {
                setActivelist(response.data)
                setLoading(true)
            }
        })
    }, [])

    const mostActiveOverview = activelist.slice(0, 12).map(result => (
        <ListBox key={JSON.stringify(result.ticker)}>
            <div style={{display: 'flex'}}>
                <AddBookmark symbol={result.ticker} name={result.companyName} />
                <NavLink to={"/details/"+result.ticker} style={{width: '400px', textDecoration: 'none'}}>
                    <div style={{margin: '12px 0 0'}}>
                        <h5>{result.ticker}</h5>
                        <h4>{window.innerWidth < 460 ?
                            (result.companyName.length >= 26 ? result.companyName.substr(0, 23) + "\u2026" : result.companyName) :
                            (result.companyName.length >= 38 ? result.companyName.substr(0, 35) + "\u2026" : result.companyName)}</h4>
                    </div>
                </NavLink>
                <NavLink to={"/details/"+result.ticker} style={{padding: '22px 16px 0 0'}}>
                    <ForwardIcon />
                </NavLink>
            </div>
        </ListBox>
    ))

    if (loading) {
        return (
            <div>
                <h6><ActiveIcon /> MOST ACTIVE</h6>
                {mostActiveOverview}
            </div>
        )
    } else {
        return (
            <div />
        )
    }
}