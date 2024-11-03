import React, { useState } from "react";
import axios from "axios";
import Chatbot from "./Chatbot";

const HeartDiseaseForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: ''
  });
  const [result, setResult] = useState(null);
  const [showChatbot, setShowChatbot] = useState(false);

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
      const response = await axios.post('http://tech-ijqakzaov-vinayak-gargs-projects.vercel.app/api/predict/heart', formData);
      console.log('Flask response:', response.data);
      setResult(response.data.result === 1 ? 'Positive' : 'Negative');

      // Send data to Chatbot for comparison
      setShowChatbot(true);
    } catch (error) {
      console.error(error);
      setResult('Error in prediction');
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto bg-white rounded shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Heart Disease Prediction</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {[
              { label: 'Age', name: 'age', type: 'number' },
              { label: 'Sex', name: 'sex', type: 'select', options: [{ value: '1', label: 'Male' }, { value: '0', label: 'Female' }] },
              { label: 'Chest Pain Type (cp)', name: 'cp', type: 'number' },
              { label: 'Resting Blood Pressure (trestbps)', name: 'trestbps', type: 'number' },
              { label: 'Serum Cholesterol (chol)', name: 'chol', type: 'number' },
              { label: 'Fasting Blood Sugar (fbs)', name: 'fbs', type: 'select', options: [{ value: '1', label: '120 mg/dl' }, { value: '0', label: 'greater than 120 mg/dl' }] },
              { label: 'Resting Electrocardiographic Results', name: 'restecg', type: 'number' },
              { label: 'Maximum Heart Rate (thalach)', name: 'thalach', type: 'number' },
              { label: 'Exercise Induced Angina (exang)', name: 'exang', type: 'select', options: [{ value: '1', label: 'Yes' }, { value: '0', label: 'No' }] },
              { label: 'Oldpeak', name: 'oldpeak', type: 'number', step: '0.1' },
              { label: 'Slope of Peak Exercise ST Segment (slope)', name: 'slope', type: 'number' },
              { label: 'Number of Major Vessels (ca)', name: 'ca', type: 'number' },
              { label: 'Thalassemia (thal)', name: 'thal', type: 'number' },
            ].map(({ label, name, type, options, step }) => (
              <div key={name}>
                <label htmlFor={name} className="block text-gray-700 font-medium mb-1">{label}</label>
                {type === 'select' ? (
                  <select name={name} id={name} value={formData[name]} onChange={handleChange} className="h-10 border rounded px-4 w-full bg-gray-50" required>
                    <option value="">Select</option>
                    {options.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                ) : (
                  <input type={type} name={name} id={name} step={step} value={formData[name]} onChange={handleChange} className="h-10 border rounded px-4 w-full bg-gray-50" required />
                )}
              </div>
            ))}
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>

        {result !== null && (
        <div className="mt-6 p-4 bg-gray-50 border border-gray-300 rounded-md">
          <p className="text-lg font-semibold text-gray-700">Heart Prediction Result:</p>
          <p className="text-xl font-bold text-gray-800">{result}</p>
        </div>
      )}

        {showChatbot && <Chatbot currentData={formData} />}
      </div>
    </div>
  );
};

export default HeartDiseaseForm;
