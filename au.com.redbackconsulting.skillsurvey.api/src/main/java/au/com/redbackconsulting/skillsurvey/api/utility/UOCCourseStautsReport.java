package au.com.redbackconsulting.skillsurvey.api.utility;

public class UOCCourseStautsReport {
	private String courseName;
	
	private String completed;

	private String futureLearning ;
	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getcompleted() {
		return completed;
	}

	public void setcompleted(String completed) {
		this.completed = completed;
	}

	public String getFutureLearning() {
		return futureLearning;
	}

	public void setFutureLearning(String futureLearning) {
		this.futureLearning = futureLearning;
	}
	
	

}
