import React, { useState } from 'react';
import './TestDrive.css'; // Add the CSS file

const TestDrive = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [carCategory, setCarCategory] = useState('');
  const [carModel, setCarModel] = useState('');
  const [testDriveDate, setTestDriveDate] = useState('');
  const [comments, setComments] = useState('');
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const [carOptions, setCarOptions] = useState([]);

  const handleCarCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCarCategory(selectedCategory);
    updateCarModels(selectedCategory);
  };

  const updateCarModels = (category) => {
    let options = [];
    switch (category) {
      case 'sports':
        options = ['Ferrari', 'Lamborghini Huracan', 'Porsche 911 GT3', 'Chevrolet Corvette', 'Jaguar F-Type'];
        break;
      case 'luxury':
        options = ['Rolls-Royce Phantom', 'Bentley Mulsanne', 'Mercedes-Benz S-Class', 'Bentley Flying Spur', 'Range Rover'];
        break;
      case 'electric':
        options = ['Tesla Model S', 'Rivian R1T', 'XUV-400', 'MMG Comet', 'Hyundai Kona'];
        break;
      case 'off-roading':
        options = ['Urban Cruiser Hyrider', 'Jeep Wrangler', 'Mahindra Thar', 'Land Rover Defender', 'Toyota Fortuner'];
        break;
      default:
        options = [];
    }
    setCarOptions(options);
  };

  const openPaymentModal = () => {
    setPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setPaymentModalOpen(false);
  };

  const handlePayment = (event) => {
    event.preventDefault();
    // Here you can add actual payment processing logic
    closePaymentModal();
    alert('Test drive booking confirmed!');
  };

  return (
    <div>
      <img src="/Images/Jaguar F-Type.png" className="left-image" alt="Car Image Left" />

      <form onSubmit={(e) => e.preventDefault()}>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Test Drive Booking Form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Full Name:</td>
              <td>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Email Address:</td>
              <td>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Car Category:</td>
              <td>
                <select
                  id="car_category"
                  name="car_category"
                  value={carCategory}
                  onChange={handleCarCategoryChange}
                  required
                >
                  <option value="" disabled>
                    Select a car category
                  </option>
                  <option value="sports">Sports Cars</option>
                  <option value="luxury">Luxury Cars</option>
                  <option value="electric">Electric Cars</option>
                  <option value="off-roading">Off-Roading Cars</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Preferred Car Model:</td>
              <td>
                <select
                  id="car_model"
                  name="car_model"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select a car model
                  </option>
                  {carOptions.map((car, index) => (
                    <option key={index} value={car}>
                      {car}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Preferred Date:</td>
              <td>
                <input
                  type="date"
                  name="test_drive_date"
                  value={testDriveDate}
                  onChange={(e) => setTestDriveDate(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Additional Comments:</td>
              <td>
                <textarea
                  name="comments"
                  rows="4"
                  placeholder="Any additional requests or comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>
                <input type="button" value="Book Test Drive" onClick={openPaymentModal} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {paymentModalOpen && (
        <div id="paymentModal" className="modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            <span className="close" onClick={closePaymentModal}>
              &times;
            </span>
            <h2>Payment Details</h2>
            <form onSubmit={handlePayment}>
              <label htmlFor="card_name">Name on Card:</label>
              <input
                type="text"
                id="card_name"
                name="card_name"
                placeholder="Enter name on card"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                required
              />

              <label htmlFor="card_number">Card Number:</label>
              <input
                type="text"
                id="card_number"
                name="card_number"
                placeholder="Enter card number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />

              <label htmlFor="expiry_date">Expiry Date:</label>
              <input
                type="text"
                id="expiry_date"
                name="expiry_date"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />

              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="Enter CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />

              <button type="submit">Submit Payment</button>
            </form>
          </div>
        </div>
      )}

      <img src="/Images/BMW.png" className="right-image" alt="Car Image Right" />
    </div>
  );
};

export default TestDrive;
