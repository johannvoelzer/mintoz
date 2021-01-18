import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from './Authentication'
import firebaseConfig from '../firebaseConfig.js'
import ListButton from '../styles/buttons/ListButton'
import { AddSmall, TickIcon } from './Icons'

export default function AddBookmark(props) {
    const { currentUser } = useContext(AuthContext)

    const [watchlist, setWatchlist] = useState(false)
    const [counter, setCounter] = useState(false)

    useEffect(() => {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child('All').child(props.symbol).once('value', snapshot => {
            const stockObject = snapshot.val()
            if (stockObject !== null) {
                setWatchlist(true)
            }
        })
        firebaseConfig.database().ref('HotStocks/').child(props.symbol).once('value', snapshot => {
            const stockObject = snapshot.val()
            if (stockObject !== null) {
                setCounter(stockObject.counter)
            }
        })
    }, [currentUser.uid, props.symbol])

    function addToWatchlist() {
        axios.get(`https://financialmodelingprep.com/api/v3/profile/${props.symbol}?apikey=...`)  
        .then(response => {
            if (response && response.data) {
                const sector = response.data[0].sector
                const price = response.data[0].price
                firebaseConfig.database().ref('Watchlist/' + currentUser.uid + '/' + sector).child(props.symbol).set({
                    symbol: props.symbol,
                    name: props.name
                })
                firebaseConfig.database().ref('Watchlist/' + currentUser.uid ).child('All').child(props.symbol).set({
                    symbol: props.symbol,
                    name: props.name,
                    price: price
                })
                firebaseConfig.database().ref('Watchlist/' + currentUser.uid + '/' + sector).child(props.symbol).once('value', snapshot => {
                    const stockObject = snapshot.val()
                    if (stockObject !== null) {
                        setWatchlist(true)
                    }
                })
            }
        })
        firebaseConfig.database().ref('HotStocks/').child(props.symbol).set({
            symbol: props.symbol,
            name: props.name,
            counter: counter+1
        })
        setCounter(counter+1)
    }

    return (
        <ListButton>
            {
                watchlist === false ? <AddSmall onClick={addToWatchlist} /> :
                <TickIcon />
            }
        </ListButton>
    )
}