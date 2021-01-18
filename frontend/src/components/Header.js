import firebaseConfig from '../firebaseConfig.js'
import { NavLink } from 'react-router-dom'
import * as ROUTES from '../constants/Routes'
import { StarIcon, LogoutIcon } from './Icons'
import ResponsiveHeadline, { HeaderLinkLeft, HeaderLinkRight, HeaderIconLeft, HeaderIconRight } from '../styles/text/ResponsiveHeadline'
import HeaderButton from '../styles/buttons/HeaderButton'

export default function Header({title}) {
    return (
        <ResponsiveHeadline>
            <HeaderButton>
                <NavLink to={ROUTES.CHAMPIONS} style={{textDecoration: 'none'}}>
                    <HeaderLinkLeft><StarIcon /> CHAMPIONS</HeaderLinkLeft>
                        <HeaderIconLeft>
                            <StarIcon />
                        </HeaderIconLeft>
                </NavLink>
            </HeaderButton>
            <h2 style={{margin: '2px', width: '200px'}}>{title}</h2>
            <HeaderButton onClick={() => firebaseConfig.auth().signOut()}>
                <HeaderLinkRight>LOGOUT</HeaderLinkRight>
                <HeaderIconRight><LogoutIcon /></HeaderIconRight>
            </HeaderButton>
        </ResponsiveHeadline>
    )
}