package com.ShowMS.DTOs;

import lombok.Data;

import java.time.LocalDate;
@Data
public class MovieDTO {
    private Long movieId;
    private String title;
    private String language;
    private String description;
    private String censorRating;
    private LocalDate releaseDate;
    private Double rating;
    private String imgUrl;
    private String genre;
}
