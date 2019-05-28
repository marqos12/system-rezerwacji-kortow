package pl.fingo.internship.internship.models;

public class CourtStatistics {
	private long id;
	private long value;
	
	public CourtStatistics() {}
	public CourtStatistics(long id, long value) {
		this.setId(id);
		this.setValue(value);
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getValue() {
		return value;
	}
	public void setValue(long value) {
		this.value = value;
	}
}
