import React, { useState } from 'react';
import { FaTv } from 'react-icons/fa'; // Importing a big screen icon from react-icons
import { useDispatch } from 'react-redux';
import {AppDispatch} from '../Redux/Store'
import { useNavigate } from 'react-router-dom';
import { addSeat, updateAmount } from '../Redux/Features/BookingSlice';
// Define the structure of the seat data (proper types for TypeScript)
interface Seat {
  id: number;
  price: number;
  isOccupied: boolean;
  isSelected: boolean;
}

const SeatBooking: React.FC = () => {
  // Dummy seat data simulating the backend response
  const navigate=useNavigate();
  const dummySeats: Seat[] = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    price: 200 + (Math.random() > 0.5 ? 50 : 0), // random price between 200 and 250
    isOccupied: Math.random() > 0.8, // Randomly mark some seats as occupied
    isSelected: false,
  }));

  const dispatch =useDispatch<AppDispatch>();
  // State for holding the seats data
  const [seats, setSeats] = useState<Seat[]>(dummySeats);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Error message state
  const[addedSeat,setAddedSeat]=useState<number[]>([])
  // Handle seat selection (only if the seat is not occupied and max 2 seats selected)
  const handleSeatSelection = (id: number) => {
    const selectedSeatsCount = seats.filter((seat) => seat.isSelected).length;

    if (selectedSeatsCount >= 2 && !seats.find(seat => seat.id === id)?.isSelected) {
      setErrorMessage('You can only select up to 2 seats.');
      return;
    }

    

    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === id && !seat.isOccupied
          ? { ...seat, isSelected: !seat.isSelected }
          : seat
      )

    );
    setErrorMessage(null); // Reset error message when selection is valid
  };

  const handleBookTicket =()=>{
   const arr=seats.filter(seat=>seat.isSelected).map((seat)=>seat.id)
    dispatch(addSeat(arr))
    dispatch(updateAmount(totalPrice))
    navigate(`/payment`)
  }


  // Calculate selected seats count and total price
  const selectedSeatsCount = seats.filter((seat) => seat.isSelected).length;
  const totalPrice = selectedSeatsCount * 200; // Assuming a base price for all seats

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Select Your Seats</h2>

      {/* Display error message if more than 2 seats are selected */}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      {/* Screen Section */}
      <div className="screen text-center mb-4">
        {/* Big Icon */}
        <h3>
          <FaTv style={{ fontSize: '5rem', color: '#333' }} /> {/* Larger Screen Icon */}
        </h3>
        <div
          style={{
            width: '100%',
            height: '50px',
            backgroundColor: '#333',
            marginBottom: '30px', // Increased margin for better separation
          }}
        />
      </div>

      {/* Seat Layout */}
      <div className="seat-layout mb-4">
        <div className="row justify-content-center">
          {/* Render 5 rows, 10 columns */}
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="d-flex justify-content-center mb-2"  // Reduced row gap here
              style={{
                gap: '10px',
                marginBottom: rowIndex === 4 ? '30px' : '10px', // Slightly reduced gap between rows
              }}
            >
              {Array.from({ length: 10 }).map((_, colIndex) => {
                const seatId = rowIndex * 10 + colIndex + 1;
                const seat = seats.find(s => s.id === seatId)!;

                return (
                  <div
                    key={seat.id}
                    className="seat-wrapper"
                    style={{
                      marginBottom: '10px', // Reduced gap between rows
                      marginRight: colIndex === 4 ? '40px' : '0', // Increased gap after 5th column (aisle effect)
                      textAlign: 'center', // Ensure seat number is centered
                    }}
                  >
                    <div
                      className={`seat form-check d-flex flex-column align-items-center justify-content-center border rounded ${
                        seat.isOccupied
                          ? 'bg-secondary'
                          : seat.isSelected
                          ? 'bg-success'
                          : 'bg-light'
                      }`}
                      style={{
                        cursor: seat.isOccupied ? 'not-allowed' : 'pointer',
                        opacity: seat.isOccupied ? 0.6 : 1,
                        height: '50px',
                        width: '50px',
                        borderColor: seat.isOccupied
                          ? 'gray'
                          : seat.isSelected
                          ? 'green'
                          : 'green', // Set green border for available seats
                        borderWidth: '2px',
                      }}
                      onClick={() => !seat.isOccupied && handleSeatSelection(seat.id)}
                    >
                      {/* Hidden checkbox */}
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`seat-${seat.id}`}
                        checked={seat.isSelected}
                        disabled={seat.isOccupied}
                        style={{ display: 'none' }} // Hide the checkbox visually
                      />
                      {/* Seat Number Below Checkbox */}
                      <div
                        style={{
                          marginTop: '5px', // Spacing between seat and seat number
                          fontSize: '14px',
                          fontWeight: 'bold',
                          color: seat.isOccupied ? '#888' : '#333',
                        }}
                      >
                        {seat.id}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Booking Section */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <button
          className="btn btn-primary w-50"
          disabled={selectedSeatsCount === 0}
          onClick={handleBookTicket}
        >
          Book Now
        </button>
        <div>
          <h5>Total Price: ₹{totalPrice}</h5>
          <p>{selectedSeatsCount} {selectedSeatsCount === 1 ? 'Seat' : 'Seats'} Selected</p>
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
