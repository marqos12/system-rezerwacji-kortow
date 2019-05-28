package pl.fingo.internship.internship.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.fingo.internship.internship.models.Reservation;
import pl.fingo.internship.internship.models.Statistics;
import pl.fingo.internship.internship.services.ReservationService;
import pl.fingo.internship.internship.services.StatisticService;

@RestController
@RequestMapping("/api")

public class ReservationController {
	
	@Autowired
	ReservationService reservationService;

	@Autowired
	StatisticService statisticService;
	
	@GetMapping("/reservations")
	public List<Reservation> getReservations(){
		return this.reservationService.getReservations();
	}
	
	@PostMapping("/reservations")
	public ResponseEntity createReservations(@RequestBody Reservation reservation){
		if(this.reservationService.createReservation(reservation)!=null)
		{
			this.statisticService.newReservation(reservation);
			return ResponseEntity.status(HttpStatus.OK).body(reservation);
		}
		else 
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Zajęte");
	}

	@GetMapping("/statistics")
	public Statistics getStatistics(){
		return this.statisticService.getStatistics();
	}
	
}
