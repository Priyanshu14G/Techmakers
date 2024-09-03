import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const HeartDiseaseSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  age: { type: Number, required: true },
  sex: { type: String, required: true },
  chestPain: { type: String, required: true },
  restingBP: { type: Number, required: true },
  cholesterol: { type: Number, required: true },
  fastingBS: { type: Number, required: true },
  maxHR: { type: Number, required: true },
  exerciseAngina: { type: String, required: true },
  restECG: { type: String, required: true },
  stDepression: { type: Number, required: true },
  stSlope: { type: String, required: true },
  majorVessels: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const HeartDisease = model('HeartDisease', HeartDiseaseSchema);

export default HeartDisease;
