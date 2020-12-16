import { useState } from 'react'
import firebaseConfig from '../firebaseConfig'
import FormField from '../styles/fields/FormField'
import LoginButton from '../styles/buttons/LoginButton'

const RegistrationForm = () => {
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordTwo: ''
  })
  const handleChange = (event) => {
    setCurrentUser({
      ...currentUser,
      [event.target.name]: event.target.value,
    })
  } 
  const handleSubmit = (event) => {
    event.preventDefault();    
    const { email, password } = event.target.elements;
    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value)  
      setCurrentUser(true)
    } catch (error) {
      alert(error)
    }
  }
  const isInvalid =
  currentUser.password !== currentUser.passwordTwo ||
  currentUser.password === '' ||
  currentUser.email === '' ||
  currentUser.name === ''
  return (
    <form onSubmit={handleSubmit}>
      <FormField type="text" name="name" placeholder="NAME" onChange={handleChange} />
      <FormField type="email" name="email" placeholder="EMAIL" onChange={handleChange} />
      <FormField type="password" name="password" placeholder="PASSWORD" onChange={handleChange} />
      <FormField type="password" name="passwordTwo" placeholder="CONFIRM PASSWORD" onChange={handleChange} />
      <LoginButton disabled={isInvalid} type="submit">REGISTER</LoginButton>
    </form>
  )
}
  
export default RegistrationForm