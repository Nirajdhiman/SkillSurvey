package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import au.com.redbackconsulting.skillsurvey.persistence.model.Provider;

import com.google.gson.annotations.Expose;

public class ProviderBean {
	
	@Expose
	private long id;
	
	@Expose
	private String providerName;
	
	
	@Expose
	private String description;
	
	public long getId() {
		return id;
	}





	public void setId(long id) {
		this.id = id;
	}





	public String getProviderName() {
		return providerName;
	}





	public void setProviderName(String providerName) {
		this.providerName = providerName;
	}





	public String getDescription() {
		return description;
	}





	public void setDescription(String description) {
		this.description = description;
	}





	public String getCourseURL() {
		return courseURL;
	}





	public void setCourseURL(String courseURL) {
		this.courseURL = courseURL;
	}





	@Expose
	private String courseURL;
	
	
	
	
	
	public static ProviderBean get(Provider entity){
		
		if(entity!=null)
		{
			ProviderBean bean = new ProviderBean();
			bean.setId(entity.getId());
			bean.setProviderName(entity.getName());
			bean.setDescription(entity.getDescription());
			bean.setCourseURL(entity.getCourseURL());
			return bean;
			
		}
		return null;
		
	}

}
