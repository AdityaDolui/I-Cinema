// MovieCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import bb3 from '../../assets/BB3.avif'
import StarRating from '../Starrating'  // Import StarRating component
import Movie from './movie/Movie'
import './Card.css'




const MovieCard: React.FC<Movie> = ({ imageUrl, title, rating, genre, id }) => {
  const navigate = useNavigate(); // For redirection using navigate

  const handleCardClick = () => {
    // Redirect to the movie details page using navigate
    console.log(id);
   // navigate(`details/${id}`)
    navigate(`moviedetails/${id}`);
  };
  
  return (
    <div className="card custom-card" onClick={handleCardClick}>
      <div className="image-container">
        <img src={imageUrl} alt={title} className="card-img-top img-fluid" />
      </div>
      <div className="card-body d-flex flex-column justify-content-between text-center">
        <h5 className="card-title">{title}</h5>
        {/* Container for Rating and Movie Type */}
        <div className="d-flex justify-content-between align-items-center w-100">
          {/* StarRating in the same row as movie type */}
          <StarRating rating={rating} />
          <div className="ms-auto">{genre}</div>  {/* Movie type to the right */}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
