import mongoose from "mongoose";

const DoctorSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      yearsOfExperience: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      specializedIn: {
        type: String,
        required: true,
      },
      licenseNumber: {
        type: String,
        required: true,
        unique: true,
      },
      profilePhoto: {
        type: String, // This will store the path or URL of the photo
        required: true,
      },
})

const Doctor = mongoose.model('Doctor', DoctorSchema);
export default Doctor;