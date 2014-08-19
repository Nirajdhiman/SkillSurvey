package au.com.redbackconsulting.skillsurvey.api.bean.survey;
 

import com.google.gson.annotations.Expose;

public class QuestionSurveyBean {
	@Expose
	private long id;
	@Expose
	private String question;
	@Expose
	private String style;
	
	@Expose
	private short isPrimary;

	public short isPrimary() {
		return isPrimary;
	}

	public void setPrimary(short isPrimary) {
		this.isPrimary = isPrimary;
	}

	@Expose
	private String answer ="No Answer";
	
	@Expose 
	private String answerRPL= "No RPL" ;
	
	@Expose
	private String courseId;
	
	
	public String getCourseId() {
		return courseId;
	}

	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}

	public String getAnswerRPL() {
		return answerRPL;
	}

	public void setAnswerRPL(String answerRPL) {
		this.answerRPL = answerRPL;
	}

	@Expose 
	private String uocQuestionId;
	
	@Expose
	private String uocName;
	
	
	
//	@Expose
//	private boolean no = true;
//	
	
//	public boolean getYes() {
//		return yes;
//	}
//
//	public void setYes(boolean yes) {
//		this.yes = yes;
//	}
//
//	public boolean getNo() {
//		return no;
//	}
//
//	public void setNo(boolean no) {
//		this.no = no;
//	}

	public String getUocName() {
		return uocName;
	}

	public void setUocName(String uocName) {
		this.uocName = uocName;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public String getUocQuestionId() {
		return uocQuestionId;
	}

	public void setUocQuestionId(String uocQuestionId) {
		this.uocQuestionId = uocQuestionId;
	}

	public long getsurveyId() {
		return id;
	}

	public void setSurveyId(long id) {
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

//	public static QuestionSurveyBean get(Question entity) {
//		QuestionSurveyBean bean = new QuestionSurveyBean();
//		bean.setId(entity.getIdquestion());
//		bean.setStyle(entity.getStyle());
//		bean.setQuestion(entity.getText());
//		return bean;
//	}


}
