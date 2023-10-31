import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
    name: "login",
    initialState: {
        token: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        resetToken: (state) => {
            state.token = null
        }
    },
})

export const {setToken, resetToken} = loginSlice.actions

export const selectToken = (state) => state.login.token

export default loginSlice.reducer;