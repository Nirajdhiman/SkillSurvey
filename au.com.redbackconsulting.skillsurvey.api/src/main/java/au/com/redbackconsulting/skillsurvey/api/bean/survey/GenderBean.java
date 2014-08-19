package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import com.google.gson.annotations.Expose;

public class GenderBean {
@Expose
private long genderId;

@Expose
private String genderName;

public long getGenderId() {
	return genderId;
}

public void setGenderId(long genderId) {
	this.genderId = genderId;
}

public String getGenderName() {
	return genderName;
}

public void setGenderName(String genderName) {
	this.genderName = genderName;
}

}
