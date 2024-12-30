package com.TheatreMS.DTOs;

import java.util.List;

import lombok.Data;
@Data
public class TheatreAndShowDTO {
    TheatreDTO theatreDTO;
    List<ShowSeatDTO> showSeatDTOList;
}
