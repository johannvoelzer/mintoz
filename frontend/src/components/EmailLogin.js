import { useState } from 'react'
import firebaseConfig from '../firebaseConfig'
import FormField from '../styles/fields/FormField'
import LoginButton from '../styles/buttons/LoginButton'

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [currentUser, setCurrentUser] = useState({
    email: '',
    password: ''
  })
  const handleChange = (event) => {
    setCurrentUser({
      ...currentUser,
      [event.target.name]: event.target.value,
    })
  } 
  const handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = event.target.elements
    firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value)
    .catch(error => {
      setErrorMessage(error.message)
    })
  }
  const isInvalid =
  currentUser.password === '' ||
  currentUser.email === ''
  return (
    <form onSubmit={handleSubmit}>
      <FormField type="email" name="email" placeholder="EMAIL" onChange={handleChange} />
      <FormField type="password" name="password" placeholder="PASSWORD" onChange={handleChange} />
      <LoginButton disabled={isInvalid} type="submit">LOGIN</LoginButton>
      {errorMessage !== '' ? <p style={{margin: '0 20px 10px', fontSize: '14px', color: 'var(--red-main)'}}>{errorMessage}</p> : <div />}
    </form>
  )
}
  
export default LoginForm;