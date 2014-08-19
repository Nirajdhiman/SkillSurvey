package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.*;

import java.util.Date;
import java.util.List;


/**
 * The persistent class for the survey database table.
 * 
 */
@Entity
@NamedQuery(name="Survey.findAll", query="SELECT s FROM Survey s")
public class Survey implements Serializable,IDBEntity {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long idsurvey;


	@Temporal(TemporalType.DATE)
	@Column(name="completedat")
	private Date completedAt;

	@Temporal(TemporalType.DATE)
	@Column(name="startedat")
	private Date startedAt;

//	//bi-directional many-to-one association to SurveryAnswer
//	@OneToMany(mappedBy="survey", fetch=FetchType.EAGER)
//	private List<SurveryAnswer> surveryAnswers;

	//bi-directional many-to-one association to Dapssco

//	//bi-directional many-to-one association to Individual
	@ManyToOne
	@JoinColumn(name="individualid", nullable=false)
	private Individual individual;

	@ManyToOne
	@JoinColumn(name="dapsscoid", nullable=false)
	private Dapssco dapssco;

	//bi-directional many-to-one association to Pathway
	@ManyToOne
	@JoinColumn(name="pathwayid",nullable=false)
	private Pathway pathway;
	
	
	
	
	
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(
		name="surveryanswer"
		, joinColumns={
			@JoinColumn(name="surveyid")
			}
		, inverseJoinColumns={
			@JoinColumn(name="uocquestionid")
			}
		)
	private List<UocQuestion> uocQuestions;


	public List<UocQuestion> getUocQuestion() {
		return uocQuestions;
	}

	public void setUocQuestion(List<UocQuestion> uocQuestions) {
		this.uocQuestions = uocQuestions;
	}

	public Survey() {
	}

	public long getIdsurvey() {
		return this.idsurvey;
	}

	public void setIdsurvey(long idsurvey) {
		this.idsurvey = idsurvey;
	}

	public Date getCompletedAt() {
		return this.completedAt;
	}

	public void setCompletedAt(Date completedAt) {
		this.completedAt = completedAt;
	}

	public Date getStartedAt() {
		return this.startedAt;
	}

	public void setStartedAt(Date startedAt) {
		this.startedAt = startedAt;
	}

 
	public Dapssco getDapssco() {
		return this.dapssco;
	}

	public void setDapssco(Dapssco dapssco) {
		this.dapssco = dapssco;
	}

 
	public Pathway getPathway() {
		return this.pathway;
	}

	public void setPathway(Pathway pathway) {
		this.pathway = pathway;
	}

	public Individual getIndividual() {
		return individual;
	}

	public void setIndividual(Individual individual) {
		this.individual = individual;
	}

}