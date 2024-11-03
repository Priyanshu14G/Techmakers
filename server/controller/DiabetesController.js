import DiabetesDisease from '../models/Diabetes.js'
export const createDiabetesDiseaseRecord = async (req, res) => {
    try {
        const { pregnancies,
            glucose,
            bloodPressure,
            skinThickness,
            insulin,
            bmi,
            diabetesPedigree,
            age, } = req.body;
        const userId = req.user.id;

        const newRecord = new DiabetesDisease({
            userId,
            pregnancies,
      glucose,
      bloodPressure,
      skinThickness,
      insulin,
      bmi,
      diabetesPedigree,
      age,
        });

        const savedRecord = await newRecord.save();
        res.status(201).json(savedRecord);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
};

export const getDiabetesDiseaseRecords = async (req, res) => {
    try {
        const records = await DiabetesDisease.find({ userId: req.user.id });
        res.status(200).json(records);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
};
