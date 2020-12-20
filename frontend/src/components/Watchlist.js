import { useContext, useState, useEffect } from 'react'
import { AuthContext } from './Authentication'
import firebaseConfig from '../firebaseConfig.js'
import { NavLink } from 'react-router-dom'
import ListBox from '../styles/boxes/ListBox'
import { SectorBox, SectorTags } from '../styles/boxes/SectorBox'
import RemoveBookmark from './RemoveBookmark'
import { ForwardIcon, SearchIcon } from './Icons'
import * as ROUTES from '../constants/Routes'
import AddButton from '../styles/buttons/AddButton'
import Loader from './Loader'

export default function Watchlist() {
    const { currentUser } = useContext(AuthContext)
    const [watchlist, setWatchlist] = useState([])
    const [sectors, setSectors] = useState([])
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
                const stockObject = snapshot.val();
                const stockList = Object.keys(stockObject).map(key => ({
                    ...stockObject[key],
                    uid: key,
                }))
                setWatchlist(stockList)
                setLoading(true)
            } else {
                setLoading(true)
                setData(false)
            }
        })
    }, [currentUser.uid])

    const watchlistOverview = watchlist.map(result => (
        <ListBox key={JSON.stringify(result.symbol)}>
            <div style={{display: 'flex'}}>
                <RemoveBookmark symbol={result.symbol} name={result.name} />
                <NavLink to={"/details/"+result.symbol} style={{width: '400px', textDecoration: 'none'}}>
                    <div style={{margin: '12px 0 0'}}>
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
    const sectorOverview = sectors.slice(1).map(result => (
        <SectorTags key={JSON.stringify(result.uid)}>
            <p style={{margin: '0'}}>{result.uid}</p>
        </SectorTags>
    ))

    if (loading) {
        if (data) {
            return (
                <div>
                    <div>
                        <SectorBox>
                            {sectorOverview}
                        </SectorBox>
                    </div>
                    {watchlistOverview}
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
                <SearchIcon style={{margin: '40px 0 20px'}}/>
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