import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../sass/components/header.scss'
import logo from '../../public/assets/argentBankLogo.webp'
import { useDispatch, useSelector } from "react-redux"
import { selectToken, resetToken } from '../redux/slices/login'
import { userData, resetUserData } from '../redux/slices/userData'

function Header() {
  const token = useSelector(selectToken)
  const data = useSelector(userData)
  const dispatch = useDispatch()
  const [userName, setUserName] = useState(data.userName)

  // Log out user => reset token + user data in Redux
  const logOut = () => {
    dispatch(resetToken())
    dispatch(resetUserData())
  }

  useEffect(() => {
    setUserName(data.userName)
  }, [data.userName])

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {token ? (
        <div>
          {/* User info when logged in */}
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {userName}
          </Link>
          <Link onClick={logOut} className="main-nav-item" to="/">
            <i className="fa fa-sign-out"></i>
            Sign out
          </Link>
        </div>
      ) : (
        <div>
          {/* Sign-in when logged out */}
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Header
