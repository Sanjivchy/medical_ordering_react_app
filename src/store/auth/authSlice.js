import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    token: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action.payload,'payload');
            state.username = action.payload.username,
            state.token = action.payload.token
        }
    }
})

export const { login } = authSlice.actions

export default authSlice.reducer