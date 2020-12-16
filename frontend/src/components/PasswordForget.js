import { useState } from 'react'
import firebaseConfig from '../firebaseConfig'
import PasswordField from '../styles/fields/PasswordField'
import PasswordButton from '../styles/buttons/PasswordButton'

const PasswordForget = () => {
  const [currentUser, setCurrentUser] = useState({email: ''})

  const handleChange = (event) => {
    setCurrentUser({
      ...currentUser,
      [event.target.name]: event.target.value,
    })
  } 
  const handleSubmit = (event) => {
    event.preventDefault()
    const { email } = event.target.elements
    try {
      firebaseConfig.auth().sendPasswordResetEmail(email.value)
    } catch (error) {
      alert(error)
    }
  }
  const isInvalid =
  currentUser.email === ''
  return (
    <form onSubmit={handleSubmit}>
      <PasswordField type="email" name="email" placeholder="EMAIL" onChange={handleChange} />
      <PasswordButton disabled={isInvalid} type="submit">RESET</PasswordButton>
    </form>
  )
}
  
export default PasswordForget