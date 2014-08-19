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

@NamedQueries({
	@NamedQuery(name="Survey.findAll", query="SELECT s FROM Survey s"),
    @NamedQuery(name="Survey.findBy.Individual.dapsco.pathway", query="select s from Survey s where  s.individual = :individual and s.need = :need  and s.dapssco = :dapssco " )
	
    //ORDER by s.completedAt DESC"),
}) 

 


//@NamedQuery(name="Survey.findBy.Individual.dapsco.pathway", query="select s from Survey s where s.individual = :individual and s.pathway = :pathway and s.dapssco = :dapssco and s.completedAt is null"),
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
//	@OneToMany
//	@JoinColumn(name="idsurvey" , insertable=false, updatable=false)
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
	@JoinColumn(name="needid",nullable=false)
	private Need need;
	
	  
	
 

	public List<UocQuestion> getUocQuestions() {
		return uocQuestions;
	}

	public void setUocQuestions(List<UocQuestion> uocQuestions) {
		this.uocQuestions = uocQuestions;
	}

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

 
	public Need getNeed() {
		return this.need;
	}

	public void setNee(Need need) {
		this.need = need;
	}

	public Individual getIndividual() {
		return individual;
	}

	public void setIndividual(Individual individual) {
		this.individual = individual;
	}

}