import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../Redux/Store';
import { useNavigate } from 'react-router-dom';
import './Payment.css'; // Import the CSS for positioning the form at the bottom
import { removeSeat, updateAmount } from '../Redux/Features/BookingSlice';

const PaymentPage: React.FC = () => {
  const { seatIds, amount } = useSelector((state: RootState) => state.booking);
  const [cardNumber, setCardNumber] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState('');
  const [modalTitle, setModalTitle] = React.useState('');
  const [modalType, setModalType] = React.useState<'success' | 'error'>('success');  // Added state for modal type (success or error)
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // Basic validation for card details
  const isCardNumberValid = /^\d{16}$/.test(cardNumber); // Validates if the card number is 16 digits
  const isExpiryDateValid = /^\d{2}\/\d{2}$/.test(expiryDate); // Validates the expiry date format (MM/YY)
  const isCvvValid = /^\d{3}$/.test(cvv); // Validates the CVV is 3 digits

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cardNumber && expiryDate && cvv && isCardNumberValid && isExpiryDateValid && isCvvValid) {
      // Show success message in modal
      setModalTitle('Payment Successful!');
      setModalMessage(`Payment of $${amount} for seats: ${seatIds.join(', ')} has been processed successfully.`);
      setModalType('success'); // Set modal type to success
      setShowModal(true);

      // Dispatch actions after success
      dispatch(removeSeat());
      dispatch(updateAmount(0));
    //  navigate('/');
    } else {
      // Show error message in modal
      setModalTitle('Error!');
      setModalMessage('Please fill in all payment details correctly.');
      setModalType('error'); // Set modal type to error
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="payment-page container">
      <h1 className="mt-5">Payment Page</h1>
      <h2>Total Amount: ${amount}</h2>
      <h3>Selected Seats: {seatIds.join(', ')}</h3>

      {/* Payment Form */}
      <form onSubmit={handlePaymentSubmit} className="payment-form mt-4">
        <div className="mb-3">
          <label className="form-label">Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={16}
            className="form-control"
            required
          />
          {!isCardNumberValid && cardNumber && <small className="text-danger">Card number must be 16 digits.</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Expiry Date (MM/YY):</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            maxLength={5}
            className="form-control"
            required
          />
          {!isExpiryDateValid && expiryDate && <small className="text-danger">Expiry date must be in MM/YY format.</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength={3}
            className="form-control"
            required
          />
          {!isCvvValid && cvv && <small className="text-danger">CVV must be 3 digits.</small>}
        </div>

        <button type="submit" className="btn btn-primary">Pay Now</button>
      </form>

      {/* Modal for success or error message */}
      {showModal && (
        <div className={`modal fade show ${modalType === 'success' ? 'bg-success' : 'bg-danger'}`} tabIndex={-1} style={{ display: 'block' }} aria-hidden="true">
          <div className="modal-dialog">
            <div className={`modal-content ${modalType === 'success' ? 'border-success text-success' : 'border-danger text-danger'}`}>
              <div className="modal-header">
                <h5 className="modal-title">{modalTitle}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p>{modalMessage}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
