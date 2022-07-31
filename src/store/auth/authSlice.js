import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    token: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action.payload,'payload');
            state.email = action.payload.email,
            state.token = action.payload.token
        }
    }
})

export const { login } = authSlice.actions

export default authSlice.reducer