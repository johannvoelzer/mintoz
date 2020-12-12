import { useContext, useState, useEffect } from 'react'
import { AuthContext } from './Authentication'
import firebaseConfig from '../firebaseConfig.js'
import ListButton from '../styles/buttons/ListButton'
import { AddSmall, TickIcon } from './Icons'

export default function BookmarkToggle(props) {
    const { currentUser } = useContext(AuthContext)

    const [watchlist, setWatchlist] = useState(false)
    const [counter, setCounter] = useState(false)

    useEffect(() => {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).on('value', snapshot => {
            const stockObject = snapshot.val()
            if (stockObject !== null) {
                setWatchlist(true)
            }
        })
        firebaseConfig.database().ref('HotStocks/').child(props.symbol).on('value', snapshot => {
            const stockObject = snapshot.val()
            if (stockObject !== null) {
                setCounter(stockObject.counter)
            } else {
                setCounter(0)
            }
        })
    }, [currentUser.uid, props.symbol, counter])

    function addToWatchlist() {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).set({
            symbol: props.symbol,
            name: props.name,
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