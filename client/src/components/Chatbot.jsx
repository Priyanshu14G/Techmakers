
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Link } from "react-router-dom";

const historicalDataDiabetes = [
  {
    pregnancies: 2,
    glucose: 130,
    bloodPressure: 70,
    skinThickness: 20,
    insulin: 15,
    bmi: 25.5,
    diabetesPedigreeFunction: 0.5,
    age: 45,
  },
  {
    pregnancies: 1,
    glucose: 120,
    bloodPressure: 65,
    skinThickness: 18,
    insulin: 14,
    bmi: 24.0,
    diabetesPedigreeFunction: 0.4,
    age: 50,
  },
];

const historicalDataHeart = [
  {
    age: 55,
    sex: 1, // 1 = male, 0 = female
    cp: 3, // Chest pain type (3 = typical angina)
    trestbps: 130,
    chol: 245,
    fbs: 0, // Fasting blood sugar > 120 mg/dl (0 = false)
    restecg: 1, // Resting electrocardiographic results (1 = ST-T wave abnormality)
    thalach: 150,
    exang: 1, // Exercise induced angina (1 = yes)
    oldpeak: 2.5,
    slope: 2, // Slope of the peak exercise ST segment (2 = flat)
    ca: 0, // Number of major vessels colored by fluoroscopy (0 = none)
    thal: 2, // Thalassemia (2 = normal)
  },
  {
    age: 62,
    sex: 0, // Female
    cp: 2, // Chest pain type (2 = atypical angina)
    trestbps: 140,
    chol: 230,
    fbs: 1, // Fasting blood sugar > 120 mg/dl (1 = true)
    restecg: 0, // Resting electrocardiographic results (0 = normal)
    thalach: 130,
    exang: 0, // Exercise induced angina (0 = no)
    oldpeak: 1.0,
    slope: 1, // Slope of the peak exercise ST segment (1 = upsloping)
    ca: 1, // Number of major vessels colored by fluoroscopy (1 = 1 vessel)
    thal: 3, // Thalassemia (3 = fixed defect)
  }
];


const historicalData = [
  {
    fo: 185.4,
    fhi: 216.1,
    flo: 182.2,
    Jitter_percent: 0.92,
    Jitter_Abs: 0.009,
    RAP: 0.0024,
    PPQ: 0.0033,
    DDP: 0.0006,
    Shimmer: 0.048,
    Shimmer_dB: 0.053,
    APQ3: 0.028,
    APQ5: 0.020,
    APQ: 0.018,
    DDA: 0.016,
    NHR: 0.024,
    HNR: 14.1,
    RPDE: 0.277,
    DFA: 0.914,
    spread1: 0.0013,
    spread2: 0.0007,
    D2: 1.972,
    PPE: 0.394
  }
];


const compareData = (currentData, historicalData) => {
  let comparisonResults = [];

  // Get most recent historical data instead of averages
  const recentHistoricalData = historicalData[historicalData.length - 1];

  // Compare current data with the most recent historical data
  for (let key in currentData) {
    if (currentData[key] > recentHistoricalData[key]) {
      comparisonResults.push(
        `${key.toUpperCase()}: Current value ${currentData[key]} is higher than the most recent historical data ${recentHistoricalData[key].toFixed(2)}.`
      );
    } else if (currentData[key] < recentHistoricalData[key]) {
      comparisonResults.push(
        `${key.toUpperCase()}: Current value ${currentData[key]} is lower than the most recent historical data ${recentHistoricalData[key].toFixed(2)}.`
      );
    } else {
      comparisonResults.push(`${key.toUpperCase()}: No significant change detected.`);
    }
  }

  return comparisonResults.join(" \n");
};

const generateResponse = async (prompt) => {
  const genAI = new GoogleGenerativeAI("AIzaSyDa5N6S6ftK2ihatP0N884vutW_wiKxe4g"); // Replace with your actual API key
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  return result.response.candidates[0].content.parts[0].text;
};

function Chatbot({ currentData }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let historicalData;
    switch (currentData.diseaseType) {
      case 'heart':
        historicalData = historicalDataHeart;
        break;
      case 'parkinsons':
        historicalData = historicalDataParkinsons;
        break;
      case 'diabetes':
      default:
        historicalData = historicalDataDiabetes;
        break;
    }

    const comparisonResult = compareData(currentData, historicalData);
    const botMessage1 = {
      text: comparisonResult,
      sender: "bot",
    };
    setMessages((prevMessages) => [...prevMessages, botMessage1]);

    const generateAndSetAIResponse = async () => {
      const aiResponse = await generateResponse(comparisonResult + " these are my current and previous medical records. i dont want you to give me any medical advise, just tell me any significant changes in any of the features and risks related to it. recommend a type of doctor to which i should consult ");

      const botMessage2 = {
        text: aiResponse || "Error: Unable to generate response",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage2]);
    };

    generateAndSetAIResponse();
  }, [currentData]);

  return (

    <div style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <p className="font-bold">
        <div className="text-xl">RECOMMENDED DOCTORS</div>
        <button><Link to='/doctor1' className="">1. Dr. Sarah Johnson</Link></button>
        <br/>
        <br/>
        <button><Link to='/doctor2'>2. Dr. Aryan Patel</Link></button>
      </p>
        <br/>
      <div
        className="chat-window"
        style={{
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          height: "400px",
          overflowY: "scroll",
        }}
      >
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
            {message.sender === "bot" ? (
              <div
                style={{
                  backgroundColor: "#e9ecef",
                  color: "#333",
                  padding: "10px 15px",
                  borderRadius: "15px 15px 0 15px",
                  maxWidth: "80%",
                  alignSelf: "flex-start",
                }}
              >
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </div>
            ) : (
              <p
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "10px 15px",
                  borderRadius: "15px 15px 15px 0",
                  maxWidth: "80%",
                  alignSelf: "flex-end",
                }}
              >
                {message.text}
              </p>

            )}
          </div>
        ))}

      </div>

    </div>
  );
}

export default Chatbot;
