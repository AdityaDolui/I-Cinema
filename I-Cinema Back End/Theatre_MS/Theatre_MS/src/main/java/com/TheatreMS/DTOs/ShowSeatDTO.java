package com.TheatreMS.DTOs;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ShowSeatDTO {
    private Long showId;
    private LocalDate showTime;
    private Integer movieId;
    private Integer theatreId;
    private  Integer availableSeat;
    private Double ShowDuration;
}
