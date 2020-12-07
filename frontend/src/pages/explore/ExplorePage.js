import Navigation from '../../components/Navigation';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';
import { AuthContext } from '../../components/Authentication';
import Search from '../../components/Search';

const ExplorePage = () => {
    const { currentUser } = useContext(AuthContext);
        if (!currentUser) {
            return <Redirect to={ROUTES.LOGIN} />;
        }
    return (
        <div>
            <h2>EXPLORE</h2>
            <Search />
            <Navigation />
        </div>
    );
};

export default ExplorePage;