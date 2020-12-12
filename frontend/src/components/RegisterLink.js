import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/Routes'
import AuthenticationLink from '../styles/text/AuthenticationLink'
import LinkText from '../styles/text/LinkText'

export default function RegisterLink() {
    return (
        <AuthenticationLink>
            <p style={{margin: '0'}}>Don't have an account yet?</p>
            <Link to={ROUTES.REGISTER} style={{textDecoration: 'none'}}>
                <LinkText>REGISTER</LinkText>
            </Link>
        </AuthenticationLink>
    )
}