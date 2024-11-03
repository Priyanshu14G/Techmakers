import express from 'express';
import { createDiabetesDiseaseRecord,getDiabetesDiseaseRecords } from '../controller/DiabetesController.js';
import { fetchUser } from '../middlewares/fetchUser.js';

const router=express.Router();

router.post('/diabetes-disease',fetchUser,createDiabetesDiseaseRecord)

router.get('/diabetes-disease',fetchUser,getDiabetesDiseaseRecords);

export default router;