package com.ShowMS.client;

import com.ShowMS.DTOs.TheatreDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "SeatMS")
public interface SeatClient {
    @GetMapping("/seats/availableseat/{showId}")
    Integer getSeateById(@PathVariable("showId") Long showId);
}
