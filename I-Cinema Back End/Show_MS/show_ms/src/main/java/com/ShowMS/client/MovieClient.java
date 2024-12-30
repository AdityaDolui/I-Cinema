package com.ShowMS.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.ShowMS.DTOs.MovieDTO;

@FeignClient(name = "MovieMS")
public interface MovieClient {

    @GetMapping("/movies/{movieId}")
    MovieDTO getMovieById(@PathVariable("movieId") Long movieId);
}

