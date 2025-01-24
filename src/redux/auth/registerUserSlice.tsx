import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface RegisterUserState {
    loading: boolean;
    user: any;
    error: string | null;
}

const initialState: RegisterUserState = {
    loading: false,
    user: null,
    error: null,
};

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (formData: FormData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://code.develope4u.site/api/v1/user/add-user', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

const registerUserSlice = createSlice({
    name: 'registerUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default registerUserSlice.reducer;