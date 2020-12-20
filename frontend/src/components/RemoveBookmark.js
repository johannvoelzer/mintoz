import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from './Authentication'
import firebaseConfig from '../firebaseConfig.js'
import ListButton from '../styles/buttons/ListButton'
import { AddSmall, RemoveSmall } from './Icons'

export default function RemoveBookmark(props) {
    const { currentUser } = useContext(AuthContext)
    const [watchlist, setWatchlist] = useState(false)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child('All').child(props.symbol).once('value', snapshot => {
            const stockObject = snapshot.val();
            if (stockObject !== null) {
                setWatchlist(true)
            } else {
                setWatchlist(false)
            }
        })
        firebaseConfig.database().ref('HotStocks/').child(props.symbol).once('value', snapshot => {
            const stockObject = snapshot.val()
            if (stockObject.counter) {
                setCounter(stockObject.counter)
            }
        })
    }, [currentUser.uid, props.symbol])

    function addStock() {
        axios.get(`https://financialmodelingprep.com/api/v3/profile/${props.symbol}?apikey=***`)  
        .then(response => {
            if (response && response.data) {
                const sector = response.data[0].sector
                firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child('All').child(props.symbol).set({
                    symbol: props.symbol,
                    name: props.name,
                })
                firebaseConfig.database().ref('Watchlist/' + currentUser.uid + '/' + sector).child(props.symbol).set({
                    symbol: props.symbol,
                    name: props.name
                })
                setWatchlist(true)
                firebaseConfig.database().ref('HotStocks/').child(props.symbol).set({
                    symbol: props.symbol,
                    name: props.name,
                    counter: counter+1
                })
                setCounter(counter+1)
            }
        })
    }
  
    function removeStock() {
        axios.get(`https://financialmodelingprep.com/api/v3/profile/${props.symbol}?apikey=***`)  
        .then(response => {
            if (response && response.data) {
                const sector = response.data[0].sector
                firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child('All').child(props.symbol).remove()
                firebaseConfig.database().ref('Watchlist/' + currentUser.uid + '/' + sector).child(props.symbol).remove()
                setWatchlist(false)
                firebaseConfig.database().ref('HotStocks/').child(props.symbol).set({
                    symbol: props.symbol,
                    name: props.name,
                    counter: counter-1
                })
                setCounter(counter-1)
            }
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