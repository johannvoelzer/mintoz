import { useContext, useState } from 'react';
import { AuthContext } from './Authentication';
import firebaseConfig from "../firebaseConfig.js";
import { NavLink } from 'react-router-dom';

export default function Watchlist() {
    const { currentUser } = useContext(AuthContext);

    const watchResults = firebaseConfig.database().ref('Watchlist/' + currentUser.uid).on('value', snapshot => {
        const stockObject = snapshot.val();
        stockObject.forEach(result => 
        <li key={result.symbol}>  
            <p>{result.name}</p>
            <p>{result.symbol}</p>
        </li> 
        )
    })

    return (
        <ul>{watchResults}</ul>
    )
}