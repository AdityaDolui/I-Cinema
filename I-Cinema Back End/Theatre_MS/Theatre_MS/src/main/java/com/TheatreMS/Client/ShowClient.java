package com.TheatreMS.Client;

import com.TheatreMS.DTOs.ShowDTO;
import com.TheatreMS.DTOs.ShowSeatDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "ShowMS")
public interface ShowClient {
    @GetMapping("shows/search/theatre/{id}")
    List<ShowSeatDTO> getShowByTheatreId(@PathVariable Long id);


}
