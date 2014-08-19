package au.com.redbackconsulting.skillsurvey.api.bean.survey;

 
import java.io.Serializable;
import java.util.List;

import au.com.redbackconsulting.skillsurvey.api.bean.IndividualBean;
 


import au.com.redbackconsulting.skillsurvey.api.bean.UocBean;

import com.google.gson.annotations.Expose;

public class SurveyDataBean implements Serializable  {
 

	@Expose
	private String needName;
	@Expose
	private String needDescription;
	
 
 
 	
	public String getNeedDescription() {
		return needDescription;
	}

	public void setNeedDescription(String needDescription) {
		this.needDescription = needDescription;
	}

	public String getNeedName() {
		return needName;
	}

	public void setNeedName(String needName) {
		this.needName = needName;
	}

	public List<QuestionSurveyBean> getQuestions() {
		return questions;
	}

	public void setQuestions(List<QuestionSurveyBean> questions) {
		this.questions = questions;
	}

	@Expose
	private List<QuestionSurveyBean> questions ;
	

	@Expose
	private List<UocBean> courseItems;



	public List<UocBean> getCourseItems() {
		return courseItems;
	}

	public void setCourseItems(List<UocBean> courseItems) {
		this.courseItems = courseItems;
	}
	
 
 	
	
	

 
//	
	
}
