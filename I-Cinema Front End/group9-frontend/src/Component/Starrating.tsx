// StarRating.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

type StarRatingProps = {
  rating: number; // Rating from 0 to 10
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating / 2); // Each star represents 2 points
  const halfStars = (rating % 2) >= 1 ? 1 : 0; // Half star if remainder is >= 1
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="d-flex align-items-center">
      {/* {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={`full-${index}`} icon={faStar} className="text-danger" />
      ))}
      {halfStars > 0 && (
        <FontAwesomeIcon key="half" icon={faStar} className="text-danger" style={{ opacity: 0.5 }} />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon key={`empty-${index}`} icon={faStar} className="text-muted" />
      ))} */}
      <FontAwesomeIcon icon={faStar} className="text-danger" />
      <span className="ms-2">{rating}/5</span> 
    </div>
  );
};

export default StarRating;
