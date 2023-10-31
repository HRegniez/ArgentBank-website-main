import { createSlice } from "@reduxjs/toolkit"

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
        setUserData: (state, action) => {
            return action.payload
        },
        newUserName: (state, action) => {
            state.useName = action.payload
        },
        resetUserData: (state) => {
            state.createdAt = null;
            state.email = null;
            state.firstName = null;
            state.id = null;
            state.lastName = null;
            state.updatedAt = null;
            state.userName = null;
        }
    },
})

export const {setUserData , resetUserData, newUserName} = userDataSlice.actions

export const userData = (state) => state.userData

export default userDataSlice.reducer