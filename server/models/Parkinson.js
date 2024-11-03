import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ParkinsonDiseaseSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  mdvpHz1: { type: Number, required: true },
  mdvphz2: { type: Number, required: true },
  mdvphz3: { type: Number, required: true },
  mdvpPercent: { type: Number, required: true },
  mdvpAbs: { type: Number, required: true },
  mdvp: { type: Number, required: true },
  jitter: { type: Number, required: true },
  mdvpDB: { type: Number, required: true },
  shimmer: { type: Number, required: true },
  shimmer2: { type: Number, required: true },
  nhr: { type: Number, required: true },
  hnr: { type: Number, required: true },
  rpde: { type: Number, required: true },
  dfa: { type: Number, required: true },
  spread1: { type: Number, required: true },
  spread2: { type: Number, required: true },
  d2: { type: Number, required: true },
  ppe: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const ParkinsonDisease = model('ParkinsonDisease', ParkinsonDiseaseSchema);

export default ParkinsonDisease;
