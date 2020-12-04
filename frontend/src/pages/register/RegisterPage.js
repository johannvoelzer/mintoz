import RegisterForm from '../../components/RegisterForm';
import LoginLink from '../../components/LoginLink';
import Logo from '../../styles/images/Logo';
import { Mintoz } from '../../components/Icons';
import AuthenticationBox from '../../styles/boxes/AuthenticationBox';

function RegisterPage() {
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