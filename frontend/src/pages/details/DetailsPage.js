import Navigation from '../../components/Navigation'
import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import * as ROUTES from '../../constants/Routes'
import { AuthContext } from '../../components/Authentication'
import Chart from '../../components/Chart'
import Fundamentals from '../../components/Fundamentals'
import StockRating from '../../components/StockRating'
import StockAnalysis from '../../components/StockAnalysis'
import CompanyDetails from '../../components/CompanyDetails'
import Eps from '../../components/Eps'
import Financials from '../../components/Financials'
import Description from '../../components/Description'
import BookmarkToggle from '../../components/BookmarkToggle'
import AnalyseBox from '../../styles/boxes/AnalyseBox'
import BackButton from '../../styles/buttons/BackButton'
import { BackIcon } from '../../components/Icons'
import Loader from '../../components/Loader'

const DetailsPage = () => {
    const {stockSymbol} = useParams()
    const [profile, setProfile] = useState([])
    const [ratios, setRatios] = useState([])
    const [quote, setQuote] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`https://financialmodelingprep.com/api/v3/quote/${stockSymbol}?apikey=...`)  
        .then(response => {
            if (response && response.data) {
                setQuote(response.data[0])
            }
        })
        axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${stockSymbol}?apikey=...`)  
        .then(response => {
            if (response && response.data) {
                setRatios(response.data.historical)
            }
        })
        axios.get(`https://financialmodelingprep.com/api/v3/profile/${stockSymbol}?apikey=...`)  
        .then(response => {
            if (response && response.data) {
                setProfile(response.data[0])
            }
        })
        .then(setLoading(true))
    }, [stockSymbol])

    const history = useHistory()

    const { currentUser } = useContext(AuthContext)

    if (!currentUser) {
        return <Redirect to={ROUTES.LOGIN} />
    }
    if (loading) {
        return (
            <div style={{marginBottom: '100px'}}>
                <div style={{margin: '30px', display: 'flex', justifyContent: 'space-around'}}>
                    <BackButton style={{marginTop: '2px'}} onClick={() => history.goBack()}>
                        <BackIcon />
                    </BackButton>
                    <h2 style={{margin: '2px 0 0', width: '200px'}}>{stockSymbol}</h2>
                    <BookmarkToggle symbol={stockSymbol} name={profile.companyName} />
                </div>
                <h3 style={{margin: '0 30px'}}>{profile.companyName}</h3>
                <Chart symbol={stockSymbol} price={quote.price} change={quote.changesPercentage} />
                <AnalyseBox>
                    <StockRating symbol={stockSymbol} />
                    <StockAnalysis quote={quote} />
                </AnalyseBox>
                <Fundamentals quote={quote} profile={profile} ratios={ratios} />
                <Eps symbol={stockSymbol} quote={quote} />
                <Financials symbol={stockSymbol} />
                <CompanyDetails profile={profile} />
                <Description profile={profile} />
                <Navigation />
            </div>
        )
    }
    return (
        <Loader />
    )
}

export default DetailsPage