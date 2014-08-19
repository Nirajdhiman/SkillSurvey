package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import au.com.redbackconsulting.skillsurvey.persistence.model.UserType;

import com.google.gson.annotations.Expose;

public class UserTypeBean {
	
	
@Expose
private long userId;

@Expose 
private String userTypeName;

@Expose
String userTypeDescription ;


public String getUserTypeDescription() {
	return userTypeDescription;
}

public void setUserTypeDescription(String userTypeDescription) {
	this.userTypeDescription = userTypeDescription;
}

public long getUserId() {
	return userId;
}

public void setUserId(long userId) {
	this.userId = userId;
}

public String getUserTypeName() {
	return userTypeName;
}

public void setUserTypeName(String userTypeName) {
	this.userTypeName = userTypeName;
}


public static UserTypeBean get (UserType entity){
	UserTypeBean bean = new UserTypeBean(); 
	try {
		if(entity!=null){
			bean.setUserId(entity.getId());
			bean.setUserTypeName(entity.getUserType());
			bean.setUserTypeDescription(entity.getDescription());
		}
		return bean;
	} catch (Exception e) {
	return bean;
	}
}
}
