package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import com.google.gson.annotations.Expose;

public class SelectablePathwaySurveyBean {
	
	
	@Expose
	private Long id;
	@Expose
	private String name;
	@Expose
	private String description;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}


}
