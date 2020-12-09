import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';
import { AuthContext } from '../../components/Authentication';
import EmailLogin from '../../components/EmailLogin';
import PasswordForget from '../../components/PasswordForget';
import GoogleLogin from '../../components/GoogleLogin';
import RegisterLink from '../../components/RegisterLink';
import Logo from '../../styles/images/Logo';
import { Mintoz } from '../../components/Icons';
import AuthenticationBox from '../../styles/boxes/AuthenticationBox';
import Note from '../../styles/text/Note';

function LoginPage() {
    const { currentUser } = useContext(AuthContext);
        if (currentUser) {
            return <Redirect to={ROUTES.EXPLORE} />;
        }
    return (
        <div>
            <h2>LOGIN</h2>
            <Logo>
            <Mintoz />
            </Logo>
            <AuthenticationBox>
            <EmailLogin />
            <Note>Forgot your password?</Note>
            <PasswordForget />
            </AuthenticationBox>
            <GoogleLogin />
            <RegisterLink />
        </div>
    )
};
 
export default LoginPage;