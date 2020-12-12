import axios from 'axios'
import { useEffect, useState } from 'react'
import Chart from './Chart'
import Fundamentals from './Fundamentals'
import CompanyDetails from './CompanyDetails'
import Loader from './Loader'

const url = 'https://www.alphavantage.co/query'
const key1 = process.env.ALPHA_VANTAGE_API_KEY_1
const key2 = process.env.ALPHA_VANTAGE_API_KEY_2

const StockInformation = ({symbol}) => {
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState([])

    useEffect(() => {
        axios.get(`${url}?function=OVERVIEW&symbol=${symbol}&apikey=${key1}`)  
        .then(response => {  
            if (response && response.data) {  
                setResult(response.data)
                setLoading(false)
            } else {
                axios.get(`${url}?function=OVERVIEW&symbol=${symbol}&apikey=${key2}`)  
                .then(response => {  
                    if (response && response.data) {  
                        setResult(response.data)
                        setLoading(false)
                    }
                })
            }
        })
    }, [symbol])

    if (loading) {
        return <Loader />
    }
    return (
        <div>
            <Chart symbol={symbol} />
            <Fundamentals result={result}/>
            <CompanyDetails result={result}/>
        </div>
    )
}

export default StockInformation