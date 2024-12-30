package com.movie.Repository;


import com.movie.Entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MovieRepository extends JpaRepository<Movie,Long> {
    List<Movie> findByTitleContainingIgnoreCase(String name);

    List<Movie> findByGenreContainingIgnoreCase(String lan);

    List<Movie> findByLanguageContainingIgnoreCase(String lan);

    List<Movie> findByRatingGreaterThanEqual(Double rating);

    Optional<Movie> findByTitle(String movieName);
}
