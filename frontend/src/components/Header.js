import firebaseConfig from '../firebaseConfig.js'
import { DarkIcon, LogoutIcon } from './Icons'
import ResponsiveHeadline from '../styles/text/ResponsiveHeadline'
import HeaderButton from '../styles/buttons/HeaderButton'


export default function Header({title}) {
    return (
        <ResponsiveHeadline>
            <HeaderButton>
                <DarkIcon />
            </HeaderButton>
            <h2 style={{margin: '0'}}>{title}</h2>
            <HeaderButton onClick={() => firebaseConfig.auth().signOut()}>
                <LogoutIcon />
            </HeaderButton>
        </ResponsiveHeadline>
    )
}