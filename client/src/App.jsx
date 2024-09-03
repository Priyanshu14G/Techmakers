import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import LandingPage from './components/LandingPage';
import HeartDiseaseForm from './components/HeartDiseaseForm';
import ParkinsonsDiseaseForm from './components/ParkinsonsDiseaseForm';
import DiabetesDiseaseForm from './components/DiabetesDiseaseForm';
import Register from './components/register/Register';
import Login from './components/login/Login'
import "./App.css";
import DoctorProfile1 from './components/doctor-profile/DoctorProfile1';
import DoctorProfile2 from './components/doctor-profile/DoctorProfile2';
import CheckoutComponent from './components/payments';
import AppointmentPage from './components/Appointment';
const Layout = ({ children }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isLoginPage = location.pathname==="/login";
  const isRegisterPage = location.pathname==="/register";

  return (
    <div className={`flex  w-full min-h-screen ${isLandingPage ? "w-full" : ""}`}>
      {!isLandingPage  && !isLoginPage && !isRegisterPage && <Sidebar />}
      <main
        className={`${isLandingPage
            ? "flex-1 w-full px-0"
            : "flex-1 p-4 md:p-6 ml-0 md:ml-16"
          }`}
      >
        {children}
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payments" element={<CheckoutComponent />} />
          <Route
            path="/HeartDiseaseForm"
            element={<HeartDiseaseForm />}
          />
          <Route
            path="/ParkinsonsDiseaseForm"
            element={<ParkinsonsDiseaseForm />}
          />
          <Route
            path="/DiabetesDiseaseForm"
            element={<DiabetesDiseaseForm />}
          />
          <Route path='/doctor1' element={<DoctorProfile1 />} />
          <Route path='/doctor2' element={<DoctorProfile2 />} />
          <Route path='/book-appointment' element={<AppointmentPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
