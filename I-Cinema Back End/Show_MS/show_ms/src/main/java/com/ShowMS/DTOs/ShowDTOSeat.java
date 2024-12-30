package com.ShowMS.DTOs;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ShowDTOSeat {
    private Long showId;
    private LocalDate showTime;
    private long movieId;
    private Long theatreId;
    private Integer availableSeat;
    private Double ShowDuration;
}
