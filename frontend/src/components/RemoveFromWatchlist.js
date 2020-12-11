import { useContext } from 'react'
import { AuthContext } from './Authentication'
import firebaseConfig from '../firebaseConfig.js'
import ListButton from '../styles/buttons/ListButton'
import { RemoveSmall } from './Icons'

export default function RemoveFromWatchlist(props) {
    const { currentUser } = useContext(AuthContext)
  
    function removeFromWatchlist() {
        firebaseConfig.database().ref('Watchlist/' + currentUser.uid).child(props.symbol).remove()
    }

    return (
        <ListButton>
            <RemoveSmall onClick={removeFromWatchlist} />
        </ListButton>
    )
}