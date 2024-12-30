package com.TheatreMS.Services;

import com.TheatreMS.DTOs.TheatreAndShowDTO;
import com.TheatreMS.DTOs.TheatreDTO;
import com.TheatreMS.Entity.Theatre;
import com.TheatreMS.Repositories.TheatreRepository;
import jakarta.persistence.Access;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TheatreService {
    @Autowired
    private TheatreRepository theatreRepository;

    private final ModelMapper modelMapper = new ModelMapper();
    public List<TheatreDTO> getAllTheatre(){
        List<Theatre> theatres = theatreRepository.findAll();
        if (theatres.isEmpty()) {
            throw new RuntimeException("TheatreNotExistException");
        }
        return theatres.stream()
                .map(theatre -> modelMapper.map(theatre, TheatreDTO.class))
                .collect(Collectors.toList());
    }

    public TheatreDTO getTheatreById(Long id){
        Optional<Theatre> theatreOptional = theatreRepository.findById(id);
        Theatre theatre = theatreOptional.orElseThrow(()->
                                                            new RuntimeException("TheatreNotFoundException"));
        return modelMapper.map(theatre,TheatreDTO.class);
    }

//    public TheatreAndShowDTO getAllTheatreAndShow(){
//        TheatreAndShowDTO theatreAndShowDTO = new TheatreAndShowDTO();
//
//    }
}
