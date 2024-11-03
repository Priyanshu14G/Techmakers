import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to handle doctor registration
export const registerDoctor = createAsyncThunk('doctor/registerDoctor', async (formData, thunkAPI) => {
    try {
      const response = await axios.post('http://https://localhost:4000/api/doctors', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  });

  const doctorSlice = createSlice({
    name: 'doctor',
    initialState: {
      doctor: null,
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(registerDoctor.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(registerDoctor.fulfilled, (state, action) => {
          state.loading = false;
          state.doctor = action.payload;
        })
        .addCase(registerDoctor.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default doctorSlice.reducer;
