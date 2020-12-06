import axios from 'axios';
import { useEffect, useState } from 'react';

const url = 'https://www.alphavantage.co/query'
const key = process.env.ALPHA_VANTAGE_API_KEY

const GetName = (symbol) => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        axios.get(`${url}?function=OVERVIEW&symbol=IBM&apikey=${key}`)  
            .then(({ data }) => {
            setResult(data)
        })
    }, []);

    return (
        <p>{result.Name}</p>
    )
}

export default GetName;