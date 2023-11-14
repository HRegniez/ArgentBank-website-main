import React from 'react'
import UserHeader from '../components/UserHeader'
import UserAccount from '../components/UserAccount'

function User() {

  return (
    <main className="main bg-dark">
      <UserHeader/>
      <h2 className="sr-only">Accounts</h2>
      
        <UserAccount 
          title="Argent Bank Checking (x8349)" 
          ammount="$2,082.79" 
          description="Available Balance" />
        <UserAccount 
          title="Argent Bank Savings (x6712)" 
          ammount="$10,928.42" 
          description="Available Balance" />
        <UserAccount 
          title="Argent Bank Credit Card (x8349)" 
          ammount="$184.30" 
          description="Current Balance" />
      
    </main>
  )
}

export default User
