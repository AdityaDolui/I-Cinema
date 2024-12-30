package com.ShowMS.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "show_table")
@Getter
@Setter
public class Show extends BaseClass{
    private LocalDate showTime;
    private Long movieId;
    private Long theatreId;
    private Double ShowDuration;

}
