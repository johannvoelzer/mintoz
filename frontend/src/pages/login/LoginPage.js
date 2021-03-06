import { useContext } from 'react'
import { Redirect, Link } from 'react-router-dom'
import * as ROUTES from '../../constants/Routes'
import { AuthContext } from '../../components/Authentication'
import LoginForm from '../../components/EmailLogin'
import PasswordForget from '../../components/PasswordForget'
import GoogleLogin from '../../components/GoogleLogin'
import Logo from '../../styles/images/Logo'
import StartScreen from '../../styles/images/StartScreen'
import { Mintoz } from '../../components/Icons'
import MintozStartscreen from'../../assets/MintozStartscreen.png';
import { AuthenticationLink, LinkText } from '../../styles/text/AuthenticationLink'
import AuthenticationBox from '../../styles/boxes/AuthenticationBox'
import Note from '../../styles/text/Note'
import ResponsiveWrapper from '../../styles/wrapper/ResponsiveWrapper'

function LoginPage() {
    const { currentUser } = useContext(AuthContext)
        if (currentUser) {
            return <Redirect to={ROUTES.EXPLORE} />
        }
    return (
        <div>
            <Logo>
                <Mintoz />
            </Logo>
            <h2 style={{margin: '0 0 20px'}}>mintoz</h2>
            <ResponsiveWrapper>
                <StartScreen src={MintozStartscreen} alt='mintoz' />
                <div>
                    <AuthenticationBox>
                        <LoginForm />
                        <Note>Forgot your password?</Note>
                        <PasswordForget />
                    </AuthenticationBox>
                    <GoogleLogin />
                    <AuthenticationLink>
                        <p style={{margin: '0'}}>Don't have an account yet?</p>
                        <Link to={ROUTES.REGISTER} style={{textDecoration: 'none'}}>
                            <LinkText>REGISTER</LinkText>
                        </Link>
                    </AuthenticationLink>
                </div>
            </ResponsiveWrapper>
        </div>
    )
};
 
export default LoginPage