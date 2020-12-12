import Navigation from '../../components/Navigation'
import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import * as ROUTES from '../../constants/Routes'
import { AuthContext } from '../../components/Authentication'
import { useParams } from 'react-router-dom'
import Chart from '../../components/Chart'
import Fundamentals from '../../components/Fundamentals'
import CompanyDetails from '../../components/CompanyDetails'
import BookmarkToggle from '../../components/BookmarkToggle'
import DetailsHeader from '../../styles/headers/DetailsHeader'
import BackButton from '../../components/BackButton'
import Loader from '../../components/Loader'

const DetailsPage = () => {
    const {stockSymbol} = useParams()
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState([])

    const url = 'https://www.alphavantage.co/query'
    const key = process.env.ALPHA_VANTAGE_API_KEY

    useEffect(() => {
        axios.get(`${url}?function=OVERVIEW&symbol=${stockSymbol}&apikey=${key}`)  
        .then(response => {  
            if (response && response.data) {  
                setResult(response.data)
                setLoading(false)
            }
        })
    }, [stockSymbol, key])

    const { currentUser } = useContext(AuthContext)
    if (!currentUser) {
        return <Redirect to={ROUTES.LOGIN} />
    }
    if (loading) {
        return <Loader />
    }
    return (
        <div style={{marginBottom: '60px'}}>
            <DetailsHeader>
                <BackButton style={{marginTop: '4px'}} />
                <h2 style={{margin: '0'}}>{stockSymbol}</h2>
                <BookmarkToggle symbol={stockSymbol} name={result.Name} />
            </DetailsHeader>
            <h3 style={{margin: '0 30px'}}>{result.Name}</h3>
            <Chart symbol={stockSymbol} />
            <Fundamentals result={result}/>
            <CompanyDetails result={result}/>
            <Navigation />
        </div>
    );
};

export default DetailsPage