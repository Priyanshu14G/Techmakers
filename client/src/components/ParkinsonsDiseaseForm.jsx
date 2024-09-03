import React, { useState } from "react";
import axios from "axios";
import Chatbot from "./Chatbot";

const ParkinsonsDiseaseForm = () => {
  const [formData, setFormData] = useState({
    fo: '',
    fhi: '',
    flo: '',
    Jitter_percent: '',
    Jitter_Abs: '',
    RAP: '',
    PPQ: '',
    DDP: '',
    Shimmer: '',
    Shimmer_dB: '',
    APQ3: '',
    APQ5: '',
    APQ: '',
    DDA: '',
    NHR: '',
    HNR: '',
    RPDE: '',
    DFA: '',
    spread1: '',
    spread2: '',
    D2: '',
    PPE: ''
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
      const response = await axios.post('http://tech-ijqakzaov-vinayak-gargs-projects.vercel.app/api/predict/parkinsons', formData);
      console.log(response.data);
      setResult(response.data.prediction === 1 ? 'Parkinson’s Disease Detected' : 'No Parkinson’s Disease');

      // Show chatbot
      setShowChatbot(true);
    } catch (error) {
      console.error("Error during form submission:", error);
      setResult('Error in prediction');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Parkinson’s Disease Prediction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1 capitalize" htmlFor={key}>
              {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
            </label>
            <input
              type="number"
              step="0.001"
              name={key}
              id={key}
              value={formData[key]}
              onChange={handleChange}
              required
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
          <h3 className="text-lg font-semibold">Prediction Result</h3>
          <p className="text-xl font-bold">{result}</p>
        </div>
      )}

      {showChatbot && (
        <div className="mt-4">
          <Chatbot currentData={formData} />
        </div>
      )}
    </div>
  );
};

export default ParkinsonsDiseaseForm;
