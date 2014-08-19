package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import au.com.redbackconsulting.skillsurvey.api.bean.NeedBean;
import au.com.redbackconsulting.skillsurvey.persistence.model.Need;

import com.google.gson.annotations.Expose;

public class NeedSurveyBean implements Serializable {
	
//	@Expose
//	private NeedBean needBean;
	
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

	@Expose 
	private List<QuestionSurveyBean> questions= new ArrayList<QuestionSurveyBean>();

 
	public List<QuestionSurveyBean> getQuestions() {
		return questions;
	}

	public void setQuestions(List<QuestionSurveyBean> questions) {
		this.questions = questions;
	}
	
 
}
