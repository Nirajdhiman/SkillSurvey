package au.com.redbackconsulting.skillsurvey.api.bean;

import java.util.List;

import au.com.redbackconsulting.skillsurvey.api.bean.survey.NeedSurveyBean;
import au.com.redbackconsulting.skillsurvey.persistence.model.Pathway;

import com.google.gson.annotations.Expose;

public class PathwayBean {
	@Expose
	private Long id;
	@Expose
	private String name;
	@Expose
	private String description;

//	@Expose
//	private List<NeedSurveyBean> needs;
//	public List<NeedSurveyBean> getNeeds() {
//		return needs;
//	}
//
//	public void setNeeds(List<NeedSurveyBean> needs) {
//		this.needs = needs;
//	}

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

	public static PathwayBean get(Pathway entity) {
		PathwayBean bean = new PathwayBean();
		bean.setDescription(entity.getDescription());
		
		bean.setId(entity.getIdpathway());
		bean.setName(entity.getName());
		return bean;
	}
	
	

}
