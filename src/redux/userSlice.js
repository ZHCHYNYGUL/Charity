import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    user: null,
}
const userSlice = createSlice({
    name: 'user',// auth
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.user = action.payload
        },
        logOut(state, action) {
            state.user = null
        }
    }
})
export const { loginSuccess,logOut } = userSlice.actions
export default userSlice.reducer