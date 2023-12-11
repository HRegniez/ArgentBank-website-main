import { createSlice } from "@reduxjs/toolkit"

// Login slice => initial state and reducers
const loginSlice = createSlice({
    name: "login",
    initialState: {
        token: null,
    },
    reducers: {
        // Reducer to set token in the state
        setToken: (state, action) => {
            state.token = action.payload
        },
        // Reducer to reset token
        resetToken: (state) => {
            state.token = null
        }
    },
})
                
export const selectToken = (state) => state.login.token     // Select token from the Redux store
export const { setToken, resetToken } = loginSlice.actions  // Export actions
export default loginSlice.reducer                           // Export the reducer
