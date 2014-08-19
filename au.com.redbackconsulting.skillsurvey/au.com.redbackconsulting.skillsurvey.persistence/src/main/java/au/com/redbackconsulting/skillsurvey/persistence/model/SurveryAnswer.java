package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.*;


/**
 * The persistent class for the survery_answer database table.
 * 
 */
@Entity
@Table(name="surveryanswer")
@NamedQuery(name="SurveryAnswer.findAll", query="SELECT s FROM SurveryAnswer s")
@IdClass(SurveryAnswerPK.class)
public class SurveryAnswer implements Serializable,IDBEntity {
	

	@Id
	@Column(name="surveyid")//, insertable=false, updatable=false)
	private long surveyId;

	@Id
	@Column(name="uocquestionid")	//, insertable=false, updatable=false)
	private long uocQuestionId;

	
	
	
	public long getSurveyId() {
		return surveyId;
	}

	public void setSurveyId(long surveyId) {
		this.surveyId = surveyId;
	}

	public long getUocQuestionId() {
		return uocQuestionId;
	}

	public void setUocQuestionId(long uocQuestionId) {
		this.uocQuestionId = uocQuestionId;
	}

	private static final long serialVersionUID = 1L;


	
	
	
	@Column(name="answeredat" ,nullable=false)
	private String answeredAt;

	@Column(name="value", nullable=false)
	private String value;

	//bi-directional many-to-one association to Survey
 
	public SurveryAnswer() {
	}


	public String getAnsweredAt() {
		return this.answeredAt;
	}

	public void setAnsweredAt(String answeredAt) {
		this.answeredAt = answeredAt;
	}

	public String getValue() {
		return this.value;
	}

	public void setValue(String value) {
		this.value = value;
	}
}