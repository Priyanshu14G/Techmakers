import Doctor from '../models/Doctor.js';
import path from 'path';
import fs from 'fs';

// Register a new doctor
export const registerDoctor = async (req, res) => {
  const { name, yearsOfExperience, email, specializedIn, licenseNumber } = req.body;
  const profilePhoto = req.file;

  try {
    let doctor = await Doctor.findOne({ email });

    if (doctor) {
      return res.status(400).json({ msg: 'Doctor already exists' });
    }

    // Construct the file path for the profile photo
    const profilePhotoPath = path.join('/uploads/profileImages', profilePhoto.filename);

    // Create a new doctor instance
    doctor = new Doctor({
      name,
      yearsOfExperience,
      email,
      specializedIn,
      licenseNumber,
      profilePhoto: profilePhotoPath,
    });

    // Save the new doctor to the database
    await doctor.save();

    // Respond with success
    res.json({ msg: 'Doctor registered successfully', doctor });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get doctor by ID
export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({ msg: 'Doctor not found' });
    }

    // Respond with the doctor information
    res.json(doctor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
