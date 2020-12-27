import { useState } from 'react'
import firebaseConfig from '../firebaseConfig'
import PasswordField from '../styles/fields/PasswordField'
import PasswordButton from '../styles/buttons/PasswordButton'

const PasswordForget = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState(false)
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
    firebaseConfig.auth().sendPasswordResetEmail(email.value)
    .then(function() {
      setErrorMessage('')
      setSuccessMessage('A reset link has been sent to you.')
    })
    .catch(error => {
      setErrorMessage(error.message)
      setSuccessMessage('')
    })
  }
  const isInvalid =
  currentUser.email === ''
  return (
    <form onSubmit={handleSubmit}>
      <PasswordField type="email" name="email" placeholder="EMAIL" onChange={handleChange} />
      <PasswordButton disabled={isInvalid} type="submit">RESET</PasswordButton>
      {errorMessage !== '' ? <p style={{margin: '0 20px 20px', fontSize: '14px', color: 'var(--red-main)'}}>{errorMessage}</p> : <div />}
      {successMessage !== '' ? <p style={{margin: '0 20px 20px', fontSize: '14px', color: 'var(--green-main)'}}>{successMessage}</p> : <div />}
    </form>
  )
}
  
export default PasswordForget