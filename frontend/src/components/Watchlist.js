import { useContext, useState, useEffect } from 'react'
import { AuthContext } from './Authentication'
import firebaseConfig from '../firebaseConfig.js'
import { NavLink } from 'react-router-dom'
import ListBox from '../styles/boxes/ListBox'
import RemoveBookmark from './RemoveBookmark'
import { ForwardIcon, SearchIcon } from './Icons'
import * as ROUTES from '../constants/Routes'
import { AddButton, LogoutButton } from '../styles/buttons/PortfolioButtons'

export default function Watchlist() {
    const { currentUser } = useContext(AuthContext)
    const [watchlist, setWatchlist] = useState([])

    useEffect(() => {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).once('value', snapshot => {
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

    const watchlistItems = watchlist.map(result => (
            <ListBox key={JSON.stringify(result.symbol)}>
                <div style={{display: 'flex'}}>
                    <RemoveBookmark symbol={result.symbol} name={result.name} />
                    <NavLink to={"/details/"+result.symbol} style={{width: '400px', textDecoration: 'none'}}>
                        <div style={{margin: '12px 0 0 6px'}}>
                            <h5>{result.symbol}</h5>
                            <h4>{result.name.length >= 28 ? result.name.substr(0, 24) + "\u2026" : result.name}</h4>
                        </div>
                    </NavLink>
                    <NavLink to={"/details/"+result.symbol} style={{padding: '22px 16px 0 0'}}>
                        <ForwardIcon />
                    </NavLink>
                </div>
            </ListBox>
    ))

    if (watchlist.length !== 0) {
        return (
            <div>
                {watchlistItems}
                <div>
                    <NavLink to={ROUTES.EXPLORE}>
                        <AddButton>ADD MORE</AddButton>
                    </NavLink>
                    <LogoutButton onClick={() => firebaseConfig.auth().signOut()}>LOGOUT</LogoutButton>
                </div>
            </div>
        )
    }
    return (
        <div>
            <SearchIcon style={{margin: '40px 0 20px'}}/>
            <p>YOUR PORTFOLIO IS EMPTY</p>
            <h3>START ADDING STOCKS</h3>
            <div>
                <NavLink to={ROUTES.EXPLORE}>
                    <AddButton>EXPLORE</AddButton>
                </NavLink>
                <LogoutButton onClick={() => firebaseConfig.auth().signOut()}>LOGOUT</LogoutButton>
            </div>
        </div>
    )
}