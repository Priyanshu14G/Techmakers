import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import doctorReducer from './doctorSlice';
import HeartDiseaseReducer from './heartDiseaseSlice'
import ParkinsonDiseaseReducer from './parkinsonDiseaseSlice'
import DiabetesDiseaseReducer from './diabetesDiseaseSlice'
const store = configureStore({
    reducer: {
      auth: authReducer,
      doctor:doctorReducer,
      heartDisease:HeartDiseaseReducer,
      parkinsonDisease:ParkinsonDiseaseReducer,
      diabetesDisease:DiabetesDiseaseReducer
    },
});

export default store;