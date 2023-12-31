import React, { useState } from 'react'
import Button from '../components/Button'
import '../sass/components/form.scss'
import { useDispatch } from "react-redux"
import { setToken } from '../redux/slices/login'

function Form() {
  const [email, setEmail] = useState('')    // Email input
  const [password, setPassword] = useState('') // Password input
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()            // Redux dispatch function

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      if (response.status === 200) {
        const data = await response.json()
        // Dispatch token to Redux store
        dispatch(setToken(data.body.token))
      } else if (response.status === 400) {
        setErrorMessage('Your email or password is incorrect, please try again.')  // Set error message
      } else {
        setErrorMessage('An internal error occurred, please try again later.')
      }
    } catch (error) {
      console.error('API request failed:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete='true'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete='true'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <Button type="sign-in-button" content="Sign in" />
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
    </form>
  )
}

export default Form
