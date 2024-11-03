import express from 'express';
import { submitHeartDiseaseForm,getHeartDiseaseRecords } from '../controller/HeartController.js';
import { fetchUser } from '../middlewares/fetchUser.js';

const router=express.Router();

router.post('/heart-disease',fetchUser,submitHeartDiseaseForm)

router.get('/heart-disease',fetchUser,getHeartDiseaseRecords);

export default router;