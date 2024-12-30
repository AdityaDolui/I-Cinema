import React, { useEffect, useState } from "react";
//import dummy from '../assets/Theatre';  // Dummy data for testing
import TheatreCard from '../Component/Card/TheatreCard';
import { Theatre } from "../Types"; // Assuming 'types.ts' contains type definitions
import { useParams } from "react-router-dom";
import axios from "axios";

const TheatreDetailsPage: React.FC = () => {
  const [theatres, setTheatres] = useState<Theatre[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { movieId } = useParams<{ movieId: string }>();
  const numericMovieId = movieId ? parseInt(movieId, 10) :1
  
  useEffect(() => {
    // Fetching theatre data for the given movie
     // Using dummy data for now
    
    // if(movieId===undefined)return ;
    
    const fetchData=async()=>{
      try{
        const response=await axios.get<Theatre[]>("http://localhost:5004/theatres/all");
        console.log("response",response.data)
        // const val: Theatre[]=response.data.filter((data)=>{
          
        //   return data.showSeatDTOList.some((show)=>show.movieId==numericMovieId)
          
        // })
        // val.forEach((data)=>{
        //   data.showSeatDTOList=data.showSeatDTOList.filter((show)=>show.movieId===numericMovieId)
        // })
        // if(1==numericMovieId){
        //   console.log("yes")
        // }else{
        //   console.log("no")
        // }
       // console.log("val",val)
        //setTheatres(val);
        setLoading(false);

        const filteredTheatres = response.data.map((theatre) => {
          // Filter the showDTOList for the current theatre based on movieId
          const filteredShows = theatre.showSeatDTOList.filter(
            (show) => show.movieId === numericMovieId
          );

          // Return the theatre object with only the filtered shows
          return { ...theatre, showSeatDTOList: filteredShows };
        }).filter(theatre => theatre.showSeatDTOList.length > 0);

        setTheatres(filteredTheatres);
        console.log(theatres)
        setLoading(false);

      }
      catch(e){
        setError("facing error from backend "+ e)
      }
      finally{
        setLoading(false);
      }
      

    }

    fetchData();
 
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(theatres)

  return (
    <div className="container my-5">
      <h2>Theatres for : {movieId}</h2>
      <div className="d-flex flex-wrap justify-content-between gap-4">
        {theatres.map((theatre) => (
          <TheatreCard key={theatre.theatreDTO.theatreId} theatre={theatre} />
        ))}
      </div>
    </div>
  );
};

export default TheatreDetailsPage;
