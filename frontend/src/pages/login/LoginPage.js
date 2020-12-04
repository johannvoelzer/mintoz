import EmailLogin from '../../components/EmailLogin';
import PasswordForget from '../../components/PasswordForget';
import GoogleLogin from '../../components/GoogleLogin';
import RegisterLink from '../../components/RegisterLink';
import Logo from '../../styles/images/Logo';
import { Mintoz } from '../../components/Icons';
import AuthenticationBox from '../../styles/boxes/AuthenticationBox';
import Note from '../../styles/text/Note';

function LoginPage() {
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