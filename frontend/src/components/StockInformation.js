import axios from 'axios';
import { useEffect, useState } from 'react';
import StockChart from './StockChart';
import Fundamentals from './Fundamentals';
import CompanyDetails from './CompanyDetails';

const url = 'https://www.alphavantage.co/query'
const key = process.env.ALPHA_VANTAGE_API_KEY

const StockInformation = ({symbol}) => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        axios.get(`${url}?function=OVERVIEW&symbol=${symbol}&apikey=${key}`)  
            .then(({ data }) => {
            setResult(data)
        })
    }, [symbol]);

    return (
        <div>
            <StockChart symbol={symbol} />
            <Fundamentals result={result}/>
            <CompanyDetails result={result}/>
        </div>
    )
}

export default StockInformation;