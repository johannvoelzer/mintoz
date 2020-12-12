import { useContext, useState, useEffect } from 'react'
import { AuthContext } from './Authentication'
import firebaseConfig from "../firebaseConfig.js"
import BookmarkButton from '../styles/buttons/BookmarkButton'
import { AddIcon, RemoveIcon } from './Icons'

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

    function addStock() {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).set({
            symbol: props.symbol,
            name: props.name,
        })
    }
  
    function removeStock() {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).remove()
        setWatchlist(false)
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