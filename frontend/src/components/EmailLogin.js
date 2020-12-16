import { useState } from 'react'
import firebaseConfig from '../firebaseConfig'
import FormField from '../styles/fields/FormField'
import LoginButton from '../styles/buttons/LoginButton'

const LoginForm = () => {
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
    try {
      firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value)
    } catch (error) {
      alert(error)
    }
  }
  const isInvalid =
  currentUser.password === '' ||
  currentUser.email === ''
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormField type="email" name="email" placeholder="EMAIL" onChange={handleChange} />
        <FormField type="password" name="password" placeholder="PASSWORD" onChange={handleChange} />
        <LoginButton disabled={isInvalid} type="submit">LOGIN</LoginButton>
      </form>
    </div>
  )
}
  
export default LoginForm;