import { createSlice } from "@reduxjs/toolkit"

// User data slice => initial state and reducers
const userDataSlice = createSlice({
    name: "userData",
    initialState: {
        createdAt: null,
        email: null,
        firstName: null,
        id: null,
        lastName: null,
        updatedAt: null,
        userName: null,
    },
    reducers: {
        // Set user data 
        setUserData: (state, action) => {
            return action.payload
        },
        // Set new user name
        newUserName: (state, action) => {
            state.userName = action.payload
        },
        // Reset user data
        resetUserData: (state) => {
            for (let key in state) {
                state[key] = null
            }
        }
    },
})

// Export actions
export const { setUserData, resetUserData, newUserName } = userDataSlice.actions

export const userData = (state) => state.userData   // Select user data from Redux store

export default userDataSlice.reducer    // Export reducer
