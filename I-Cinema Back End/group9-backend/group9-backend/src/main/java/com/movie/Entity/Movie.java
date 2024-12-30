package com.movie.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "movie")
@Getter
@Setter
public class Movie extends BaseClass {

	private String title;
	private String language;
	private String description;
	private String censorRating;
	private LocalDate releaseDate;
	private Double rating;
	private String imgUrl;
	private String genre;

}
