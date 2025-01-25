import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    logoutLoading: boolean;
    logoutError: string | null;
}

// Load token from local storage
const token = localStorage.getItem('token');

const initialState: AuthState = {
    isAuthenticated: !!token,
    token: token,
    logoutLoading: false,
    logoutError: null,
};

// Async thunk for handling logout
export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { getState, rejectWithValue }) => {
        const state = getState() as { auth: AuthState };
        const token = state.auth.token;

        if (!token) {
            return rejectWithValue('No token found');
        }

        try {
            const response = await fetch('https://code.develope4u.site/api/v1/user/logout', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to logout');
            }

            const data = await response.json();
            if (data.success) {
                localStorage.removeItem('token');
                return data;
            } else {
                throw new Error(data.message || 'Logout unsuccessful');
            }
        } catch (error: any) {
            return rejectWithValue(error.message || 'Logout failed');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ token: string }>) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(logout.pending, (state) => {
                state.logoutLoading = true;
                state.logoutError = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.token = null;
                state.logoutLoading = false;
            })
            .addCase(logout.rejected, (state, action) => {
                state.logoutLoading = false;
                state.logoutError = action.payload as string;
            });
    },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
