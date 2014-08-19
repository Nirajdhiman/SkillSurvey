package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.annotations.Expose;

public class MenuBean {

	@Expose
	private String label;
	
	@Expose 
	private String key;
	
	@Expose
	 private boolean isDefault;
	
	
	@Expose 
	private List<MenuBean> submenu= new ArrayList<MenuBean>();
	
	public void addSubMenu(MenuBean menu){
		if(menu!=null)
			submenu.add(menu);
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public boolean isDefault() {
		return isDefault;
	}

	public void setDefault(boolean isDefault) {
		this.isDefault = isDefault;
	}

 
}
