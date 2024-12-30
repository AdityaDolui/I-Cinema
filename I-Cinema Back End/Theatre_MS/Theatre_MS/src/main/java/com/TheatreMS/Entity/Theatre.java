package com.TheatreMS.Entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Theatre extends BaseClass{
    private String theatreName;
    private String theatreLocation;
}
