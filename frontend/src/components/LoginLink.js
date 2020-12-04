import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/Routes';
import AuthenticationLink from '../styles/text/AuthenticationLink';
import LinkText from '../styles/text/LinkText';

export default function LoginLink() {
    return (
    <AuthenticationLink>
        <p style={{margin: '0'}}>Already have an account?</p>
        <Link to={ROUTES.LOGIN} style={{textDecoration: 'none'}}>
            <LinkText>LOGIN</LinkText>
        </Link>
    </AuthenticationLink>
    )
};