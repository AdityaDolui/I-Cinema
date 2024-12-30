package com.TheatreMS.DTOs;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ShowDTO {
    private Long showId;
    private LocalDate showTime;
    private MovieDTO movieDTO;
    private TheatreDTO theatreDTO;
    private Double ShowDuration;
}
