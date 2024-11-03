import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to submit the heart disease form
export const submitHeartDiseaseForm = createAsyncThunk(
  'heartDisease/submitHeartDiseaseForm',
  async (formData, { rejectWithValue }) => {
    const token = getState().auth.token;
    try {
      const response = await axios.post('http://https://localhost:4000/api/heart-disease', formData,
        {
            headers:{
                'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            }
        }
      );
      return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
          return rejectWithValue(error.response.data);
        } else {
          return rejectWithValue({ error: 'Network Error or Server not responding' });
        }
      }
  }
);

const heartDiseaseSlice = createSlice({
  name: 'heartDisease',
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
      .addCase(submitHeartDiseaseForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitHeartDiseaseForm.fulfilled, (state, action) => {
        state.loading = false;
        state.formData = action.payload;
      })
      .addCase(submitHeartDiseaseForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFormData, clearError } = heartDiseaseSlice.actions;
export default heartDiseaseSlice.reducer;
