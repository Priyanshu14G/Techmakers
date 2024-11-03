import express from 'express';
import { createParkinsonDiseaseRecord,getParkinsonDiseaseRecords } from '../controller/ParkinsonController.js';
import { fetchUser } from '../middlewares/fetchUser.js';

const router=express.Router();

router.post('/parkinson-disease',fetchUser,createParkinsonDiseaseRecord)

router.get('/parkinson-disease',fetchUser,getParkinsonDiseaseRecords);

export default router;