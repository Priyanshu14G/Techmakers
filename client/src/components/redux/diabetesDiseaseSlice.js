import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to submit the heart disease form
export const submitDiabetesDiseaseForm = createAsyncThunk(
  'diabetesDisease/submitForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://https://https://localhost:4000/api/diabetes-disease', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const diabetesDiseaseSlice = createSlice({
    name: 'diabetesDisease',
    initialState: {
      loading: false,
      error: null,
      success: false,
    },
    reducers: {
      clearError: (state) => {
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(submitDiabetesDiseaseForm.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.success = false;
        })
        .addCase(submitDiabetesDiseaseForm.fulfilled, (state) => {
          state.loading = false;
          state.success = true;
        })
        .addCase(submitDiabetesDiseaseForm.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
          state.success = false;
        });
    },
  });
  
  export const { clearError } = diabetesDiseaseSlice.actions;
  export default diabetesDiseaseSlice.reducer;
