import Navigation from '../../components/Navigation'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import * as ROUTES from '../../constants/Routes'
import { AuthContext } from '../../components/Authentication'
import Watchlist from '../../components/Watchlist'

const PortfolioPage = () => {
    const { currentUser } = useContext(AuthContext)
        if (!currentUser) {
            return <Redirect to={ROUTES.LOGIN} />
        }
    return (
        <div style={{marginBottom: '100px'}}>
            <h2>PORTFOLIO</h2>
            <Watchlist />
            <Navigation />
        </div>
    );
};

export default PortfolioPage