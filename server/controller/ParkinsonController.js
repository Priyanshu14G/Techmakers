import ParkinsonDisease from '../models/Parkinson.js'
export const createParkinsonDiseaseRecord = async (req, res) => {
    try {
        const {  mdvpHz1,
            mdvpHz2,
            mdvpHz3,
            mdvpPercent,
            mdvpAbs,
            mdvp,
            jitter,
            mdvpDB,
            shimmer,
            shimmer2,
            nhr,
            hnr,
            rpde,
            dfa,
            spread1,
            spread2,
            d2,
            ppe } = req.body;
        const userId = req.user.id;

        const newRecord = new ParkinsonDisease({
            userId,
            mdvpHz1,
            mdvpHz2,
            mdvpHz3,
            mdvpPercent,
            mdvpAbs,
            mdvp,
            jitter,
            mdvpDB,
            shimmer,
            shimmer2,
            nhr,
            hnr,
            rpde,
            dfa,
            spread1,
            spread2,
            d2,
            ppe,
        });

        const savedRecord = await newRecord.save();
        res.status(201).json(savedRecord);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
};

export const getParkinsonDiseaseRecords = async (req, res) => {
    try {
        const records = await HeartDisease.find({ userId: req.user.id });
        res.status(200).json(records);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
};
