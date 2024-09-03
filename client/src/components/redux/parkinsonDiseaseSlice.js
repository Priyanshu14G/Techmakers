import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to submit the heart disease form
export const submitParkinsonDiseaseForm = createAsyncThunk(
  'parkinsonDisease/submitForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://https://localhost:4000/api/parkinson-disease', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const parkinsonDiseaseSlice = createSlice({
  name: 'parkinsonDisease',
  initialState: {
    formData: null,
    loading: false,
    error: null,
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitParkinsonDiseaseForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitParkinsonDiseaseForm.fulfilled, (state, action) => {
        state.loading = false;
        state.formData = action.payload;
      })
      .addCase(submitParkinsonDiseaseForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFormData, clearError } = parkinsonDiseaseSlice.actions;
export default parkinsonDiseaseSlice.reducer;
