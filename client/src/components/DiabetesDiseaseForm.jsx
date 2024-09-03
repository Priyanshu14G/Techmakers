import React, { useState } from "react";
import axios from "axios";
import Chatbot from "./Chatbot";

const InputForm = () => {
  const [formData, setFormData] = useState({
    Pregnancies: '',
    Glucose: '',
    BloodPressure: '',
    SkinThickness: '',
    Insulin: '',
    BMI: '',
    DiabetesPedigreeFunction: '',
    Age: '',
  });

  const [result, setResult] = useState(null);
  const [chatbotData, setChatbotData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send data to Flask server
      const response = await axios.post('https://tech-ijqakzaov-vinayak-gargs-projects.vercel.app/api/predict/diabetes', formData);
      console.log('Flask response:', response.data);
      setResult(response.data.result === 1 ? 'Positive' : 'Negative');
      
      // Prepare data for chatbot
      const formattedData = {
        pregnancies: parseInt(formData.Pregnancies, 10),
        glucose: parseFloat(formData.Glucose),
        bloodPressure: parseFloat(formData.BloodPressure),
        skinThickness: parseFloat(formData.SkinThickness),
        insulin: parseFloat(formData.Insulin),
        bmi: parseFloat(formData.BMI),
        diabetesPedigreeFunction: parseFloat(formData.DiabetesPedigreeFunction),
        age: parseInt(formData.Age, 10),
      };
      setChatbotData(formattedData);

    } catch (error) {
      console.error('Error submitting form:', error);
      setResult('Error in prediction');
    }
  };

  return (
    <div className="max-w-screen-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Diabetes Prediction Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {Object.keys(formData).map((key) => (
            <div key={key} className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1 capitalize" htmlFor={key}>
                {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
              </label>
              <input
                type="number"
                name={key}
                id={key}
                value={formData[key]}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-50"
                placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                required
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
        >
          Generate AI Response
        </button>
      </form>

      {result !== null && (
        <div className="mt-6 p-4 bg-gray-50 border border-gray-300 rounded-md">
          <p className="text-lg font-semibold text-gray-700">Diabetes Prediction Result:</p>
          <p className="text-xl font-bold text-gray-800">{result}</p>
        </div>
      )}
      
      {chatbotData && (
        <div className="mt-6">
          <Chatbot currentData={chatbotData} />
        </div>
      )}
    </div>
  );
};

export default InputForm;
