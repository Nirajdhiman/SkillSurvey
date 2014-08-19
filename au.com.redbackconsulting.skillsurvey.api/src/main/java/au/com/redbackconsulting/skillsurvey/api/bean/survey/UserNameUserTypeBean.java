package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import com.google.gson.annotations.Expose;

public class UserNameUserTypeBean {
	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	@Expose
	private String userName;
	
	@Expose 
	private String userType;
	
	

}
