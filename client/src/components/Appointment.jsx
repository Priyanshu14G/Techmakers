import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';
const AppointmentPage = () => {
  // Hardcoded appointment timings
  const availableTimings = [
    'Monday: 8:00 AM - 10:00 AM',
    'Tuesday: 10:00 AM - 12:00 PM',
    'Wednesday: 1:00 PM - 3:00 PM',
    'Thursday: 3:00 PM - 5:00 PM',
    'Friday: 9:00 AM - 11:00 AM',
  ];

  // State to manage selected timing and payment method
  const [selectedTiming, setSelectedTiming] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    if (!selectedTiming) {
      alert('Please select an appointment timing.');
      return;
    }
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    // Here you can integrate with a payment gateway
    alert(`Appointment booked for ${selectedTiming} using ${paymentMethod}.`);
    // Reset selections
    setSelectedTiming('');
    setPaymentMethod('');
  };

  return (
    <div style={styles.container}>
      <h2>Book an Appointment</h2>
      <div style={styles.section}>
        <h3>Select Appointment Timing:</h3>
        <ul style={styles.timingList}>
          {availableTimings.map((timing, index) => (
            <li key={index} style={styles.timingItem}>
              <label>
                <input 
                  type="radio" 
                  name="timing" 
                  value={timing}
                  checked={selectedTiming === timing}
                  onChange={(e) => setSelectedTiming(e.target.value)}
                />
                {timing}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.section}>
        <h3>Payment:</h3>
        <CheckoutForm />
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '30px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  section: {
    marginBottom: '20px',
  },
  timingList: {
    listStyleType: 'none',
    padding: 0,
  },
  timingItem: {
    marginBottom: '10px',
  },
  paymentOption: {
    marginBottom: '10px',
  },
  submitButton: {
    backgroundColor: '#008CBA', 
    color: 'white', 
    padding: '10px 20px', 
    border: 'none', 
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default AppointmentPage;
