import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from './Authentication'
import firebaseConfig from '../firebaseConfig.js'
import { NavLink } from 'react-router-dom'
import ListBox from '../styles/boxes/ListBox'
import { SectorBox, SectorTags } from '../styles/boxes/SectorBox'
import RemoveBookmark from './RemoveBookmark'
import { PortfolioIcon } from './Icons'
import * as ROUTES from '../constants/Routes'
import { WatchlistToggle, ToggleBar, WatchlistTab, WatchlistContent } from '../styles/boxes/WatchlistBox'
import AddButton from '../styles/buttons/AddButton'
import Loader from './Loader'

export default function Watchlist() {
    const { currentUser } = useContext(AuthContext)
    const [active, setActive] = useState(0)
    const [sectors, setSectors] = useState([])
    const [watchlist, setWatchlist] = useState([])
    const [stockDetails, setStockDetails] = useState([])
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(true)

    useEffect(() => {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).once('value', snapshot => {
            if (snapshot.val()) {
                const sectorObject = snapshot.val();
                const sectorList = Object.keys(sectorObject).map(key => ({
                    ...sectorObject[key],
                    uid: key,
                }))
                setSectors(sectorList)
                setData(true)
            }
        })
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child('All').once('value', snapshot => {
            if (snapshot.val()) {
                const stockObject = snapshot.val()
                const stockList = Object.keys(stockObject).map(key => ({
                    ...stockObject[key],
                    uid: key,
                }))
                setStockDetails(stockObject)
                const stocks = stockList.map(result => (result.symbol + ","))
                axios.get(`https://financialmodelingprep.com/api/v3/quote/${stocks}?apikey=...`)     
                .then(response => {
                    if (response && response.data) {
                        setWatchlist(response.data)
                        setLoading(true)
                    }
                })
            } else {
                setLoading(true)
                setData(false)
            }
        })
    }, [currentUser.uid])

    const watchlistDailyChange = watchlist.map(result => (
        <ListBox key={JSON.stringify(result.symbol)}>
            <div style={{display: 'flex'}}>
                <RemoveBookmark symbol={result.symbol} name={result.name} />
                <NavLink to={"/details/"+result.symbol} style={{width: '400px', textDecoration: 'none'}}>
                    <div style={{margin: '12px 0 0'}}>
                        <h5>{result.symbol}</h5>
                        <h4>{window.innerWidth < 460 ?
                        (result.name.length >= 19 ? result.name.substr(0, 16) + "\u2026" : result.name) :
                        (result.name.length >= 27 ? result.name.substr(0, 24) + "\u2026" : result.name)}</h4>
                    </div>
                </NavLink>
                <NavLink to={"/details/"+result.symbol} style={{padding: '22px 16px 0 0', textDecoration: 'none'}}>
                    {result.changesPercentage >= 0 ?
                    <h4 style={{color: 'var(--green-main)'}}>+{Math.round(result.changesPercentage * 100) / 100}%</h4> :
                    <h4 style={{color: 'var(--red-main)'}}>{Math.round(result.changesPercentage * 100) / 100}%</h4>}
                </NavLink>
            </div>
        </ListBox>
    ))

    const watchlistSinceStart = watchlist.map(result => (
        <ListBox key={JSON.stringify(result.symbol)}>
            <div style={{display: 'flex'}}>
                <RemoveBookmark symbol={result.symbol} name={result.name} />
                <NavLink to={"/details/"+result.symbol} style={{width: '400px', textDecoration: 'none'}}>
                    <div style={{margin: '12px 0 0'}}>
                        <h5>{result.symbol}</h5>
                        <h4>{window.innerWidth < 460 ?
                        (result.name.length >= 19 ? result.name.substr(0, 16) + "\u2026" : result.name) :
                        (result.name.length >= 27 ? result.name.substr(0, 24) + "\u2026" : result.name)}</h4>
                    </div>
                </NavLink>
                <NavLink to={"/details/"+result.symbol} style={{padding: '22px 16px 0 0', textDecoration: 'none'}}>
                    {(result.price / stockDetails[result.symbol]['price'] - 1) === 0 ?
                    <h4 style={{color: 'var(--green-main)'}}>{Math.round((result.price / stockDetails[result.symbol]['price'] - 1) * 10000) / 100}%</h4> :
                    ((result.price / stockDetails[result.symbol]['price'] - 1) > 0 ?
                    <h4 style={{color: 'var(--green-main)'}}>+{Math.round((result.price / stockDetails[result.symbol]['price'] - 1) * 10000) / 100}%</h4> :
                    <h4 style={{color: 'var(--red-main)'}}>{Math.round((result.price / stockDetails[result.symbol]['price'] - 1) * 10000) / 100}%</h4>)}
                </NavLink>
            </div>
        </ListBox>
    ))

    const sectorOverview = sectors.slice(1).map(result => (
        <SectorTags key={JSON.stringify(result.uid)}>
            <p style={{margin: '0'}}>{result.uid}</p>
        </SectorTags>
    ))

    const handleClick = event => {
        const index = parseInt(event.target.id, 0)
        if (index !== active) {
        setActive(index)
        }
    }

    if (loading) {
        if (data) {
            return (
                <div>
                    <div>
                        <SectorBox>
                            {sectorOverview}
                        </SectorBox>
                    </div>
                    <ToggleBar />
                    <WatchlistToggle>
                        <WatchlistTab onClick={handleClick} active={active === 0} id={0}>
                            DAILY
                        </WatchlistTab>
                        <WatchlistTab onClick={handleClick} active={active === 1} id={1}>
                            TOTAL
                        </WatchlistTab>
                    </WatchlistToggle>
                    <WatchlistContent active={active === 0}>
                        {watchlistDailyChange}
                    </WatchlistContent>
                    <WatchlistContent active={active === 1}>
                        {watchlistSinceStart}
                    </WatchlistContent>
                    <div>
                        <NavLink to={ROUTES.EXPLORE}>
                            <AddButton>ADD MORE</AddButton>
                        </NavLink>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <PortfolioIcon style={{margin: '40px 0 20px'}}/>
                <p>YOUR PORTFOLIO IS EMPTY</p>
                <h3>START ADDING STOCKS</h3>
                <div>
                    <NavLink to={ROUTES.EXPLORE}>
                        <AddButton>EXPLORE</AddButton>
                    </NavLink>
                </div>
            </div>
        )
    } else {
        return (
            <Loader />
        )
    }
}