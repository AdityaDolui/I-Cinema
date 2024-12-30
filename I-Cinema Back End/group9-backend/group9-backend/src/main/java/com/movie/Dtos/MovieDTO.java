package com.movie.Dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class MovieDTO {
    @NotNull
    private Long id;
    @NotEmpty
    private String title;
    @NotEmpty
    private String genre;
    @NotBlank
    private String Url;
    @NotEmpty
    private String language;
    @NotEmpty
    private  String description;
    @NotEmpty
    private String censorRating;
    @NotNull @PastOrPresent
    private LocalDate releaseDate;
    @NotEmpty
    private Double rating;
    @NotEmpty
    private String imgUrl;
}
