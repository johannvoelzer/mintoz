import { useState, useEffect } from 'react'
import firebaseConfig from '../firebaseConfig.js'
import { NavLink } from 'react-router-dom'
import ListBox from '../styles/boxes/ListBox'
import AddToWatchlist from './AddToWatchlist'
import { ForwardIcon } from './Icons'

export default function HotStocks() {
    const [hotlist, setHotlist] = useState([])

    useEffect(() => {
        firebaseConfig.database().ref('HotStocks/').on('value', snapshot => {
            if (snapshot.val()) {
                const stockObject = snapshot.val();
                const stockList = Object.keys(stockObject).map(key => ({
                    ...stockObject[key],
                    uid: key,
                }))
                setHotlist(stockList)
            } else {
                setHotlist([])
            }
        })
    }, [])

    const hotlistOverview = hotlist.map(result => (
        <ListBox key={JSON.stringify(result.symbol)}>
            <div style={{display: 'flex'}}>
                <AddToWatchlist symbol={result.symbol} name={result.name} />
                <NavLink to={"/details/"+result.symbol} style={{width: '400px', textDecoration: 'none'}}>
                    <div style={{margin: '12px 0 0 12px'}}>
                        <h5>{result.symbol}</h5>
                        <h4>{result.name.length >= 27 ? result.name.substr(0, 23) + "\u2026" : result.name}</h4>
                    </div>
                </NavLink>
                <NavLink to={"/details/"+result.symbol} style={{padding: '22px 16px 0 0'}}>
                    <ForwardIcon />
                </NavLink>
            </div>
        </ListBox>
    ))

    if (hotlist.length !== 0) {
        return (
            <div>
                <h6>HOT STOCKS</h6>
                {hotlistOverview}
            </div>
        )
    }
    return (
        <div>
            <h6>HOT STOCKS</h6>
            <p>CURRENTLY NO HOT STOCKS</p>
        </div>
    )
}