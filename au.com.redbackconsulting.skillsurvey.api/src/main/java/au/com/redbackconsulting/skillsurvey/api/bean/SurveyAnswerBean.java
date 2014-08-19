package au.com.redbackconsulting.skillsurvey.api.bean;

import java.util.Date;

import au.com.redbackconsulting.skillsurvey.persistence.model.SurveryAnswer;

import com.google.gson.annotations.Expose;

public class SurveyAnswerBean {
	@Expose
	private Long uoc_QuestionId;
	@Expose
	private Long surveyId;
	@Expose
	private String value;
	@Expose
	private Date answeredAt;
	
	
	@Expose
	private String uocQuestionName;
	
	@Expose
	private String surveyName;

	public String getUocQuestionName() {
		return uocQuestionName;
	}

	public void setUocQuestionName(String uocQuestionName) {
		this.uocQuestionName = uocQuestionName;
	}

	public String getSurveyName() {
		return surveyName;
	}

	public void setSurveyName(String surveyName) {
		this.surveyName = surveyName;
	}

	public Long getUoc_QuestionId() {
		return uoc_QuestionId;
	}

	public void setUoc_QuestionId(Long uoc_QuestionId) {
		this.uoc_QuestionId = uoc_QuestionId;
	}

	public Long getSurveyId() {
		return surveyId;
	}

	public void setSurveyId(Long surveyId) {
		this.surveyId = surveyId;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public Date getAnsweredAt() {
		return answeredAt;
	}

	public void setAnsweredAt(Date answeredAt) {
		this.answeredAt = answeredAt;
	}

	public static SurveyAnswerBean get(SurveryAnswer entity) {
		SurveyAnswerBean bean = new SurveyAnswerBean();
		bean.setAnsweredAt(entity.getAnsweredAt());
	
		bean.setValue(entity.getValue());
		bean.setSurveyId(Long.valueOf(entity.getSurveyId()));
		
		bean.setUoc_QuestionId(Long.valueOf(entity.getUocQuestionId()));
		bean.setSurveyName("surveyName");
		bean.setUocQuestionName("uocQuestionName");
		
		return bean;
	}
	
	

}
