import Navigation from '../../components/Navigation'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import * as ROUTES from '../../constants/Routes'
import { AuthContext } from '../../components/Authentication'
import Watchlist from '../../components/Watchlist'
import Header from '../../components/Header'

const PortfolioPage = () => {
    const title = 'PORTFOLIO'
    const { currentUser } = useContext(AuthContext)
        if (!currentUser) {
            return <Redirect to={ROUTES.LOGIN} />
        }
    return (
        <div style={{marginBottom: '100px'}}>
            <Header title={title} />
            <Watchlist />
            <Navigation />
        </div>
    );
};

export default PortfolioPage