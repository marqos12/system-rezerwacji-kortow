package pl.fingo.internship.internship.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import pl.fingo.internship.internship.models.Reservation;

@Service
public class ReservationService {

	private List<Reservation> reservations;

	public ReservationService() {
		this.reservations = new ArrayList<>();
	}

	public List<Reservation> getReservations() {
		return this.reservations;
	}

	public Reservation createReservation(Reservation reservation) {

		for (Reservation item : this.reservations) {
			if (item.getId() == reservation.getId()
					&& item.getHour() == reservation.getHour()) {
				return null;
			}
		}
		this.reservations.add(reservation);
		return reservation;
	}

}
