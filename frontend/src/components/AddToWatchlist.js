import { useContext, useState, useEffect } from 'react'
import { AuthContext } from './Authentication'
import firebaseConfig from '../firebaseConfig.js'
import ListButton from '../styles/buttons/ListButton'
import { AddSmall, TickIcon } from './Icons'

export default function BookmarkToggle(props) {
    const { currentUser } = useContext(AuthContext)

    const [watchlist, setWatchlist] = useState(false)

    useEffect(() => {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).on('value', snapshot => {
            const stockObject = snapshot.val();
            if (stockObject !== null) {
                setWatchlist(true)
            }
        })
    }, [currentUser.uid, props.symbol])

    function addToWatchlist() {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).set({
            symbol: props.symbol,
            name: props.name,
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