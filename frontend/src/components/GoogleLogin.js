import firebase from 'firebase/app'
import { Google } from './Icons'
import GoogleButton from '../styles/buttons/GoogleButton'

export default function GoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    const signInWithGoogle = (event) => {
        event.preventDefault()
        firebase.auth().signInWithPopup(provider)
    }
    return (
        <form>
          <Google style={{position: 'absolute', margin: '26px', opacity: '80%'}} />
          <GoogleButton onClick={signInWithGoogle} type="submit" style={{paddingLeft: '36px'}}> LOGIN WITH GOOGLE</GoogleButton>
        </form>
    )
}