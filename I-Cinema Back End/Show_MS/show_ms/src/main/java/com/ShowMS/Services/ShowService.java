package com.ShowMS.Services;

import com.ShowMS.DTOs.MovieDTO;
import com.ShowMS.DTOs.ShowDTO;
import com.ShowMS.DTOs.ShowDTOSeat;
import com.ShowMS.DTOs.TheatreDTO;
import com.ShowMS.Entity.Show;
import com.ShowMS.Repositories.ShowRepository;

import com.ShowMS.Exception.ShowNotFoundException;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class ShowService {
    @Autowired
    private ShowRepository showRepository;
    private ModelMapper modelMapper;

    public List<ShowDTO> getAllShows(){
        List<Show> shows = showRepository.findAll();
        if(shows.isEmpty()){
            throw new ShowNotFoundException("Show not exist for this id");
        }
        List<ShowDTO> showDTOList = new ArrayList<>();
        for(Show show: shows){
            ShowDTO dto = new ShowDTO();
            MovieDTO movieDTO = new MovieDTO();
            TheatreDTO theatreDTO = new TheatreDTO();
            movieDTO.setMovieId(show.getMovieId());
            theatreDTO.setTheatreId(show.getTheatreId());
            dto.setMovieDTO(movieDTO);
            dto.setTheatreDTO(theatreDTO);
            dto.setShowId(show.getId());
            dto.setShowTime(show.getShowTime());
            dto.setShowDuration(show.getShowDuration());
            showDTOList.add(dto);
        }
        return showDTOList;

    }
    public List<ShowDTOSeat> getAllSeatShows(){
        List<Show> shows = showRepository.findAll();
        if(shows.isEmpty()){
            throw new ShowNotFoundException("Show not exist for this id");
        }
        List<ShowDTOSeat> showDTOList = new ArrayList<>();
        for(Show show: shows){
            ShowDTOSeat dto = new ShowDTOSeat();
         //   MovieDTO movieDTO = new MovieDTO();
         //   TheatreDTO theatreDTO = new TheatreDTO();
         //   movieDTO.setMovieId(show.getMovieId());
          //  theatreDTO.setTheatreId(show.getTheatreId());
            dto.setMovieId(show.getMovieId());
            dto.setTheatreId(show.getTheatreId());
            dto.setShowId(show.getId());
            dto.setShowTime(show.getShowTime());
            dto.setAvailableSeat(0);
            dto.setShowDuration(show.getShowDuration());
            showDTOList.add(dto);
        }
        return showDTOList;

    }

    public List<ShowDTO> getShowByMovieName(Long movieId){
        List<Show> shows = showRepository.findAll();

        List<Show> showList = shows.stream().filter(show-> Objects.equals(show.getMovieId(), movieId)).toList();
        if(showList.isEmpty()){
            throw new ShowNotFoundException("Show not exist for this id");
        }

        List<ShowDTO> showDTOList = new ArrayList<>();
        for(Show show: showList){
            ShowDTO dto = new ShowDTO();
            MovieDTO movieDTO = new MovieDTO();
            TheatreDTO theatreDTO = new TheatreDTO();
            movieDTO.setMovieId(show.getMovieId());
            theatreDTO.setTheatreId(show.getTheatreId());
            dto.setMovieDTO(movieDTO);
            dto.setTheatreDTO(theatreDTO);
            dto.setShowId(show.getId());
            dto.setShowTime(show.getShowTime());
            dto.setShowDuration(show.getShowDuration());
            showDTOList.add(dto);
        }
        return showDTOList;
    }

   public List<ShowDTOSeat> getAllShowByTheatreId(Long theatreId){
        List<Show> shows = showRepository.findByTheatreId(theatreId);
        if(shows.isEmpty()){
            throw new ShowNotFoundException("Show not exist for this id");
        }
       List<ShowDTOSeat> showDTOList = new ArrayList<>();
       for(Show show: shows){
           ShowDTOSeat dto = new ShowDTOSeat();
         //  MovieDTO movieDTO = new MovieDTO();
           //TheatreDTO theatreDTO = new TheatreDTO();
          // movieDTO.setMovieId(show.getMovieId());
          // theatreDTO.setTheatreId(show.getTheatreId());
           dto.setMovieId(show.getMovieId());
           dto.setTheatreId(show.getTheatreId());
           dto.setShowId(show.getId());
           dto.setShowTime(show.getShowTime());
           dto.setAvailableSeat(0);
           dto.setShowDuration(show.getShowDuration());
           showDTOList.add(dto);
       }
       return showDTOList;
   }
   
   public List<ShowDTO> getAllShowByMovieId(Long id){
       List<Show> shows = showRepository.findByMovieId(id);
       if(shows.isEmpty()){
           throw new ShowNotFoundException("Show not exist for this id");
       }
      List<ShowDTO> showDTOList = new ArrayList<>();
      for(Show show: shows){
          ShowDTO dto = new ShowDTO();
          MovieDTO movieDTO = new MovieDTO();
          TheatreDTO theatreDTO = new TheatreDTO();
          movieDTO.setMovieId(show.getMovieId());
          theatreDTO.setTheatreId(show.getTheatreId());
          dto.setMovieDTO(movieDTO);
          dto.setTheatreDTO(theatreDTO);
          dto.setShowId(show.getId());
          dto.setShowTime(show.getShowTime());
          dto.setShowDuration(show.getShowDuration());
          showDTOList.add(dto);
      }
      return showDTOList;
  }


}
