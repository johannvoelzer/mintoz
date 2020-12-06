import { useContext, useState, useEffect } from 'react';
import { AuthContext } from './Authentication';
import firebaseConfig from "../firebaseConfig.js";

export default function Bookmark(props) {
    const { currentUser } = useContext(AuthContext);

    const [state, setState] = useState(true);

    useEffect(() => {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).on('value', snapshot => {
            const stockObject = snapshot.val();
            if (stockObject === null) {
                setState(false)
            }
        })
    });

    function addStock() {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).push({
            symbol: props.symbol,
            name: props.name,
        });
        setState(true)
    }
  
    function removeStock() {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).remove();
        setState(false)
    };

    return (
        <div>
            {
                state === false ? <button onClick={addStock}>ADD</button> :
                <button onClick={removeStock}>REMOVE</button>
            }
        </div>
    )
}