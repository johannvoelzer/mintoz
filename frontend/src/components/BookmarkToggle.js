import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from './Authentication'
import firebaseConfig from "../firebaseConfig.js"
import BookmarkButton from '../styles/buttons/BookmarkButton'
import { AddIcon, RemoveIcon } from './Icons'

export default function BookmarkToggle(props) {
    const { currentUser } = useContext(AuthContext)

    const [watchlist, setWatchlist] = useState(false)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child('All').child(props.symbol).once('value', snapshot => {
            const stockObject = snapshot.val()
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
            }
        })
    }, [currentUser.uid, props.symbol])

    function addStock() {
        axios.get(`https://financialmodelingprep.com/api/v3/profile/${props.symbol}?apikey=...`)  
        .then(response => {
            if (response && response.data) {
                const sector = response.data[0].sector
                const price = response.data[0].price
                firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child('All').child(props.symbol).set({
                    symbol: props.symbol,
                    name: props.name,
                    price: price
                })
                firebaseConfig.database().ref('Watchlist/' + currentUser.uid + '/' + sector).child(props.symbol).set({
                    symbol: props.symbol,
                    name: props.name
                })
                setWatchlist(true)
            }
        })
        firebaseConfig.database().ref('HotStocks/').child(props.symbol).set({
            symbol: props.symbol,
            name: props.name,
            counter: counter+1
        })
        setCounter(counter+1)
    }
  
    function removeStock() {
        axios.get(`https://financialmodelingprep.com/api/v3/profile/${props.symbol}?apikey=...`)  
        .then(response => {
            if (response && response.data) {
                const sector = response.data[0].sector
                firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child('All').child(props.symbol).remove()
                firebaseConfig.database().ref('Watchlist/' + currentUser.uid + '/' + sector).child(props.symbol).remove()
                setWatchlist(false)
            }
        })
        firebaseConfig.database().ref('HotStocks/').child(props.symbol).set({
            symbol: props.symbol,
            name: props.name,
            counter: counter-1
        })
        setCounter(counter-1)
    }

    return (
        <BookmarkButton>
            {
                watchlist === false ? <AddIcon onClick={addStock} /> :
                <RemoveIcon onClick={removeStock} />
            }
        </BookmarkButton>
    )
}