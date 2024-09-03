// CheckoutComponent.jsx
import React from 'react';
import './payment.css'; // Import the CSS file

const CheckoutComponent = () => {
  return (
    <div className=" ml-[150px] checkout-container">
      

      <div className="right-side">
        <div className="receipt">
          <h2 className="receipt-heading">Receipt Summary</h2>
          <div>
            <table className="table">
              <tbody>
                
                <tr>
                  <td>Discount</td>
                  <td className="price">0.00 Rs</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td className="price">0.00 Rs</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td className="price">0.00 Rs</td>
                </tr>
                <tr className="total">
                  <td>Total</td>
                  <td className="price">0.00 Rs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="payment-info">
          <h3 className="payment-heading">Payment Information</h3>
          <form className="form-box" enctype="text/plain" method="get" target="_blank">
            <div>
              <label htmlFor="full-name">Full Name</label>
              <input
                id="full-name"
                name="full-name"
                placeholder="Satoshi Nakamoto"
                required
                type="text"
              />
            </div>

            <div>
              <label htmlFor="credit-card-num">Card Number
                <span className="card-logos">
                  <i className="card-logo fa-brands fa-cc-visa"></i>
                  <i className="card-logo fa-brands fa-cc-amex"></i>
                  <i className="card-logo fa-brands fa-cc-mastercard"></i>
                  <i className="card-logo fa-brands fa-cc-discover"></i>
                </span>
              </label>
              <input
                id="credit-card-num"
                name="credit-card-num"
                placeholder="1111-2222-3333-4444"
                required
                type="text"
              />
            </div>

            <div>
              <p className="expires">Expires on:</p>
              <div className="card-expiration">
                <label htmlFor="expiration-month">Month</label>
                <select id="expiration-month" name="expiration-month" required>
                  <option value="">Month:</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>

                <label htmlFor="expiration-year" className="expiration-year">Year</label>
                <select id="expiration-year" name="expiration-year" required>
                  <option value="">Year</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="cvv">CVV</label>
              <input
                id="cvv"
                name="cvv"
                placeholder="415"
                type="text"
                required
              />
              <a className="cvv-info" href="#">What is CVV?</a>
            </div>

            <button className="btn">
              <i className="fa-solid fa-lock"></i> Book Securely
            </button>
          </form>

          <p className="footer-text">
            <i className="fa-solid fa-lock"></i>
            Your credit card information is encrypted
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
