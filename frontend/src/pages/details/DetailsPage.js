import Navigation from '../../components/Navigation';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';
import { AuthContext } from '../../components/Authentication';

const DetailsPage = () => {
    const { currentUser } = useContext(AuthContext);
        if (!currentUser) {
            return <Redirect to={ROUTES.LOGIN} />;
        }
    return (
        <div>
            <h2>Details page</h2>
            <Navigation />
        </div>
    );
};

export default DetailsPage;