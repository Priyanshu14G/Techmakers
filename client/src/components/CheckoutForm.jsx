// CheckoutForm.jsx
import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      alert(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      alert('Payment Successful!');
      // Here you can handle the payment confirmation with your backend
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe} style={styles.submitButton}>
        Pay
      </button>
    </form>
  );
};

const styles = {
  submitButton: {
    backgroundColor: '#008CBA', 
    color: 'white', 
    padding: '10px 20px', 
    border: 'none', 
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '15px',
  },
};

export default CheckoutForm;
