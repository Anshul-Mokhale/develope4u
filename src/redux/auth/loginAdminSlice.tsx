import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { login } from './authSlice'; // Assuming this is where the authenticated state is updated

export const loginAdmin = createAsyncThunk(
    'loginAdmin/login',
    async ({ email, password }: { email: string; password: string }, { dispatch }) => {
        try {
            const response = await axios.post('https://code.develope4u.site/api/v1/admin/admin-login', { email, password });
            const { accessToken } = response.data.data;

            // After successful login, dispatch the token and set authenticated
            dispatch(login({ token: accessToken, authType: 'admin' }));

            return accessToken; // Return token to update state
        } catch (error) {
            throw new Error((error as any).response?.data?.message || 'Login failed');
        }
    }
);

const loginAdminSlice = createSlice({
    name: 'loginAdmin',
    initialState: {
        formloading: false,
        error: '',
        token: null,
        authType: 'admin',
        loggedIn: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAdmin.pending, (state) => {
                state.formloading = true;
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.formloading = false;
                state.loggedIn = true;
                state.token = action.payload;
                state.error = '';
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.formloading = false;
                state.error = action.error.message || '';
            });
    },
});

export default loginAdminSlice.reducer;