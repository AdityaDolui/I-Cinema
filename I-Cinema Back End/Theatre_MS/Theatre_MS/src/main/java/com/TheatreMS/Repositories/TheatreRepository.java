package com.TheatreMS.Repositories;

import com.TheatreMS.Entity.Theatre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TheatreRepository extends JpaRepository<Theatre,Long> {

    Optional<Theatre> findById(Long id);
}
