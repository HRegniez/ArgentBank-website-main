import React, { useState } from 'react'
import Button from './Button'
import '../sass/components/UserHeader.scss'
import { useSelector, useDispatch } from 'react-redux'
import { userData, newUserName } from '../redux/slices/userData'
import { selectToken } from '../redux/slices/login'
import '../sass/components/form.scss'

function UserHeader() {
  const token = useSelector(selectToken)       // Token from Redux
  const data = useSelector(userData)            // User data from Redux
  const [display, setDisplay] = useState(true) 
  const [userName, setUserName] = useState('')  
  const dispatch = useDispatch()               // Redux dispatch function

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,   // Token for API
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName,
        }),
      })

      if (response.status === 200) {
        const data = await response.json()
        // Dispatch userName to Redux store
        dispatch(newUserName(userName))
        setDisplay(!display) // Toggle back to welcome component
      } else if (response.status === 400) {
        console.error('Invalid Fields')
      } else {
        console.error('Internal Server Error')
      }
    } catch (error) {
      console.error('API request failed:', error)
    }
  }

  return (
    <div className="header">
      {
        display ? 
          <div>
            <h1>Welcome back<br />{`${data.firstName} ${data.lastName} !`}</h1>
            <a onClick={() => setDisplay(!display)}>
              <Button type="edit-button" content="Edit Name"/>
            </a>
          </div> 
        : 
          <div>
            <h1>Edit user info</h1>
            <form onSubmit={handleSubmit}>
              <div className='input'>
                <label htmlFor="username">User name:</label>
                <input 
                  type="text" 
                  id="username" 
                  defaultValue={userName === '' ? data.userName : userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className='input'>
                <label htmlFor="firstName">First name:</label>
                <input 
                  type="text" 
                  id="FirstName" 
                  defaultValue={data.firstName}
                  disabled={true}
                />
              </div>
              <div className='input'>
                <label htmlFor="lastName">Last name:</label>
                <input 
                  type="text" 
                  id="lastName" 
                  defaultValue={data.lastName}
                  disabled={true}
                />
              </div>
              <div>
                <Button type="edit-info-button" content="Save"/>
                <a onClick={() => setDisplay(!display)}>
                  <Button type="edit-info-button" content="Cancel"/>
                </a>
              </div>
            </form>
          </div> 
      }
    </div>
  )
}

export default UserHeader
