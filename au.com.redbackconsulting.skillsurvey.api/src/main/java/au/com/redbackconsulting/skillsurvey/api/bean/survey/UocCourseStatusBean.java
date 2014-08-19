package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import com.google.gson.annotations.Expose;

public class UocCourseStatusBean {
@Expose
private String uocName;

//@Expose
//private String ranking;


//public String getUocName() {
//	return uocName;
//}
//
//public void setUocName(String uocName) {
//	this.uocName = uocName;
//}

//public String getRanking() {
//	return ranking;
//}
//
//public void setRanking(String ranking) {
//	this.ranking = ranking;
//}

public String getCompleted() {
	return completed;
}

public void setCompleted(String completed) {
	this.completed = completed;
}


@Expose
private String completed;

@Expose
private String fututeLearning;
public String getFututeLearning() {
	return fututeLearning;
}

public void setFututeLearning(String fututeLearning) {
	this.fututeLearning = fututeLearning;
}

public String getCourseName() {
	return uocName;
}

public void setCourseName(String courseName) {
	this.uocName = courseName;
}

 
}
