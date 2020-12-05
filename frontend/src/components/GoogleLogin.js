import firebaseConfig from '../firebaseConfig';
import { Google } from './Icons';
import GoogleButton from '../styles/buttons/GoogleButton';

export default function GoogleLogin() {
    const googleProvider = new firebaseConfig.auth().GoogleAuthProvider()
    const signInWithGoogle = () => {
        firebaseConfig.auth.signInWithPopup(googleProvider)
        .then((res) => {
            console.log(res.user)
        }).catch((error) => {
            console.log(error.message)
        })
    }
    return (
        <form>
          <Google style={{position: 'absolute', margin: '26px'}} />
          <GoogleButton onClick={signInWithGoogle} type="submit" style={{paddingLeft: '36px'}}> LOGIN WITH GOOGLE</GoogleButton>
        </form>
    )
};