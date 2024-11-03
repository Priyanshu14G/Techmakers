import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";

// Predefined symptom-to-test mappings
const symptomTestMapping = {
  fever: ["Complete Blood Count (CBC)", "Urinalysis"],
  cough: ["Throat Swab", "Spirometry"],
  headache: ["Basic Eye Exam", "Sinus X-ray"],
  fatigue: ["Complete Blood Count (CBC)", "Electrolyte Panel"],
  sore: ["Throat Swab", "Rapid Strep Test"],
  stomach: ["Abdominal Palpation", "Stool Test"],
  dizziness: ["Blood Pressure Measurement", "Blood Glucose Test"],
  muscle: ["Physical Examination", "Electrolyte Panel"],
  nasal: ["Nasal Swab", "Allergy Test"],
  joint: ["Physical Examination", "Rheumatoid Factor Test"],
  rash: ["Skin Scraping", "Patch Test"],
  breath: ["Pulse Oximetry", "Spirometry"],
  diarrhea: ["Stool Test", "Hydration Assessment"],
  urination: ["Urinalysis", "Blood Sugar Test"],
  chestpain: ["Electrocardiogram (ECG)", "Blood Pressure Measurement"],
  back: ["Physical Examination", "Posture Assessment"],
  eye: ["Eye Examination", "Allergy Test"],
  earpain: ["Otoscopy", "Hearing Test"],
  nausea: ["Abdominal Palpation", "Basic Metabolic Panel"],
  insomnia: ["Sleep Diary", "Blood Pressure Test"],
  // Add more symptoms and corresponding tests as needed
};

const generateResponse = async (prompt) => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyDa5N6S6ftK2ihatP0N884vutW_wiKxe4g"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  return result.response.candidates[0].content.parts[0].text;
};

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleShowChatbot = () => {
      const welcomeMessage = {
        text: "Hello, Please enter your symptoms, so i can recommend suitable tests",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, welcomeMessage]);
    };

    document.addEventListener("showChatbot", handleShowChatbot);

    return () => {
      document.removeEventListener("showChatbot", handleShowChatbot);
    };
  }, []);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Analyze symptoms and recommend tests
    const symptoms = input
      .toLowerCase()
      .split(/,|and|\s+/)
      .map((symptom) => symptom.trim());
    const recommendedTests = new Set();

    symptoms.forEach((symptom) => {
      if (symptomTestMapping[symptom]) {
        symptomTestMapping[symptom].forEach((test) =>
          recommendedTests.add(test)
        );
      }
    });

    const responseText =
      recommendedTests.size > 0
        ? `Based on your symptoms, I recommend the following tests: ${Array.from(
            recommendedTests
          ).join(", ")}.`
        : "I'm sorry, I couldn't find specific tests for your symptoms. Please consult a healthcare provider for a more accurate diagnosis.";

    const botMessage = { text: responseText, sender: "bot" };
    setMessages((prevMessages) => [...prevMessages, botMessage]);

    // Optionally, generate a follow-up response using Google Generative AI
    const followUpResponse = await generateResponse(input);
    const followUpMessage = {
      text: followUpResponse || "Error: Unable to generate response",
      sender: "bot",
    };
    setMessages((prevMessages) => [...prevMessages, followUpMessage]);

    setInput("");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
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
          <div
            key={index}
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px", // Adjust margin-top for space above the input bar
          padding: "0 10px", // Add padding around the input bar and button
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          style={{
            width: "calc(100% - 90px)", // Adjusted width to account for button size and padding
            padding: "10px",
            paddingBottom: "15px", // Added padding at the bottom
            borderRadius: "25px",
            border: "1px solid #ccc",
            fontSize: "16px",
            marginRight: "10px", // Add margin-right for space between the input and button
            marginBottom: "20px", // Added margin at the bottom
          }}
        />

        <button
          onClick={handleSend}
          style={{
            padding: "10px 20px",
            borderRadius: "25px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
export default Chatbot;
