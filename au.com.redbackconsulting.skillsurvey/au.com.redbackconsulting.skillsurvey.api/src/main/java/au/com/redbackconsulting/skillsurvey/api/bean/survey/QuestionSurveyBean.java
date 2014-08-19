package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import au.com.redbackconsulting.skillsurvey.persistence.model.Question;

import com.google.gson.annotations.Expose;

public class QuestionSurveyBean {
	@Expose
	private Long id;
	@Expose
	private String question;
	@Expose
	private String style;

	@Expose
	private boolean yes= false;
	
	@Expose
	private boolean no = true;
	
	
	public boolean getYes() {
		return yes;
	}

	public void setYes(boolean yes) {
		this.yes = yes;
	}

	public boolean getNo() {
		return no;
	}

	public void setNo(boolean no) {
		this.no = no;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String questionText) {
		this.question= questionText;
	}

	public String getStyle() {
		return style;
	}

	public void setStyle(String style) {
		this.style = style;
	}

	public static QuestionSurveyBean get(Question entity) {
		QuestionSurveyBean bean = new QuestionSurveyBean();
		bean.setId(entity.getIdquestion());
		bean.setStyle(entity.getStyle());
		bean.setQuestion(entity.getText());
		return bean;
	}


}
