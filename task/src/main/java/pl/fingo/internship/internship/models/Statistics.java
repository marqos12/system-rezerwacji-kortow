package pl.fingo.internship.internship.models;

import java.util.ArrayList;
import java.util.List;

public class Statistics {
	
	private List<PersonStatistic> personStatistic;
	private List<CourtStatistics> courtStatistic;
	
	public Statistics(List<PersonStatistic> personStatistic,List<CourtStatistics> courtStatistic) {
		this.setCourtStatistic(courtStatistic);
		this.setPersonStatistic(personStatistic);
	}
	
	public Statistics() {
		this.setCourtStatistic(new ArrayList<CourtStatistics>());
		this.setPersonStatistic(new ArrayList<PersonStatistic>());
	}

	public List<PersonStatistic> getPersonStatistic() {
		return personStatistic;
	}

	public void setPersonStatistic(List<PersonStatistic> personStatistic) {
		this.personStatistic = personStatistic;
	}

	public List<CourtStatistics> getCourtStatistic() {
		return courtStatistic;
	}

	public void setCourtStatistic(List<CourtStatistics> courtStatistic) {
		this.courtStatistic = courtStatistic;
	}
	
	public void addCourtStatistic(CourtStatistics courtStatistic) {
		this.courtStatistic.add(courtStatistic);
	}
	
	public void addPersonStatistic(PersonStatistic personStatistic) {
		this.personStatistic.add(personStatistic);
	}

	public void incCourtStatistic(CourtStatistics courtStatistic) {
		int id = 0;
		for (CourtStatistics item : this.courtStatistic) {
			if (item.getId() == courtStatistic.getId())
				this.courtStatistic.get(id).setValue(this.courtStatistic.get(id).getValue()+1);
			id++;
		}
	}
	
	public void incPersonStatistic(PersonStatistic personStatistic) {
		int id = 0;
		for (PersonStatistic item : this.personStatistic) {
			if (item.getName().equals(personStatistic.getName()))
				this.personStatistic.get(id).setValue(this.personStatistic.get(id).getValue()+1);
			id++;
		}
	}
}
