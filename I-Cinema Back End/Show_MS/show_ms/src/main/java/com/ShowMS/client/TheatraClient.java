package com.ShowMS.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.ShowMS.DTOs.TheatreDTO;

@FeignClient(name = "TheatreMS")
public interface TheatraClient {
    @GetMapping("/theatres/{theatreId}")
    TheatreDTO getTheatreById(@PathVariable("theatreId") Long theatreId);
}
