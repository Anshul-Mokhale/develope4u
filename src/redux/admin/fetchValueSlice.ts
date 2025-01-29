import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface FetchedValues {
    dataloading: boolean;
    totalStudent: number;
    totalBusiness: number;
    error: string | null;
}

const initialState: FetchedValues = {
    dataloading: false,
    totalStudent: 0,
    totalBusiness: 0,
    error: null
}

export const fetchValue = createAsyncThunk(
    'admin/fetchValues',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('https://code.develope4u.site/api/v1/admin/fetch-data',
                {
                    headers: {
                        "Content-Type": 'application/json',
                        "Authorization": `Bearer ${token}`
                    },
                }
            );
            return response.data.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

const fetchValueSlice = createSlice({
    name: 'fetchValue',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchValue.pending, (state) => {
                state.dataloading = true;
                state.error = null;
            })
            .addCase(fetchValue.fulfilled, (state, action) => {
                state.dataloading = false;
                state.totalStudent = action.payload.studentCount;
                state.totalBusiness = action.payload.businessCount;
            })
            .addCase(fetchValue.rejected, (state, action) => {
                state.dataloading = false;
                state.error = action.payload as string;
            });
    },
});

export default fetchValueSlice.reducer;