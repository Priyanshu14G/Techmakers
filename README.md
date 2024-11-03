# Techmakers
SIH


# **MedCortico: AI-Assisted Healthcare Platform**

## **Overview**

**MedCortico** is an AI-powered healthcare platform designed to assist users in diagnosing potential health issues and connecting them with the right doctors. The platform utilizes an intelligent chatbot to suggest relevant lab tests based on symptoms provided by the user, then processes the lab results through a machine learning model to diagnose possible conditions. Based on the diagnosis, it suggests doctors, allowing users to browse and book appointments seamlessly.

## **Features**

- **Symptom-based Diagnosis**: Users can input their symptoms, and the chatbot will suggest the appropriate lab tests to diagnose the condition.
- **AI-driven Disease Prediction**: An integrated ML model analyzes lab test data to diagnose diseases.
- **Doctor Suggestions**: Based on the diagnosis, relevant doctors are suggested, and users can view profiles and book appointments.
- **Appointment Booking**: Users can schedule appointments with the suggested doctors directly through the platform.
- **Online Payment**: The platform supports secure online payments for appointment booking.

## **Tech Stack**

- **Frontend**: React, Redux, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI/ML**: Python, TensorFlow, Scikit-learn
- **APIs**: RESTful APIs, JWT for authentication

## **Installation and Setup**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/medcortico.git
   cd medcortico
   ```

2. **Backend Setup**:

   - Navigate to the backend directory:
   
     ```bash
     cd backend
     ```

   - Install dependencies:
   
     ```bash
     npm install
     ```

   - Set up environment variables:
   
     Create a `.env` file in the `backend` folder and add the following:

     ```bash
     MONGO_URI=<your-mongodb-connection-string>
     JWT_SECRET=<your-jwt-secret>
     ```

   - Start the backend server:
   
     ```bash
     npm start
     ```

3. **Frontend Setup**:

   - Navigate to the frontend directory:
   
     ```bash
     cd frontend
     ```

   - Install dependencies:
   
     ```bash
     npm install
     ```

   - Start the frontend development server:
   
     ```bash
     npm start
     ```

4. **AI/ML Setup** (Optional):

   If you'd like to run the machine learning models locally, navigate to the `ml_model` directory and follow the setup instructions there.

## **Usage**

Once the platform is set up, users can:

1. **Register/Login**: Create an account or log in using an existing one.
2. **Input Symptoms**: Start by entering symptoms into the chatbot.
3. **Lab Tests & Diagnosis**: After lab tests are recommended, users input the results. The AI model then diagnoses the disease.
4. **View Doctor Suggestions**: Get doctor suggestions based on the diagnosis and book appointments.
5. **Appointment Booking**: Users can book appointments with doctors and make payments online.


## **License**

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---


