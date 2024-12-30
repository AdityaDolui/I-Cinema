package com.movie.Controller;

import com.movie.Dtos.MovieDTO;
import com.movie.Entity.Movie;
import com.movie.Entity.UserRating;
import com.movie.Services.MovieService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Validated
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;
    //get all movie
    @GetMapping
    public ResponseEntity<List<MovieDTO>> getAllMovie(){
       List<MovieDTO> movieDTO = movieService.getAllMovie();
       return new ResponseEntity<List<MovieDTO>>(movieDTO, HttpStatus.OK);

    }
    @GetMapping("/{id}")
    public ResponseEntity<MovieDTO> getMovieById(@PathVariable Long id){
        MovieDTO movieDTO = movieService.getMovieById(id);
        return new ResponseEntity<MovieDTO>(movieDTO,HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Movie>> searchMovies(@RequestParam(required = false) String name,
                                                @RequestParam(required = false) String genre,
                                                @RequestParam(required = false) String language,
                                                       @RequestParam(required = false) Double rating){
        List<Movie> movie = movieService.searchMovies(name,genre,language,rating);
        return new ResponseEntity<List<Movie>>(movie, HttpStatus.OK);
    }
    //help showservice to get id
    @GetMapping("/name")
    public ResponseEntity<Long> getMovieIdByName(@RequestParam String movieName){
        return new ResponseEntity<Long>(movieService.getMovieIdByName(movieName),HttpStatus.OK);
    }


    @PostMapping("/{id}/rating")
    public  ResponseEntity<Void> addUserRating(@Valid @PathVariable Long id, @RequestBody UserRating userRating ){
        movieService.addOrUpdateRating(id,userRating);
        return ResponseEntity.ok().build();
    }




}
