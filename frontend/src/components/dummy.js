import Navigation from '../../components/Navigation';
import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';
import { AuthContext } from '../../components/Authentication';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DetailsHeader from '../../styles/details/DetailsHeader';
import BackButton from '../../components/BackButton';

const url = 'https://www.alphavantage.co/query'
const key = process.env.ALPHA_VANTAGE_API_KEY

const DetailsPage = () => {
    const [results, setResults] = useState([]);

    const {stockSymbol} = useParams();
    const symbol = stockSymbol;

    axios.get(`${url}?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${key}`)  
            .then(({ data }) => {
            setResults(data.bestMatches)
        })
    
        const detailsName = results.map(result => (
                    <p>{result['1. name']}</p>
        ))

    const { currentUser } = useContext(AuthContext);
        if (!currentUser) {
            return <Redirect to={ROUTES.LOGIN} />;
        }
    return (
        <div>
            <DetailsHeader>
                <BackButton />
                <h2 style={{margin: '0'}}>{symbol}</h2>
                <p>hi</p>
            </DetailsHeader>
            {detailsName}
            <Navigation />
        </div>
    );
};

export default DetailsPage;