import { useState } from 'react';
import firebaseConfig from '../firebaseConfig';

import FormInput from '../styles/inputs/FormInput';
import LoginButton from '../styles/buttons/LoginButton';

const RegisterForm = () => {
    const [currentUser, setCurrentUser] = useState({
        name: '',
        email: '',
        password: '',
        passwordTwo: ''
    });   
    const handleChange = (event) => {
        setCurrentUser({
            ...currentUser,
            [event.target.name]: event.target.value,
          });
    } 
    const handleSubmit = (event) => {
      event.preventDefault();    
      const { email, password } = event.target.elements;
      try {
        firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);      
        setCurrentUser(true);
      } catch (error) {
        alert(error);
      }
    };
    const isInvalid =
    currentUser.password !== currentUser.passwordTwo ||
    currentUser.password === '' ||
    currentUser.email === '' ||
    currentUser.name === '';

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormInput type="text" name="name" placeholder="NAME" onChange={handleChange} />
                <FormInput type="email" name="email" placeholder="EMAIL" onChange={handleChange} />
                <FormInput type="password" name="password" placeholder="PASSWORD" onChange={handleChange} />
                <FormInput type="password" name="passwordTwo" placeholder="CONFIRM PASSWORD" onChange={handleChange} />
                <LoginButton disabled={isInvalid} type="submit">REGISTER</LoginButton>
            </form>
        </div>
    );
  };
  
  export default RegisterForm;