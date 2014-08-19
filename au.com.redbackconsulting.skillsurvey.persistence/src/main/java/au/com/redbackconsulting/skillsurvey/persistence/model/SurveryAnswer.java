package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;


/**
 * The persistent class for the survery_answer database table.
 * 
 */
@Entity
@Table(name="surveryanswer")
@NamedQueries({

@NamedQuery(name="SurveryAnswer.findAll", query="SELECT s FROM SurveryAnswer s"),

@NamedQuery(name="SurveryAnswer.findBySurveyIdOnly", query="SELECT s FROM SurveryAnswer s where s.surveyId = :surveyid"),

@NamedQuery(name= DBQueries.GET_ANSWER_COUNT, query ="SELECT s from SurveryAnswer s where s.surveyId= :surveyid and lower(s.value) = :answerValue" ),

@NamedQuery(name=DBQueries.GET_PRIMARY_ANSWERS, query ="SELECT s from SurveryAnswer s where s.surveyId= :surveyid  "),

@NamedQuery(name=DBQueries.GET_PRIMARY_ANSWERS_BY_ANSWERTYPE, query ="SELECT s from SurveryAnswer s where s.surveyId= :surveyid   and s.value= :value"),

@NamedQuery(name=DBQueries.GET_ALL_SECONDARY_ANSWERS, query ="SELECT s from SurveryAnswer s where s.surveyId= :surveyid ")
})

@IdClass(SurveryAnswerPK.class)
public class SurveryAnswer implements Serializable,IDBEntity {
	

	@Id
	@Column(name="surveyid")//, insertable=false, updatable=false)
	private long surveyId;

	@Id
	@Column(name="uocquestionid")	//, insertable=false, updatable=false)
	private String uocQuestionId;

	
//	public void setUocQuestion(UocQuestion uocQuestion) {
//		this.uocQuestion = uocQuestion;
//	}

	//private short isPrimary;
	
	
//	public boolean isPrimary() {
//		return isPrimary;
//	}
//
//	public void setPrimary(boolean isPrimary) {
//		this.isPrimary = isPrimary;
//	}
//
//	@ManyToOne(cascade=CascadeType.REFRESH)
//	@JoinColumn(name="uocquestionid", insertable= false, updatable=false)
//	private UocQuestion uocQuestion;
//	
//	public UocQuestion getUocQuestion() {
//		return uocQuestion;
//	}

//	public void setUocQuestion(UocQuestion uocQuestion) {
//		this.uocQuestion = uocQuestion;
//	}

	public long getSurveyId() {
		return surveyId;
	}

	public void setSurveyId(long surveyId) {
		this.surveyId = surveyId;
	}

	public String getUocQuestionId() {
		return uocQuestionId;
	}

	public void setUocQuestionId(String uocQuestionId) {
		this.uocQuestionId = uocQuestionId;
	}

	private static final long serialVersionUID = 1L;


	
	
	@Temporal(TemporalType.DATE)
	@Column(name="answeredat" ,nullable=false)
	private Date answeredAt;

	@Column(name="value", nullable=false)
	private String value;

//	@Column(name="valuerpl", nullable= true)
//	private String valueRPL;
	//bi-directional many-to-one association to Survey
 
//	public String getValueRPL() {
//		return valueRPL;
//	}
//
//	public void setValueRPL(String valueRPL) {
//		this.valueRPL = valueRPL;
//	}

	public SurveryAnswer() {
	}


	public Date getAnsweredAt() {
		return this.answeredAt;
	}

	public void setAnsweredAt(Date answeredAt) {
		this.answeredAt = answeredAt;
	}

	public String getValue() {
		return this.value;
	}

	public void setValue(String value) {
		this.value = value;
	}
}