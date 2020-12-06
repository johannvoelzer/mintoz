import { useContext } from 'react';
import { AuthContext } from './Authentication';
import { WatchlistIcon } from './Icons';

export default function Bookmark(props) {
    const { currentUser } = useContext(AuthContext);
    console.log(props.symbol)
    console.log(props.name)
    console.log(currentUser.uid)
    return (
        <div>
        <WatchlistIcon />
        </div>
    )
}