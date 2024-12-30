export interface Show {
    id: string;
    showTime: string;
    availableSeats: number;
    ticketPrice: number;
  }
export interface Seat{
    id: number;
    createdAt: string;           // Date in string format
    lastModifiedAt: string;      // Date in string format
    status: "AVAILABLE" | "SELECTED" | "BOOKED"; // Only the specified status values
    seatType: "REGULAR" | "VIP" ; // Specify valid seat types
    seatPrice: number;           // Price of the seat
    lastUpdated: string;  
}

  export interface MovieDTO {
    movieId: number;
    title: string;
    language: string;
    description: string;
    censorRating: string;
    releaseDate: string;
    rating: number;
    imgUrl: string;
    genre: string;
}

export interface ShowDTO {
    showId: number;
    showTime: string;
    movieId: number;
    theatreId: number;
    availableSeat:number;
    showDuration: number;
}

export interface TheatreDTO {
    theatreId: number;
    theatreName: string;
    theatreLocation: string;
}

export interface Theatre {
    theatreDTO: TheatreDTO;
    showSeatDTOList: ShowDTO[];
}
