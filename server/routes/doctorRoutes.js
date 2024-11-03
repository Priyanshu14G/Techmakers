
import express from 'express';
import { registerDoctor, getDoctorById } from '../controller/doctorController.js';
import { profileImageUpload } from '../config/multer.js';

const router = express.Router();

// Route to register a doctor
router.post('/', profileImageUpload.single('profilePhoto'), registerDoctor);

// Route to get doctor by ID
router.get('/:id', getDoctorById);

export default router;
