import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from 'react-router-dom'; // Importing Link to make the images clickable
import image4 from '../assets/image4.png';
import image3 from '../assets/image3.png';
import image2 from '../assets/image2.jpg';
import image1 from '../assets/image1.png';
import batman from '../assets/Batman.webp';
import pushpa2_cou from '../assets/pushpa2_cau.png';
import down from '../assets/download.jpg';
import Justise from '../assets/JusticeLeauge2.png';
import bb3_cou from '../assets/bb3_cou.jpg';
import Avanger from '../assets/Avenger_va.png';
import twilight from '../assets/twilight-movie-poster-i4603.jpg';

const Carousel: React.FC = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      style={{ marginTop: '20px' }}
      data-bs-ride="carousel" // This ensures the carousel auto-slides
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>

      <div className="carousel-inner">
        {/* First Item */}
        <div className="carousel-item active" data-bs-interval="3000">
          <Link to="/moviedetails/8">
            <img
              src={Justise}
              className="d-block w-100"
              alt="Justice League"
              style={{ height: '300px', width: '100%', objectFit: 'cover' }}
            />
          </Link>
        </div>

        {/* Second Item */}
        <div className="carousel-item" data-bs-interval="3000">
          <Link to="/moviedetails/6">
            <img
              src={batman}
              className="d-block w-100"
              alt="Batman"
              style={{ height: '300px', width: '100%', objectFit: 'cover' }}
            />
          </Link>
        </div>

        {/* Third Item */}
        <div className="carousel-item" data-bs-interval="3000">
          <Link to="/moviedetails/13">
            <img
              src={Avanger}
              className="d-block w-100"
              alt="Avengers"
              style={{ height: '300px', width: '100%', objectFit: 'cover' }}
            />
          </Link>
        </div>

        {/* Fourth Item */}
        <div className="carousel-item" data-bs-interval="3000">
          <Link to="/moviedetails/7">
            <img
              src={pushpa2_cou}
              className="d-block w-100"
              alt="Pushpa"
              style={{ height: '300px', width: '100%', objectFit: 'cover' }}
            />
          </Link>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
