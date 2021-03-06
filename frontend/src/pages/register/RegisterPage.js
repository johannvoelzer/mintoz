import { useContext } from 'react'
import { Redirect, Link } from 'react-router-dom'
import * as ROUTES from '../../constants/Routes'
import { AuthContext } from '../../components/Authentication'
import RegistrationForm from '../../components/Registration'
import Logo from '../../styles/images/Logo'
import StartScreen from '../../styles/images/StartScreen'
import { Mintoz } from '../../components/Icons'
import MintozStartscreen from'../../assets/MintozStartscreen.png';
import { AuthenticationLink, LinkText } from '../../styles/text/AuthenticationLink'
import AuthenticationBox from '../../styles/boxes/AuthenticationBox'
import ResponsiveWrapper from '../../styles/wrapper/ResponsiveWrapper'

function RegisterPage() {
    const { currentUser } = useContext(AuthContext)
        if (currentUser) {
            return <Redirect to={ROUTES.EXPLORE} />
        }
    return(
        <div>
            <Logo>
                <Mintoz />
            </Logo>
            <h2 style={{margin: '0 0 20px'}}>mintoz</h2>
            <ResponsiveWrapper>
                <StartScreen src={MintozStartscreen} alt='mintoz' />
                <div>
                    <AuthenticationBox>
                        <RegistrationForm />
                    </AuthenticationBox>
                    <AuthenticationLink>
                        <p style={{margin: '0'}}>Already have an account?</p>
                        <Link to={ROUTES.LOGIN} style={{textDecoration: 'none'}}>
                            <LinkText>LOGIN</LinkText>
                        </Link>
                    </AuthenticationLink>
                </div>
            </ResponsiveWrapper>
        </div>
    )
};

export default RegisterPage