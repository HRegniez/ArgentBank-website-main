import React from 'react'
import Button from './Button'
import '../sass/components/userAccount.scss'
import '../sass/components/button.scss'


function UserAccount(props) {
    const { title, ammount, description} = props
  return (
    <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">{title}</h3>
            <p className="account-amount">{ammount}</p>
            <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <Button type="transaction-button" content="View transactions"/>
        </div>
    </section>
  )
}

export default UserAccount
