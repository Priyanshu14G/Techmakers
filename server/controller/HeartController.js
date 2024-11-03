

import HeartDisease from '../models/Heart.js'
export const submitHeartDiseaseForm = async (req, res) => {
    try {
        const { age, sex, chestPain, restingBP, cholesterol, fastingBS, maxHR, exerciseAngina, restECG, stDepression, stSlope, majorVessels } = req.body;
        const userId = req.user.id;

        const newRecord = new HeartDisease({
            userId,
            age,
            sex,
            chestPain,
            restingBP,
            cholesterol,
            fastingBS,
            maxHR,
            exerciseAngina,
            restECG,
            stDepression,
            stSlope,
            majorVessels,
        });

        const savedRecord = await newRecord.save();
        res.status(201).json({ message: 'Data saved successfully', data: savedRecord });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
};

export const getHeartDiseaseRecords = async (req, res) => {
    try {
        const records = await HeartDisease.find({ userId: req.user.id });
        res.status(200).json(records);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
};
