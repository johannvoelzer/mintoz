import { useContext, useState, useEffect } from 'react';
import { AuthContext } from './Authentication';
import firebaseConfig from "../firebaseConfig.js";
import { NavLink } from 'react-router-dom';

export default function Watchlist() {
    const { currentUser } = useContext(AuthContext);
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).on('value', snapshot => {
            const stockObject = snapshot.val();
            const stockList = Object.keys(stockObject).map(key => ({
                ...stockObject[key],
                uid: key,
            }));
            setWatchlist(stockList);
        });
    }, [currentUser.uid]);

    const watchlistOverview = watchlist.map(result => (
        <li key={JSON.stringify(result.symbol)}>
            <NavLink to={"/details/"+result.symbol+"/"+result.name}>
                <p>{result.symbol}</p>
                <h3>{result.name}</h3>
            </NavLink>
        </li>
    ))

    return (
        <ul>{watchlistOverview}</ul>
    )
}