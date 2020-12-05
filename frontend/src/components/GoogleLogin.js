import { Google } from './Icons';
import GoogleButton from '../styles/buttons/GoogleButton';

export default function GoogleLogin() {
    return (
        <form>
          <Google style={{position: 'absolute', margin: '28px'}} />
          <GoogleButton type="submit" style={{paddingLeft: '36px'}}> LOGIN WITH GOOGLE</GoogleButton>
        </form>
    )
};