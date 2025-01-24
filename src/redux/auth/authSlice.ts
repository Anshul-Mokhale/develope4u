// src/redux/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
}

// Load token from local storage
const token = localStorage.getItem('token');

const initialState: AuthState = {
    isAuthenticated: !!token,
    token: token,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ token: string }>) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token); // Save token to local storage
        },
        logout: (state) => {
            if (state.token) {
                fetch('https://code.develope4u.site/api/v1/user/logout', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${state.token}`,
                        'Content-Type': 'application/json',
                    },
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Logout successful:', data);
                    })
                    .catch(error => {
                        console.error('There was a problem with the logout request:', error);
                    })
                state.isAuthenticated = false;
                state.token = null;
                localStorage.removeItem('token');
                // .finally(() => {
                //     window.location.href = '/sign-in'; // Redirect to sign-in page
                // });
            } else {
                console.log('No token found');
                // window.location.href = '/sign-in'; // Redirect to sign-in page
            }
            // Remove token from local storage
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
