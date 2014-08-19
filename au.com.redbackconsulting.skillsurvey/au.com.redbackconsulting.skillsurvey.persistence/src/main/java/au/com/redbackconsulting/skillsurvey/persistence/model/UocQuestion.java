package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


/**
 * The persistent class for the uoc_question database table.
 * 
 */
@Entity
@Table(name="uoc_question")
@NamedQuery(name="UocQuestion.findAll", query="SELECT u FROM UocQuestion u")
public class UocQuestion implements Serializable , IDBEntity{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long iduocquestion;
 
	//bi-directional many-to-one association to Question

	@ManyToOne
	@JoinColumn(name="questionid" , nullable=false)

	private Question question;

	//bi-directional many-to-one association to Uoc

	@ManyToOne
	@JoinColumn(name="uocid", nullable=false)
	private Uoc uoc;

	public UocQuestion() {
	}

	public long getIduocquestion() {
		return this.iduocquestion;
	}

	public void setIduocquestion(long iduocquestion) {
		this.iduocquestion = iduocquestion;
	}

//	public List<SurveryAnswer> getSurveryAnswers() {
//		return this.surveryAnswers;
//	}
//
//	public void setSurveryAnswers(List<SurveryAnswer> surveryAnswers) {
//		this.surveryAnswers = surveryAnswers;
//	}
//
//	public SurveryAnswer addSurveryAnswer(SurveryAnswer surveryAnswer) {
//		getSurveryAnswers().add(surveryAnswer);
//		surveryAnswer.setUocQuestion(this);
//
//		return surveryAnswer;
//	}
//
//	public SurveryAnswer removeSurveryAnswer(SurveryAnswer surveryAnswer) {
//		getSurveryAnswers().remove(surveryAnswer);
//		surveryAnswer.setUocQuestion(null);
//
//		return surveryAnswer;
//	}

	public Question getQuestion() {
		return this.question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public Uoc getUoc() {
		return this.uoc;
	}

	public void setUoc(Uoc uoc) {
		this.uoc = uoc;
	}

//	@Override
//	public Long getId() {
//		// TODO Auto-generated method stub
//		return iduocquestion;
//	}

}