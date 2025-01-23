import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { login } from './authSlice'; // Assuming this is where the authenticated state is updated

export const loginUser = createAsyncThunk(
    'loginUser/login',
    async ({ email, password }: { email: string; password: string }, { dispatch }) => {
        try {
            const response = await axios.post('https://code.develope4u.site/api/v1/user/user-login', { email, password });
            const { accessToken } = response.data.data;

            // After successful login, dispatch the token and set authenticated
            dispatch(login({ token: accessToken }));

            return accessToken; // Return token to update state
        } catch (error) {
            throw new Error((error as any).response?.data?.message || 'Login failed');
        }
    }
);

const loginUserSlice = createSlice({
    name: 'loginUser',
    initialState: {
        formloading: false,
        error: '',
        token: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.formloading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.formloading = false;
                state.token = action.payload;
                state.error = '';
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.formloading = false;
                state.error = action.error.message || '';
            });
    },
});

export default loginUserSlice.reducer;
