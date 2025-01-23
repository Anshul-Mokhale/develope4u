// src/redux/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ token: string }>) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
