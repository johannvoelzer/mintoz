import Navigation from '../../components/Navigation'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import * as ROUTES from '../../constants/Routes'
import { AuthContext } from '../../components/Authentication'
import Search from '../../components/Search'
import HotStocks from '../../components/HotStocks'
import Header from '../../components/Header'

const ExplorePage = () => {
    const title = 'EXPLORE'
    const { currentUser } = useContext(AuthContext)
        if (!currentUser) {
            return <Redirect to={ROUTES.LOGIN} />
        }
    return (
        <div style={{marginBottom: '100px'}}>
            <Header title={title} />
            <Search />
            <Navigation />
            <HotStocks />
        </div>
    )
}

export default ExplorePage