import express from 'express';
import { registerUser } from '../controller/authController.js';
import { loginUser } from '../controller/authController.js';
import { profileImageUpload } from '../config/multer.js';
import errorHandler from '../middlewares/errorHandler.js';


const router = express.Router();

router.post('/register', profileImageUpload.single('profileImage'), registerUser);
router.post('/login',loginUser);
router.use(errorHandler);

export default router;
 
