import { useContext, useState, useEffect } from 'react'
import { AuthContext } from './Authentication'
import firebaseConfig from "../firebaseConfig.js"
import BookmarkButton from '../styles/buttons/BookmarkButton'
import { AddBookmark, RemoveBookmark } from './Icons'

export default function Bookmark(props) {
    const { currentUser } = useContext(AuthContext)

    const [state, setState] = useState(false)

    useEffect(() => {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).on('value', snapshot => {
            const stockObject = snapshot.val();
            if (stockObject !== null) {
                setState(true)
            }
        })
    }, [currentUser.uid, props.symbol])

    function addStock() {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).set({
            symbol: props.symbol,
            name: props.name,
        })
        setState(true)
    }
  
    function removeStock() {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).remove()
        setState(false)
    }

    return (
        <BookmarkButton>
            {
                state === false ? <AddBookmark onClick={addStock} /> :
                <RemoveBookmark onClick={removeStock} />
            }
        </BookmarkButton>
    )
}