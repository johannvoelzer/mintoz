import Navigation from '../../components/Navigation'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import * as ROUTES from '../../constants/Routes'
import { AuthContext } from '../../components/Authentication'
import MarketOverview from '../../components/MarketOverview'
import Header from '../../components/Header'

const MarketPage = () => {
    const title = 'MARKET'
    const { currentUser } = useContext(AuthContext)
        if (!currentUser) {
            return <Redirect to={ROUTES.LOGIN} />
        }
    return (
        <div>
            <Header title={title} />
            <MarketOverview />
            <Navigation />
        </div>
    );
};

export default MarketPage