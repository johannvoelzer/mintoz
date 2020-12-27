import { useState, useEffect } from 'react'
import axios from 'axios'
import uuid from 'react-uuid'
import { NavLink } from 'react-router-dom'
import { MarketBox, MarketCard, CardDetails, DetailsChange } from '../styles/boxes/MarketBox'
import Loader from './Loader'

export default function MarketOverview() {
    const [mostGainers, setMostGainers] = useState([])
    const [mostLosers, setMostLosers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`https://financialmodelingprep.com/api/v3/gainers?apikey=***`)     
        .then(response => {
            if (response && response.data) {
                setMostGainers(response.data)
            }
        })
        axios.get(`https://financialmodelingprep.com/api/v3/losers?apikey=***`)     
        .then(response => {
            if (response && response.data) {
                setMostLosers(response.data)
            }
        })
        .then(setLoading(true))
    }, [])

    const gainers = mostGainers.map(result => (
        <div style={{margin: '0 0 0 30px',paddingRight: '0'}} key={uuid()}>
            <NavLink to={"/details/"+result.ticker} style={{textDecoration: 'none'}}>
                <MarketCard>
                    <h5>{result.ticker}</h5>
                    {result.companyName.length >= 21 ?
                    <h4>{result.companyName.substr(0, 18) + "\u2026"}</h4> :
                    <h4>{result.companyName}</h4>}
                    <CardDetails>
                        <h4 style={{marginTop: '20px'}}>${result.price}</h4>
                        {result.changesPercentage.substring(1, result.changesPercentage.length-2) >= 0 ?
                        <DetailsChange style={{background: 'var(--green-10)', color: 'var(--green-main)'}}>{result.changesPercentage.substring(1, result.changesPercentage.length-1).substr(0, 8)}</DetailsChange> :
                        <DetailsChange style={{background: 'var(--red-12)', color: 'var(--red-main)'}}>{result.changesPercentage.substring(1, result.changesPercentage.length-1).substr(0, 8)}</DetailsChange>}
                    </CardDetails>
                </MarketCard>
            </NavLink>
        </div>
    ))

    const losers = mostLosers.map(result => (
        <div style={{margin: '0 0 0 30px',paddingRight: '0'}} key={uuid()}>
            <NavLink to={"/details/"+result.ticker} style={{textDecoration: 'none'}}>
                <MarketCard>
                    <h5>{result.ticker}</h5>
                    {result.companyName.length >= 21 ?
                    <h4>{result.companyName.substr(0, 18) + "\u2026"}</h4> :
                    <h4>{result.companyName}</h4>}
                    <CardDetails>
                        <h4 style={{marginTop: '20px'}}>${result.price}</h4>
                        {result.changesPercentage.substring(1, result.changesPercentage.length-2) >= 0 ?
                        <DetailsChange style={{background: 'var(--green-10)', color: 'var(--green-main)'}}>{result.changesPercentage.substring(1, result.changesPercentage.length-1).substr(0, 8)}</DetailsChange> :
                        <DetailsChange style={{background: 'var(--red-12)', color: 'var(--red-main)'}}>{result.changesPercentage.substring(1, result.changesPercentage.length-1).substr(0, 8)}</DetailsChange>}
                    </CardDetails>
                </MarketCard>
            </NavLink>
        </div>
    ))

    if (loading) {
        return (
            <div>
                <MarketBox>
                    <h4 style={{color: 'var(--green-main)'}}>GAINERS</h4>
                    <div style={{padding: '30px 0 40px', display: 'flex', overflow: 'auto'}}>
                        {gainers}
                    </div>
                </MarketBox>
                <MarketBox>
                    <h4 style={{color: 'var(--red-main)'}}>LOSERS</h4>
                    <div style={{padding: '30px 0 40px', display: 'flex', overflow: 'auto'}}>
                        {losers}
                    </div>
                </MarketBox>
            </div>
        )
    }
    return (
        <Loader />
    )
}