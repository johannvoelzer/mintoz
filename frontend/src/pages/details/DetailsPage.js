import Navigation from '../../components/Navigation';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DetailsHeader from '../../styles/details/DetailsHeader';
import BackButton from '../../components/BackButton';

const url = 'https://www.alphavantage.co/query'
const key = process.env.ALPHA_VANTAGE_API_KEY

const DetailsPage = () => {
    const {stockSymbol} = useParams();

    const [results, setResults] = useState({});

    function handleClick(event) {
            event.preventDefault();  
            axios.get(`${url}?function=OVERVIEW&symbol=IBM&apikey=${key}`)  
                .then(({ data }) => {
                setResults(data)
            })
    }


    return (
        <div>
            <DetailsHeader>
                <BackButton />
                <button onClick={handleClick}>Hallo</button>
                <h2 style={{margin: '0'}}>{stockSymbol}</h2>
                <p>hi</p>
            </DetailsHeader>
            {results.Name}
            <Navigation />
        </div>
    );
};

export default DetailsPage;