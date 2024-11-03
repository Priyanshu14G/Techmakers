import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorProfile1 = () => {
  // Hardcoded doctor's profile details
  const doctorProfile = {
    name: 'Dr. Aryan Patel',
    specialization: 'Orthopedic Surgeon',
    address: '987 Cedar Avenue, Maple City, CA 90123',
    experience: 12,
    appointmentTimings: 'Monday to Friday: 8:00 AM - 2:00 PM',
  };

  const navigate = useNavigate();

  const handleBookAppointment = () => {
    // Navigate to the Appointment Page
    navigate('/book-appointment');
  };

  return (
    <div style={styles.profileContainer}>
      <h2>{doctorProfile.name}</h2>
      <p><strong>Specialization:</strong> {doctorProfile.specialization}</p>
      <p><strong>Address:</strong> {doctorProfile.address}</p>
      <p><strong>Years of Experience:</strong> {doctorProfile.experience} years</p>
      <p><strong>Appointment Timings:</strong> {doctorProfile.appointmentTimings}</p>
      <button 
        onClick={handleBookAppointment}
        style={styles.button}
      >
        Book an Appointment
      </button>
    </div>
  );
};

const styles = {
  profileContainer: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  button: {
    backgroundColor: '#4CAF50', 
    color: 'white', 
    padding: '10px 20px', 
    border: 'none', 
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px',
    fontSize: '16px',
  },
};

export default DoctorProfile1;
