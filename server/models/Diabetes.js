import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const DiabetesDiseaseSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  pregnancies: { type: Number, required: true },
  glucose: { type: Number, required: true },
  bloodPressure: { type: Number, required: true },
  skinThickness: { type: Number, required: true },
  insulin: { type: Number, required: true },
  bmi: { type: Number, required: true },
  diabetesPedigree: { type: Number, required: true },
  age: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const DiabetesDisease = model('DiabetesDisease', DiabetesDiseaseSchema);

export default DiabetesDisease;
