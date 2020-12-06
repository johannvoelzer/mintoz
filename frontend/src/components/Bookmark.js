import { useContext, useState } from 'react';
import { AuthContext } from './Authentication';
import firebaseConfig from "../firebaseConfig.js";
import { WatchlistIcon } from './Icons';

export default function Bookmark(props) {
    const { currentUser } = useContext(AuthContext);
    console.log(props.symbol)
    console.log(props.name)
    console.log(currentUser.uid)

const [state, setState] = useState({
    symbol: '',
    loading: false,
    stocks: [],})

    const addStock = () => {
        const stocksRef = firebaseConfig.database().ref('Watchlist/' + currentUser.uid);
        const stock = {
            symbol: props.symbol,
            name: props.name,
        };
        stocksRef.push(stock);
    };

    const removeStock = () => {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).on('value', snapshot => {
            const stockObject = snapshot.val();
     
            if (stockObject) {
              const stockList = Object.keys(stockObject).map(key => ({
                ...stockObject[key],
                uid: key,
              }));
      
              setState({ stocks: stockList, loading: false });
              console.log(state)
            } else {
              setState({ stocks: null, loading: false });
              console.log(state)
            }
          });
    };

    console.log(state)

    return (
        <div>
        <WatchlistIcon />
        <button onClick={addStock}>ADD</button>
        <button onClick={removeStock}>REMOVE</button>
        </div>
    )
}