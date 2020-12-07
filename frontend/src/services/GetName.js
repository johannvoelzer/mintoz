import axios from 'axios';
import { useEffect, useState } from 'react';

const url = 'https://www.alphavantage.co/query'
const key = process.env.ALPHA_VANTAGE_API_KEY

const GetName = ({symbol}) => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        console.log(`${url}?function=OVERVIEW&symbol=${symbol}&apikey=${key}`, symbol, key)
        console.log(symbol)
        console.log(key)

        axios.get(`${url}?function=OVERVIEW&symbol=${symbol}&apikey=3BPULZRQJD4EFA1D`)  
            .then(({ data }) => {
            setResult(data)
        })
    }, [symbol]);

    return (
        <p>{JSON.stringify(result)}</p>
    )
}

export default GetName;