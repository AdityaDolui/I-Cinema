import React from "react";
import { Theatre } from '../../Types'; // Assuming 'types.ts' contains type definitions
import { useNavigate } from 'react-router-dom';

interface TheatreCardProps {
  theatre: Theatre;
}
type ShowTime = {
  [key: number]: string; // Index-based key for the show time (e.g., 1, 2, 3)
};



const TheatreCard: React.FC<TheatreCardProps> = ({ theatre }) => {
  const navigate = useNavigate();
    
  // Handle show button click
  const handleShowClick = (showId: number) => {
    navigate(`/show/${showId}`);
  };
  const showTimes:ShowTime = {
    1: "13:00",
    2: "16:00",
    3: "20:00",
  };
  return (
    <div
      className="card shadow-lg border-light rounded-3"
      style={{
        minWidth: '300px',
        maxWidth: '400px',
        padding: '20px',
        backgroundColor: '#f8f9fa', // Light background
      }}
    >
      <div className="card-body">
        <h5 className="card-title fs-4 mb-3 text-center" style={{ fontWeight: 'bold' }}>
          {theatre.theatreDTO.theatreName}
        </h5>
        <p className="card-text text-center text-muted mb-3">{theatre.theatreDTO.theatreLocation}</p>
        <p className="card-text text-center mb-4">
          <strong>Total Seats Available: </strong>50
        </p>

        {/* Show buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {theatre.showSeatDTOList.map((show,index) =>{ 
            const showKey = index + 1; 
            return (
            
            <button
              key={show.showId}
              className={`btn ${show.availableSeat === 0 ? "btn-outline-dark" : "btn-outline-success"} btn-lg`}
              onClick={() => handleShowClick(show.showId)}
              disabled={show.availableSeat === 0}
              style={{
                minWidth: '120px',
                padding: '8px 16px', // Padding for the button
              }}
            >
                {/* {`obj.${showKey} - ${showTimes[showKey]}`} */}
                {showTimes[showKey]}
            </button>
          
          ) })}
        </div>
      </div>
    </div>
  );
};

export default TheatreCard;
