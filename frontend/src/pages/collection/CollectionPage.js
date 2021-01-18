import Navigation from '../../components/Navigation'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import * as ROUTES from '../../constants/Routes'
import { AuthContext } from '../../components/Authentication'
import Header from '../../components/Header'
import CollectionGroups from '../../components/CollectionGroups'

const CollectionPage = () => {
    const title = 'COLLECTIONS'
    const { currentUser } = useContext(AuthContext)
        if (!currentUser) {
            return <Redirect to={ROUTES.LOGIN} />
        }
    return (
        <div style={{marginBottom: '100px'}}>
            <Header title={title} />
            <CollectionGroups />
            <Navigation />
        </div>
    )
}

export default CollectionPage