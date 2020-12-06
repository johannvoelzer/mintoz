import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';
import { AuthContext } from '../../components/Authentication';
import RegisterForm from '../../components/RegisterForm';
import LoginLink from '../../components/LoginLink';
import Logo from '../../styles/images/Logo';
import { Mintoz } from '../../components/Icons';
import AuthenticationBox from '../../styles/boxes/AuthenticationBox';

function RegisterPage() {
    const { currentUser } = useContext(AuthContext);
        if (currentUser) {
            return <Redirect to={ROUTES.EXPLORE} />;
        }
    return(
        <div>
            <h2>REGISTER</h2>
            <Logo>
                <Mintoz />
            </Logo>
            <AuthenticationBox>
                <RegisterForm />
            </AuthenticationBox>
            <LoginLink />
        </div>
    )
};

export default RegisterPage;