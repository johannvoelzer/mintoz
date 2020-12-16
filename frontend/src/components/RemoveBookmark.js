import { useContext, useState, useEffect } from 'react'
import { AuthContext } from './Authentication'
import firebaseConfig from '../firebaseConfig.js'
import ListButton from '../styles/buttons/ListButton'
import { AddSmall, RemoveSmall } from './Icons'

export default function RemoveBookmark(props) {
    const { currentUser } = useContext(AuthContext)
    const [watchlist, setWatchlist] = useState(false)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).once('value', snapshot => {
            const stockObject = snapshot.val();
            if (stockObject !== null) {
                setWatchlist(true)
            } else {
                setWatchlist(false)
            }
        })
        firebaseConfig.database().ref('HotStocks/').child(props.symbol).once('value', snapshot => {
            const stockObject = snapshot.val()
            if (stockObject !== null) {
                setCounter(stockObject.counter)
            } else {
                setCounter(0)
            }
        })
    }, [currentUser.uid, props.symbol, counter])

    function addStock() {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).set({
            symbol: props.symbol,
            name: props.name,
        })
        setWatchlist(true)
        firebaseConfig.database().ref('HotStocks/').child(props.symbol).set({
            symbol: props.symbol,
            name: props.name,
            counter: counter+1
        })
    }
  
    function removeStock() {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).remove()
        setWatchlist(false)
        firebaseConfig.database().ref('HotStocks/').child(props.symbol).set({
            symbol: props.symbol,
            name: props.name,
            counter: counter-1
        })
    }

    return (
        <ListButton>
            {
                watchlist === false ? <AddSmall onClick={addStock} /> :
                <RemoveSmall onClick={removeStock} />
            }
        </ListButton>
    )
}