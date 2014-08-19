package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


/**
 * The persistent class for the question database table.
 * 
 */
@Entity
@NamedQuery(name="Question.findAll", query="SELECT q FROM Question q")
public class Question implements Serializable, IDBEntity {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long idquestion;

	private String style;
@Column(name="text", nullable=false)
	private String text;

//	//bi-directional many-to-one association to UocQuestion
	@OneToMany(mappedBy="question", fetch=FetchType.EAGER)
	private List<UocQuestion> uocQuestions;

	public Question() {
	}

	public long getIdquestion() {
		return this.idquestion;
	}

	public void setIdquestion(long idquestion) {
		this.idquestion = idquestion;
	}

	public String getStyle() {
		return this.style;
	}

	public void setStyle(String style) {
		this.style = style;
	}

	public String getText() {
		return this.text;
	}

	public void setText(String text) {
		this.text = text;
	}
//
	public List<UocQuestion> getUocQuestions() {
		return this.uocQuestions;
	}

	public void setUocQuestions(List<UocQuestion> uocQuestions) {
		this.uocQuestions = uocQuestions;
	}

	public UocQuestion addUocQuestion(UocQuestion uocQuestion) {
		getUocQuestions().add(uocQuestion);
		uocQuestion.setQuestion(this);

		return uocQuestion;
	}

	public UocQuestion removeUocQuestion(UocQuestion uocQuestion) {
		getUocQuestions().remove(uocQuestion);
		uocQuestion.setQuestion(null);

		return uocQuestion;
	}

//	@Override
//	public Long getId() {
//		// TODO Auto-generated method stub
//		return idquestion;
//	}

}