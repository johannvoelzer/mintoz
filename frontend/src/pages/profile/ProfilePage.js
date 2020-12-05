import Navigation from '../../components/Navigation';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';
import firebaseConfig from '../../firebaseConfig.js';
import { AuthContext } from '../../components/Authentication';
import LogoutButton from '../../styles/buttons/LogoutButton';

const ProfilePage = () => {
    const { currentUser } = useContext(AuthContext);
        if (!currentUser) {
            return <Redirect to={ROUTES.LOGIN} />;
        }
    return (
        <div>
        <h1>Welcome</h1>
        <p>This is the dashboard, if you can see this you're logged in.</p>
        <LogoutButton onClick={() => firebaseConfig.auth().signOut()}>LOGOUT</LogoutButton>
        <Navigation />
        </div>
    );
};

export default ProfilePage;