package pl.fingo.internship.internship.models;

public class Reservation {
	private long id;
	private String name;
	private long hour;
	
	public Reservation() {}
	
	public Reservation(long id, String name, long hour) {
		this.id = id;
		this.name = name;
		this.hour = hour;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getHour() {
		return hour;
	}
	public void setHour(long hour) {
		this.hour = hour;
	}
	
}
