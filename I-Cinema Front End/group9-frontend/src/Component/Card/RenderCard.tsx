import React, { useEffect, useState } from 'react'
import  MovieCard from './Card'
import Movie from './movie/Movie'
import Bohurupi from '../../assets/Bohurupi.avif'
import moana from '../../assets/Moana2.avif'
import pushpa from '../../assets/Pushpa2.avif'
import BB3 from '../../assets/BB3.avif'
import singham from '../../assets/singham.avif'
import vv from  '../../assets/vv .png'
import { useFetcher } from 'react-router-dom'
import axios from 'axios'
import LoadingSpinner from '../LoadingSpinner'
import {movieImages} from '../../assets/MoviesImage'

interface OutletContext {
  search: string;
  filters: {
    rating: number;
    genre: string[];
    language: string[];
  }
}

const RenderCard: React.FC<OutletContext>=({search,filters})=> {
    

    const [movies, setMovies] = useState<Movie[]>([]);
    const [updatedMovie, setUpdatedMovie]=useState<Movie[]>([])
    const [filterList, setFilterList] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error,setError] = useState<string|null>(null);

    
   // console.log(updatedMovie)

   //fetch data from backend
    useEffect(()=>{


      const fecthData=async()=>{
        try{
            const response=await axios.get<Movie[]>('http://localhost:5000/movies');
            const val=response.data
          
            setUpdatedMovie(val);
            setMovies(val)
            setFilterList(val)
           // console.log(updatedMovie)
            console.log("line mno 86")
        }catch(err){
            setError("No Movies is there ")
            console.log("line mno 89")
        }finally{
            setLoading(false)
            console.log("line mno 92")
        }
    }
        fecthData();
        console.log("line mno 97")
    },[])


    //filter implemented 
   // Apply main filters (rating, genre, language) to the movies list
    useEffect(() => {
      const filterMovies = () => {
        const filtered = movies.filter((movie) => {
          const matchesRating = movie.rating >= filters.rating;
          const matchesGenre =
            filters.genre.length === 0 || filters.genre.some((genre) => movie.genre.includes(genre));
          const matchesLanguage =
            filters.language.length === 0 || filters.language.some((lang) => movie.language.includes(lang));
          return matchesRating && matchesGenre && matchesLanguage;
        });
        setFilterList(filtered);  // Update filterList after applying the filters
      };
      
      filterMovies();
    }, [filters, movies]);


    //search implemented
    useEffect(()=>{
      console.log("updated",updatedMovie);
      console.log("Search: ",search)
        const lowerTerm=search.toLowerCase();

       const val=filterList.filter((card)=> card.title.toLowerCase().includes(lowerTerm));

       setUpdatedMovie(val);
    },[search,movies,filterList])
    
    console.log("filter value" ,filters)
    console.log("filtered",filterList)
    console.log("after search",filterList)

   // console.log(updatedMovie)



    if(loading)return <p> Loading Movies . . . <LoadingSpinner/></p>
    if(error)return <p>error....</p>

  return (
    <div>
       <div className="container py-5">
       <div className="row g-3" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',  // Automatically adjusts the number of columns
        gap: '2rem',  // This creates the gap between the items
        justifyItems: 'start' // Keeps the cards aligned to the left in the row
      }}>
        {updatedMovie?updatedMovie.map((movie, index) => (
          <div key={index} className="col">
            <MovieCard
                    imageUrl={movieImages[movie.id]}
                    title={movie.title}
                    genre={movie.genre}
                    rating={movie.rating}
                    id={movie.id} 
                    // Pass the unique ID for redirection
                    cencor_rating={movie.cencor_rating} description={movie.description} language={movie.language} release_date={movie.release_date}            />
          </div>
        )) : <div>{BB3}</div>}
      </div>
    </div>
    </div>
  )
}

export default RenderCard
