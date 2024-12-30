package com.movie.Services;

import com.movie.Dtos.MovieDTO;
import com.movie.Entity.Movie;
import com.movie.Entity.UserRating;
import com.movie.Repository.MovieRepository;
import com.movie.Repository.UserRatingRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private UserRatingRepository userRatingRepository;
    private final ModelMapper modelMapper = new ModelMapper();

    public List<MovieDTO> getAllMovie(){
        List<Movie> movies = movieRepository.findAll();
        List<MovieDTO> movieDTOS = new ArrayList<>();
        if(movies.isEmpty()){
            throw new RuntimeException("movienotexistexception");
        }
        for(Movie movie:movies){
            MovieDTO movieDTO = modelMapper.map(movie,MovieDTO.class);
            movieDTOS.add(movieDTO);
        }
        return  movieDTOS;
    }

    public MovieDTO getMovieById(Long id){
        Optional<Movie> movieOptional = movieRepository.findById(id);
        Movie movie = movieOptional.orElseThrow(()->new RuntimeException("movienotexistexception"));
        return modelMapper.map(movie,MovieDTO.class);
    }

    public List<Movie> searchMovies(String name, String genre, String lan, Double rating){
        if(name!=null){
            return movieRepository.findByTitleContainingIgnoreCase(name);
        }
        if(genre!=null){
            return movieRepository.findByGenreContainingIgnoreCase(lan);
        }
        if(lan!=null){
            return movieRepository.findByLanguageContainingIgnoreCase(lan);
        }
        if(rating!=null){
            return movieRepository.findByRatingGreaterThanEqual(rating);
        }
        return null;
    }

    //helping show service to get movie id
    public  Long getMovieIdByName(String movieName){
        Optional<Movie> movie = movieRepository.findByTitle(movieName);
        Movie movie1 = movie.orElseThrow(()->new RuntimeException("MovieNotFoundException"));
        return (movie1.getId());
    }



    //addRating user canb add rating then increase rating

    public  void addOrUpdateRating(Long movieId, UserRating userRating){
        Optional<Movie> movieOptional = movieRepository.findById(movieId);
        if(movieOptional.isEmpty()){
            throw new RuntimeException("movie not found");
        }
        userRating.setId(movieId);
        userRatingRepository.save(userRating);
    }



}
