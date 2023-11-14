import { Route, Routes, Navigate } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import User from "./pages/User"
import Footer from "./components/Footer"
import './sass/global.scss'
import './sass/mediaQueries.scss'
import { selectToken } from './redux/slices/login' // Redux selector for token
import { setUserData } from "./redux/slices/userData" // Redux action for user data
import { useSelector , useDispatch} from 'react-redux'

function App() {
  const token = useSelector(selectToken) // Get token from Redux store
  const dispatch = useDispatch() // Dispatch for Redux actions

  const getUserData = async () => {

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Set token in header
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
        const data = await response.json()
        console.log('Login successful. data:', data.body)
        // Dispatch user data => Redux store
        dispatch(setUserData(data.body))
      } else if (response.status === 400) {
        console.error('Invalid Fields')
      } else {
        console.error('Internal Server Error')
      }
    } catch (error) {
      console.error('API request failed:', error)
    }
  }
  token && getUserData() // if token => API for user data

  return (
    <>
      <Header />
      <Routes >
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/sign-in" element={
          token ? (<Navigate replace to={"/user"}/>) : (<SignIn />) // Condition based on token
        } />
        <Route exact path="/user" element={token ? <User /> : <Navigate replace to={"/sign-in"}/>  } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
