import {configureStore} from '@reduxjs/toolkit'
import loginSlice from './slices/login'
import userDataSlice from './slices/userData'

export default configureStore({ // Create Store
    reducer: {
        login: loginSlice,      // Slices
        userData: userDataSlice,
    }
})