import { useContext, useState, useEffect } from 'react'
import { AuthContext } from './Authentication'
import firebaseConfig from '../firebaseConfig.js'
import { NavLink } from 'react-router-dom'
import ListBox from '../styles/boxes/ListBox'
import RemoveFromWatchlist from './RemoveFromWatchlist'
import { ForwardIcon } from './Icons'
import { SearchIcon } from './Icons'
import * as ROUTES from '../constants/Routes'
import RouteButton from '../styles/buttons/RouteButton'

export default function Watchlist() {
    const { currentUser } = useContext(AuthContext)
    const [watchlist, setWatchlist] = useState([])

    useEffect(() => {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).on('value', snapshot => {
            if (snapshot.val()) {
                const stockObject = snapshot.val();
                const stockList = Object.keys(stockObject).map(key => ({
                    ...stockObject[key],
                    uid: key,
                }))
                setWatchlist(stockList)
            } else {
                setWatchlist([])
            }
        })
    }, [currentUser.uid])

    const watchlistOverview = watchlist.map(result => (
        <ListBox key={JSON.stringify(result.symbol)}>
            <div style={{display: 'flex'}}>
                <RemoveFromWatchlist symbol={result.symbol} name={result.name} />
                <NavLink to={"/details/"+result.symbol+"/"+result.name} style={{width: '400px', textDecoration: 'none'}}>
                    <div style={{margin: '12px 0 0 12px'}}>
                        <h5>{result.symbol}</h5>
                        <h4>{result.name.length >= 27 ? result.name.substr(0, 23) + "\u2026" : result.name}</h4>
                    </div>
                </NavLink>
                <NavLink to={"/details/"+result.symbol+"/"+result.name} style={{padding: '22px 16px 0 0'}}>
                    <ForwardIcon />
                </NavLink>
            </div>
        </ListBox>
    ))

    if (watchlist.length !== 0) {
        return (
            <div>
                <h2>WATCHLIST</h2>
                {watchlistOverview}
            </div>
        )
    }
    return (
        <div>
            <h2>WATCHLIST</h2>
            <SearchIcon style={{margin: '60px 0 20px'}}/>
            <p>YOUR WATCHLIST IS EMPTY</p>
            <h3>START ADDING STOCKS</h3>
            <NavLink to={ROUTES.EXPLORE}>
                <RouteButton>EXPLORE</RouteButton>
            </NavLink>
        </div>
    )
}