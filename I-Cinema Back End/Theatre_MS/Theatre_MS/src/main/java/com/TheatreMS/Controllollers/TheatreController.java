package com.TheatreMS.Controllollers;

import com.TheatreMS.Client.ShowClient;
import com.TheatreMS.DTOs.ShowDTO;
import com.TheatreMS.DTOs.ShowSeatDTO;
import com.TheatreMS.DTOs.TheatreAndShowDTO;
import com.TheatreMS.DTOs.TheatreDTO;
import com.TheatreMS.Entity.Theatre;
import com.TheatreMS.Services.TheatreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/theatres")
public class TheatreController {

    @Autowired
    private TheatreService theatreService;
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private ShowClient showClient;

    @GetMapping
    public ResponseEntity<List<TheatreDTO>> getAllTheatre(){
        return new ResponseEntity<List<TheatreDTO>>(theatreService.getAllTheatre(), HttpStatus.OK);
    }

    //getAlltheatrewithshow
    @GetMapping("/all")
    public ResponseEntity<List<TheatreAndShowDTO>> getAllTheatreAndShow(){
    	List<TheatreAndShowDTO> theatreAndShowDTOs = new ArrayList<>();
    	List<TheatreDTO> theatreDTOs = theatreService.getAllTheatre();

    	for(TheatreDTO theatreDTO : theatreDTOs) {
            List<ShowSeatDTO> showSeatDTOs = showClient.getShowByTheatreId(theatreDTO.getTheatreId());
    		TheatreAndShowDTO theatreAndShowDTO = new TheatreAndShowDTO();

    		theatreAndShowDTO.setShowSeatDTOList(showSeatDTOs);
    		theatreAndShowDTO.setTheatreDTO(theatreDTO);
    		theatreAndShowDTOs.add(theatreAndShowDTO);
    	}
		return new ResponseEntity<List<TheatreAndShowDTO>>(theatreAndShowDTOs, HttpStatus.OK);
    }

    @GetMapping("/{theatreId}")
    public ResponseEntity<TheatreDTO> getTheatreById(@PathVariable Long theatreId){
        TheatreDTO theatreDTO = theatreService.getTheatreById(theatreId);
        return new ResponseEntity<TheatreDTO>(theatreDTO,HttpStatus.OK);
    }

    @GetMapping("/shows/{theatreId}")
    public ResponseEntity<List<ShowSeatDTO>> getAllShowOfTheatreById(@PathVariable Long theatreId){
        //get call to show service
        List<ShowSeatDTO> showDTOList = showClient.getShowByTheatreId(theatreId);
        return new ResponseEntity<List<ShowSeatDTO>>(showDTOList,HttpStatus.OK);

    }
}
