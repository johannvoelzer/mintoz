import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import uuid from 'react-uuid'
import { AuthContext } from './Authentication'
import firebaseConfig from '../firebaseConfig.js'
import { NavLink } from 'react-router-dom'
import { NewspaperIcon } from './Icons'
import * as ROUTES from '../constants/Routes'
import InformationBox from '../styles/boxes/InformationBox'
import FeedPhoto from '../styles/images/FeedPhoto'
import PhotoTag from '../styles/images/PhotoTag'
import NewsLines from '../styles/text/NewsLines'
import AddButton from '../styles/buttons/AddButton'
import Loader from './Loader'

export default function PortfolioNews() {
    const { currentUser } = useContext(AuthContext)
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(true)

    useEffect(() => {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child('All').once('value', snapshot => {
            if (snapshot.val()) {
                const stockObject = snapshot.val();
                const stockList = Object.keys(stockObject).map(key => ({
                    ...stockObject[key],
                    uid: key,
                }))
                const watchlist = stockList.map(result => (result.symbol + ","))
                axios.get(`https://financialmodelingprep.com/api/v3/stock_news?tickers=${watchlist}&apikey=...`)     
                .then(response => {
                    if (response && response.data) {
                        setNews(response.data.slice(0,72))
                    }
                })
                .then(setLoading(true))
            } else {
                setLoading(true)
                setData(false)
            }
        })
    }, [currentUser.uid])

    const newsList = news.map(result => (
        <InformationBox style={{marginTop: '0'}} key={uuid()}>
            <NavLink to={"/details/"+result.symbol} style={{textDecoration: 'none'}}>
                <PhotoTag><h4>{result.symbol}</h4></PhotoTag>
            </NavLink>
            <a href={result.url} target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                <FeedPhoto src={result.image} alt={uuid()} />
                <h3>{result.title.length >= 136 ? result.title.substr(0, 132) + "\u2026" : result.title}</h3>
                <NewsLines>
                    {result.text.length >= 154 ? result.text.substr(0, 150) + "\u2026" : result.text}
                </NewsLines>
                <p style={{marginBottom: '0', color: 'var(--green-main)'}}>{result.site}</p>
            </a>
        </InformationBox>
    ))

    if (loading) {
        if (data) {
            return (
                <div>
                    {newsList}
                </div>
            )
        } else {
            return (
                <div>
                    <NewspaperIcon style={{margin: '40px 0 20px'}}/>
                    <p>CAN'T FIND RELATED NEWS</p>
                    <h3>START ADDING STOCKS</h3>
                        <NavLink to={ROUTES.EXPLORE}>
                            <AddButton>EXPLORE</AddButton>
                        </NavLink>
                </div>
            )
        }
    }
    return (
        <Loader />
    )
}