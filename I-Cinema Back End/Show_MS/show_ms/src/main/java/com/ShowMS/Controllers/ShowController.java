package com.ShowMS.Controllers;

import com.ShowMS.DTOs.MovieDTO;
import com.ShowMS.DTOs.ShowDTO;
import com.ShowMS.DTOs.ShowDTOSeat;
import com.ShowMS.DTOs.TheatreDTO;
import com.ShowMS.Services.ShowService;

import com.ShowMS.client.MovieClient;
import com.ShowMS.client.SeatClient;
import com.ShowMS.client.TheatraClient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/shows")
public class ShowController {
    @Autowired
    private ShowService showService;
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private MovieClient movieClient;

    @Autowired
    private SeatClient seatClient;
    @Autowired
    private TheatraClient theatraClient;

    @GetMapping()
    public ResponseEntity<List<ShowDTO>> getAllShows(){
        List<ShowDTO> showDTOS = showService.getAllShows();
        for(ShowDTO showDTO: showDTOS){

        	MovieDTO movieDTO = movieClient.getMovieById(showDTO.getMovieDTO().getMovieId());
            movieDTO.setMovieId(showDTO.getMovieDTO().getMovieId());
            TheatreDTO theatreDTO = theatraClient.getTheatreById(showDTO.getTheatreDTO().getTheatreId());
            showDTO.setMovieDTO(movieDTO);
            System.out.println(movieDTO.getMovieId());
            showDTO.setTheatreDTO(theatreDTO);
        }
        return  new ResponseEntity<List<ShowDTO>>(showDTOS,HttpStatus.OK);
    }
    //get show by moviename
    @GetMapping("/all")
    public ResponseEntity<List<ShowDTOSeat>> getAllSeatShows(){
        List<ShowDTOSeat> showDTOS = showService.getAllSeatShows();
        for(ShowDTOSeat showDTO: showDTOS){

//            MovieDTO movieDTO = movieClient.getMovieById(showDTO.getMovieId());
//            movieDTO.setMovieId(showDTO.getMovieDTO().getMovieId());
         //   TheatreDTO theatreDTO = theatraClient.getTheatreById(showDTO.getTheatreDTO().getTheatreId());
         //   showDTO.setMovieDTO(movieDTO);
           // System.out.println(movieDTO.getMovieId());
           // showDTO.setTheatreDTO(theatreDTO);
            Integer availableSeat=seatClient.getSeateById(showDTO.getShowId());
            showDTO.setAvailableSeat(availableSeat);
        }
        return  new ResponseEntity<List<ShowDTOSeat>>(showDTOS,HttpStatus.OK);
    }
    @GetMapping("/search/movie/{movieId}")
    public ResponseEntity<List<ShowDTO>> getShowByMovieName(@PathVariable Long movieId){
        List<ShowDTO> showDTOS =  showService.getAllShowByMovieId(movieId);
        for(ShowDTO showDTO: showDTOS){
        	MovieDTO movieDTO = movieClient.getMovieById(showDTO.getMovieDTO().getMovieId());
            movieDTO.setMovieId(showDTO.getMovieDTO().getMovieId());
            TheatreDTO theatreDTO = theatraClient.getTheatreById(showDTO.getTheatreDTO().getTheatreId());
            showDTO.setMovieDTO(movieDTO);
            showDTO.setTheatreDTO(theatreDTO);
        }
        return  new ResponseEntity<List<ShowDTO>>(showDTOS,HttpStatus.OK);
    }

    //get show by theatereid
    @GetMapping("/search/theatre/{theatreId}")
    public ResponseEntity<List<ShowDTOSeat>> getAllShowByTheatreId(@PathVariable Long theatreId){

        List<ShowDTOSeat> showDTOS = showService.getAllShowByTheatreId(theatreId);
        for(ShowDTOSeat showDTO: showDTOS){
        //	MovieDTO movieDTO = movieClient.getMovieById(showDTO.getMovieDTO().getMovieId());
         //   movieDTO.setMovieId(showDTO.getMovieDTO().getMovieId());
         //   TheatreDTO theatreDTO = theatraClient.getTheatreById(showDTO.getTheatreDTO().getTheatreId());
         //   showDTO.setMovieDTO(movieDTO);
          //  showDTO.setTheatreDTO(theatreDTO);
            Integer availableSeat=seatClient.getSeateById(showDTO.getShowId());
            showDTO.setAvailableSeat(availableSeat);

        }
        return  new ResponseEntity<>(showDTOS,HttpStatus.OK);
    }
}
