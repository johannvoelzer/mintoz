import { useContext, useState } from 'react';
import { AuthContext } from './Authentication';
import firebaseConfig from "../firebaseConfig.js";

export default function Bookmark(props) {
    const { currentUser } = useContext(AuthContext);
    console.log(props.symbol)
    console.log(props.name)
    console.log(currentUser.uid)

    const [state, setState] = useState('');

    const getStock = () => {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).on('value', snapshot => {
            const stockObject = snapshot.val();
     
            if (stockObject) {
                const stockList = Object.keys(stockObject).map(key => ({
                    ...stockObject[props.symbol],
                    uid: key,
                }));
                console.log(stockList[0].uid)
            }
        });
    };

    console.log(state)

    return (
        {state}
    )
}