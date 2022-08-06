import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    token: '',
    refresh: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action.payload,'payload');
            state.username = action.payload.username,
            state.token = action.payload.token
        },
        logout: (state) => {
            state.username = ''
            state.token = ''
            state.refresh = ''
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer