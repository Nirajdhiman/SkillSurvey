package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import com.google.gson.annotations.Expose;

public class UnitOfCompetencyBean {
@Expose
private String uocName;

@Expose
private String recognition;


public String getRecognition() {
	return recognition;
}

public void setRecognition(String recognition) {
	this.recognition = recognition;
}

public String getUocName() {
	return uocName;
}

public void setUocName(String uocName) {
	this.uocName = uocName;
}
 
 
}
