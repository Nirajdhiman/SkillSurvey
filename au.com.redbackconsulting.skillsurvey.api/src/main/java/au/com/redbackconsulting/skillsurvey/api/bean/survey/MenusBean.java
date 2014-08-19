package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import java.util.ArrayList;
import java.util.List;
 

import com.google.gson.annotations.Expose;

public class MenusBean {
	@Expose
	private String userType;
	
	@Expose 
	private List<MenuBean> MenuItems = new ArrayList<MenuBean>();

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}
	
	public void add(MenuBean menuBean){
		if(menuBean!=null)
		MenuItems.add(menuBean);
	}

}
