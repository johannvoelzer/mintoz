import Navigation from '../../components/Navigation'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import * as ROUTES from '../../constants/Routes'
import { AuthContext } from '../../components/Authentication'
import Calendar from '../../components/Calendar'

const EventsPage = () => {
    const { currentUser } = useContext(AuthContext)
        if (!currentUser) {
            return <Redirect to={ROUTES.LOGIN} />
        }
    return (
        <div style={{marginBottom: '100px'}}>
            <h2>EVENTS</h2>
            <Calendar />
            <Navigation />
        </div>
    );
};

export default EventsPage