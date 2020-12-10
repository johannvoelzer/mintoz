import Navigation from '../../components/Navigation'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import * as ROUTES from '../../constants/Routes'
import { AuthContext } from '../../components/Authentication'
import Watchlist from '../../components/Watchlist'

const WatchlistPage = () => {
    const { currentUser } = useContext(AuthContext)
        if (!currentUser) {
            return <Redirect to={ROUTES.LOGIN} />
        }
    return (
        <div>
            <h2>WATCHLIST</h2>
            <Watchlist />
            <Navigation />
        </div>
    );
};

export default WatchlistPage