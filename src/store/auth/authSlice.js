import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    email: '',
    token: '',
    refresh: '',
    type: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            // console.log(action.payload,'payload');
            state.username = action.payload.username,
            state.token = action.payload.token
        },
        setUser: (state, action) => {
            console.log(action.payload);
            state.username = action.payload.username
            state.email = action.payload.email
            state.type = action.user_type
        },
        logout: (state) => {
            state.username = ''
            state.token = ''
            state.refresh = ''
        }
    }
})

export const { login, logout, setUser } = authSlice.actions

export default authSlice.reducer