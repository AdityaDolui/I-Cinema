import React, { useEffect, useState } from "react";

import moana2 from '../assets/BB3.avif'
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import {movieImages} from '../assets/MoviesImage'

interface MovieDetailsProps {
  title: string;
  rating: number;
  language: string;
  genre: string;
  releaseDate: string;
   image: string;
  censor_rating: string,
  description: string
 // backgroundUrl: string;
}

const MovieDetails: React.FC = () => {
    const {id} =useParams<string>();
    const numericId = Number(id);
    const imageUrl = movieImages[numericId];
    const navigate=useNavigate();
    
    const[movieDetails,SetMovieDetails]=useState<MovieDetailsProps>()
    useEffect(()=>{
        const fetchData= async()=>{
          try{
            const response= await axios.get(`http://localhost:5000/movies/${id}`)
            SetMovieDetails(response.data)
          }catch(error){
            console.log(error)
          }
        }
        fetchData();
    },[])
    
    const handleBookTicket=()=>{
        navigate(`/theatre/${id}`)
    }

    console.log("movieDetails",)
  return (
    <div
      className="position-relative min-vh-100 d-flex align-items-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}

       <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div> 

      {/* Main Content */}

      {/* <div className="container d-flex justify-content-center align-items-center min-vh-100"> */}
      <div className="container position-relative z-1">
        {/* <div className="row details-card bg-light rounded-3 shadow overflow-hidden w-100"> */}
        <div  className="row align-items-center">
          {/* Left: Poster */}

          <div className="col-md-4 text-center">
            <img
              src= {imageUrl}
              alt={`${movieDetails?.title} Poster`}
              className="img-fluid h-100 w-100 rounded-start"
            />
          </div>

          {/* Right: Details */}

          <div className="col-md-8 text-white">
            <h2 className="fw-bold">{movieDetails?.title}</h2>

            <p className="fs-5">
              <strong>Rating:</strong> {movieDetails?.rating} 
            </p>

            <p className="fs-5">
              <strong>Language:</strong> {movieDetails?.title}
            </p>

            {/* <p>
              <strong>Duration:</strong> {duration}
            </p> */}

            <p className="fs-5">
              <strong>Genre:</strong> {movieDetails?.genre}
            </p>
{/* 
            <p>
              <strong>Certification:</strong> {certification}
            </p> */}

            <p>
              <strong>Release Date:</strong> {movieDetails?.releaseDate}
            </p>

            <button onClick={handleBookTicket} className="btn btn-danger px-4 py-2 mt-3">
              Book Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
