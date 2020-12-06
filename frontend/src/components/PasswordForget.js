import { useState } from 'react';
import firebaseConfig from '../firebaseConfig';
import PasswordForgetInput from '../styles/inputs/PasswordForgetInput';
import PasswordForgetButton from '../styles/buttons/PasswordForgetButton';

const PasswordForget = () => {
    const [currentUser, setCurrentUser] = useState({
        email: ''
    });   
    const handleChange = (event) => {
        setCurrentUser({
            ...currentUser,
            [event.target.name]: event.target.value,
          });
    } 
    const handleSubmit = (event) => {
      event.preventDefault();
    const { email } = event.target.elements;
    try {
      firebaseConfig.auth().sendPasswordResetEmail(email.value);
    } catch (error) {
      alert(error);
    }
    };
    const isInvalid =
    currentUser.email === '';
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <PasswordForgetInput type="email" name="email" placeholder="EMAIL" onChange={handleChange} />
                <PasswordForgetButton disabled={isInvalid} type="submit">RESET</PasswordForgetButton>
            </form>
        </div>
    );
  };
  
  export default PasswordForget;