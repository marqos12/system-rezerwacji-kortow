package pl.fingo.internship.internship.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import pl.fingo.internship.internship.models.CourtStatistics;
import pl.fingo.internship.internship.models.PersonStatistic;
import pl.fingo.internship.internship.models.Reservation;
import pl.fingo.internship.internship.models.Statistics;

@Service
public class StatisticService {
	
	private Statistics statistics;

	public StatisticService() {
		this.statistics = new Statistics();
	}

	public void newReservation(Reservation reservation) {
		boolean newPerson = true;
		boolean newCourt = true;
		for (PersonStatistic item : this.statistics.getPersonStatistic()) {
			if (item.getName().equals(reservation.getName())) {
				this.statistics.incPersonStatistic(item);
				newPerson = false;
				break;
			}
		}
		if(newPerson) this.statistics.addPersonStatistic(new PersonStatistic(reservation.getName(),1));
		
		for (CourtStatistics item : this.statistics.getCourtStatistic()) {
			if (item.getId() == reservation.getId()) {
				this.statistics.incCourtStatistic(item);
				newCourt = false;
				break;
			}
		}
		if(newCourt)this.statistics.addCourtStatistic(new CourtStatistics(reservation.getId(),1)); 
	}
	
	public Statistics getStatistics() {
		return this.statistics;
	}

	
}
