package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import java.util.List;

import au.com.redbackconsulting.skillsurvey.api.bean.NeedBean;
import au.com.redbackconsulting.skillsurvey.persistence.model.Need;

import com.google.gson.annotations.Expose;

public class NeedSurveyBean {
	
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
	private List<QuestionSurveyBean> questions;

//	public NeedBean getNeedBean() {
//		return needBean;
//	}
//
//	public void setNeedBean(NeedBean needBean) {
//		this.needBean = needBean;
//	}

	public List<QuestionSurveyBean> getQuestions() {
		return questions;
	}

	public void setQuestions(List<QuestionSurveyBean> questions) {
		this.questions = questions;
	}
	
	
//	@Expose
//	private List<UocSurveyBean> uocs;
//
//	public List<UocSurveyBean> getUocs() {
//		return uocs;
//	}
//
//	public void setUocs(List<UocSurveyBean> uocs) {
//		this.uocs = uocs;
//	}
//
//	public NeedBean getNeedBean() {
//		return needBean;
//	}
//
//	public void setNeedBean(NeedBean needBean) {
//		this.needBean = needBean;
//	}
//	
////	@Expose
////	private Long id;
////	
////	@Expose
////	private String name;
////	
////	@Expose
////	private String description;
////	
////	@Expose
////	
////	private List<UocSurveyBean> uocs;
////	
////
////	public List<UocSurveyBean> getUocs() {
////		return uocs;
////	}
////
////	public void setUocs(List<UocSurveyBean> uocs) {
////		this.uocs = uocs;
////	}
////
////	public Long getId() {
////		return id;
////	}
////
////	public void setId(Long id) {
////		this.id = id;
////	}
////
////	public String getName() {
////		return name;
////	}
////
////	public void setName(String name) {
////		this.name = name;
////	}
////
////	public String getDescription() {
////		return description;
////	}
////
////	public void setDescription(String description) {
////		this.description = description;
////	}
////
////	public static NeedSurveyBean get(Need entity) {
////		NeedSurveyBean bean = new NeedSurveyBean();
////	bean.setId(Long.valueOf(entity.getIdneed()));
////	bean.setDescription(entity.getDescription());
////	bean.setName(entity.getName());
////		return bean;
////	}
////	

}
