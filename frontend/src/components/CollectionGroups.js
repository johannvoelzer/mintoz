import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import AddBookmark from './AddBookmark'
import ListBox from '../styles/boxes/ListBox'
import { CollectionTab, CollectionContent } from '../styles/boxes/CollectionBox'
import Loader from './Loader'

export default function CollectionsGroups() {
    const [active, setActive] = useState(0)
    
    const [mostBlueChips, setMostBlueChips] = useState([])
    const [mostHighDividend, setMostHighDividend] = useState([])
    const [mostVolatile, setMostVolatile] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=100000000000&betaMoreThan=0.6&volumeMoreThan=1000000&limit=50&apikey=***`)     
        .then(response => {
            if (response && response.data) {
                setMostBlueChips(response.data)
            }
        })
        axios.get(`https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=0.8&volumeMoreThan=10000&dividendMoreThan=5.5&limit=50&apikey=***`)     
        .then(response => {
            if (response && response.data) {
                setMostHighDividend(response.data)
            }
        })
        axios.get(`https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=2&volumeMoreThan=6000000&limit=50&apikey=***`)     
        .then(response => {
            if (response && response.data) {
                setMostVolatile(response.data)
            }
        })
        setLoading(true)
    }, [])

    const handleClick = event => {
        const index = parseInt(event.target.id, 0)
        if (index !== active) {
        setActive(index)
        }
    }
    
    const blueChips = mostBlueChips
    .filter(item => !item.symbol.includes('.', '#', '%', '[', ']') && !item.companyName.includes('%'))
    .slice(0, 24)
    .map(result => (
        <ListBox key={JSON.stringify(result.symbol)}>
            <div style={{display: 'flex'}}>
                <AddBookmark symbol={result.symbol} name={result.companyName} />
                <NavLink to={"/details/"+result.symbol} style={{width: '400px', textDecoration: 'none'}}>
                    <div style={{margin: '10px 18px 0 0'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h5>{result.symbol}</h5>
                            {result.marketCap >= 1000000000 ?
                            <h4 style={{color: 'var(--green-main)'}}>{JSON.stringify(Math.round(result.marketCap / 10000000) / 100)}B</h4> :
                            <h4 style={{color: 'var(--green-main)'}}>{JSON.stringify(Math.round(result.marketCap / 10000) / 100)}M</h4>}
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h4>{result.companyName.length >= 22 ?
                            result.companyName.substr(0, 18) + "\u2026" :
                            result.companyName}</h4>
                            <h5>MKT CAP</h5>
                        </div>
                    </div>
                </NavLink>
            </div>
        </ListBox>
    ))

    const highDividend = mostHighDividend
    .filter(item => !item.symbol.includes('.', '#', '%', '[', ']') && !item.companyName.includes('%'))
    .slice(0, 24)
    .map(result => (
        <ListBox key={JSON.stringify(result.symbol)}>
            <div style={{display: 'flex'}}>
                <AddBookmark symbol={result.symbol} name={result.companyName} />
                <NavLink to={"/details/"+result.symbol} style={{width: '400px', textDecoration: 'none'}}>
                    <div style={{margin: '10px 18px 0 0'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h5>{result.symbol}</h5>
                            <h4 style={{color: 'var(--green-main)'}}>${JSON.stringify(Math.round(result.lastAnnualDividend * 100) / 100)}</h4>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h4>{result.companyName.length >= 21 ?
                            result.companyName.substr(0, 17) + "\u2026" :
                            result.companyName}</h4>
                            <h5>DIVIDEND</h5>
                        </div>
                    </div>
                </NavLink>
            </div>
        </ListBox>
    ))

    const volatile = mostVolatile
    .filter(item => !item.symbol.includes('.', '#', '%', '[', ']') && !item.companyName.includes('%'))
    .slice(0, 24)
    .map(result => (
        <ListBox key={JSON.stringify(result.symbol)}>
            <div style={{display: 'flex'}}>
                <AddBookmark symbol={result.symbol} name={result.companyName} />
                <NavLink to={"/details/"+result.symbol} style={{width: '400px', textDecoration: 'none'}}>
                    <div style={{margin: '10px 18px 0 0'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h5>{result.symbol}</h5>
                            <h4 style={{color: 'var(--green-main)'}}>{JSON.stringify(Math.round(result.beta * 100) / 100)}</h4>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h4>{result.companyName.length >= 24 ?
                            result.companyName.substr(0, 20) + "\u2026" :
                            result.companyName}</h4>
                            <h5>BETA</h5>
                        </div>
                    </div>
                </NavLink>
            </div>
        </ListBox>
    ))

    if (loading) {
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                        <CollectionTab style={{opacity: `${props => (props.active ? '100%' : '40%')}`}} onClick={handleClick} active={active === 0} id={0}>
                            BLUE CHIPS
                        </CollectionTab>
                        <CollectionTab onClick={handleClick} active={active === 1} id={1}>
                            HIGH DIVIDEND
                        </CollectionTab>
                        <CollectionTab onClick={handleClick} active={active === 2} id={2}>
                            MOST VOLATILE
                        </CollectionTab>
                </div>
                <CollectionContent active={active === 0}>
                    {blueChips}
                </CollectionContent>
                <CollectionContent active={active === 1}>
                    {highDividend}
                </CollectionContent>
                <CollectionContent active={active === 2}>
                    {volatile}
                </CollectionContent>
            </div>
        )
    } else {
        return (
            <Loader />
        )
    }
}
