import Navigation from '../../components/Navigation'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import * as ROUTES from '../../constants/Routes'
import { AuthContext } from '../../components/Authentication'
import NewsList from '../../components/NewsList'
import Header from '../../components/Header'

const NewsPage = () => {
    const title = 'NEWS'
    const { currentUser } = useContext(AuthContext)
        if (!currentUser) {
            return <Redirect to={ROUTES.LOGIN} />
        }
    return (
        <div style={{marginBottom: '100px'}}>
            <Header title={title} />
            <NewsList />
            <Navigation />
        </div>
    );
};

export default NewsPage