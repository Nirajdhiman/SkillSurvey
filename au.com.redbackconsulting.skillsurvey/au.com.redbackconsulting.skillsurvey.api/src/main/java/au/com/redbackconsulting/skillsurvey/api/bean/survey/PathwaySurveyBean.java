package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import java.util.List;

import au.com.redbackconsulting.skillsurvey.api.bean.PathwayBean;
import au.com.redbackconsulting.skillsurvey.persistence.model.Pathway;

import com.google.gson.annotations.Expose;

public class PathwaySurveyBean {
	
	
	@Expose
	private Long id;
	@Expose
	private String name;
	@Expose
	private String description;

 
@Expose
private List<NeedSurveyBean> needs ;

 
//public void setNeedBeans(List<NeedSurveyBean> needBeans) {
//	this.needs = needBeans;
//}

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

public List<NeedSurveyBean> getNeeds() {
	return needs;
}

public void setNeeds(List<NeedSurveyBean> needs) {
	this.needs = needs;
}

 
 	

}
