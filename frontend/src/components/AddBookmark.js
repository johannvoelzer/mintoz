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
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).once('value', snapshot => {
            const stockObject = snapshot.val()
            if (stockObject !== null) {
                setWatchlist(true)
            }
        })
    }, [currentUser.uid, props.symbol])

    function addToWatchlist() {
        axios.get(`https://financialmodelingprep.com/api/v3/profile/${props.symbol}?apikey=638d777cab0c32857e401d69e4a38e52`)  
        .then(response => {
            if (response && response.data) {
                const sector = response.data[0].sector
                firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).set({
                    symbol: props.symbol,
                    name: props.name,
                    sector: sector
                })
                firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).once('value', snapshot => {
                    const stockObject = snapshot.val()
                    if (stockObject !== null) {
                        setWatchlist(true)
                    }
                })
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
        firebaseConfig.database().ref('HotStocks/').child(props.symbol).set({
            symbol: props.symbol,
            name: props.name,
            counter: counter+1
        })
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