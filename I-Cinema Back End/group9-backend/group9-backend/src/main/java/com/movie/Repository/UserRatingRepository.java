package com.movie.Repository;

import com.movie.Entity.UserRating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRatingRepository extends JpaRepository<UserRating,Long> {
}
