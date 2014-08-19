package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


/**
 * The persistent class for the dapssco database table.
 * 
 */
@Entity
@Table(name="dapssco")
@NamedQueries({
@NamedQuery(name="Dapssco.findAll", query="SELECT d FROM Dapssco d"),
@NamedQuery(name=DBQueries.GET_DAPSSCO_BY_LEVEL_OCCUP_FUNC, query = "SELECT d FROM Dapssco d  where d.levelId = :level and d.occupation = :occupation and d.function = :function")
})
public class Dapssco implements Serializable, IDBEntity {
	private static final long serialVersionUID = 1L;

	@Id
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private String iddepssco;

 
	@ManyToOne
	@JoinColumn(name="levelid", nullable=false)
	private Level levelId;

	

	public Function getFunction() {
		return function;
	}

	public void setFunction(Function function) {
		this.function = function;
	}

	//bi-directional many-to-one association to Occupation
	@ManyToOne
	@JoinColumn(name="occupationid", nullable = false)
	private Occupation occupation;

	///newly added
	@ManyToOne
	@JoinColumn(name="functionid", nullable = false)
	private Function function;

	
//	@ManyToMany(mappedBy="dapsscos")
//	private List<UocGroup> uocGroups;
//	public List<UocGroup> getUocGroups() {
//		return uocGroups;
//	}
//
//	public void setUocGroups(List<UocGroup> uocGroups) {
//		this.uocGroups = uocGroups;
//	}

	public Level getLevelId() {
		return levelId;
	}

	public void setLevelId(Level levelId) {
		this.levelId = levelId;
	}
	 
	public List<Level> getLevel() {
		return level;
	}

	public void setLevel(List<Level> level) {
		this.level = level;
	}

	//	************* by sanjay
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(
		name="DapsscoSkills"
		, joinColumns={
			@JoinColumn(name="dapsscoId")
			}
		, inverseJoinColumns={
			@JoinColumn(name="uocGroupId")
			}
		)
	private List<UocGroup> uocgroups;
	
	
	
	public List<UocGroup> getUocGroups() {
		return uocgroups;
	}

	public void setUocGroups(List<UocGroup> uocs) {
		this.uocgroups = uocgroups;
	}

	//bi-directional many-to-many association to UocGroup
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(
		name="dapsscolevel"
		, joinColumns={
			@JoinColumn(name="dapsscoId")
			}
		, inverseJoinColumns={
			@JoinColumn(name="levelId")
			}
		)
	private List<Level> level;
	
//	*****************end sanjay
	
 
	//bi-directional many-to-one association to Survey
	@OneToMany(mappedBy="dapssco", fetch=FetchType.EAGER)
	private List<Survey> surveys;

	public Dapssco() {
	}

	public String getIddepssco() {
		return this.iddepssco;
	}

	public void setIddepssco(String iddepssco) {
		this.iddepssco = iddepssco;
	}

//	public long getLevelId() {
//		return this.levelId;
//	}
//
//	public void setLevelId(long levelId) {
//		this.levelId = levelId;
//	}

	public Occupation getOccupation() {
		return this.occupation;
	}

	public void setOccupation(Occupation occupation) {
		this.occupation = occupation;
	}

//	public List<UocGroup> getUocGroups() {
//		return this.uocGroups;
//	}
//
//	public void setUocGroups(List<UocGroup> uocGroups) {
//		this.uocGroups = uocGroups;
//	}

//	public List<Level> getLevels() {
//		return this.levels;
//	}
//
//	public void setLevels(List<Level> levels) {
//		this.levels = levels;
//	}

	public List<Survey> getSurveys() {
		return this.surveys;
	}

	public void setSurveys(List<Survey> surveys) {
		this.surveys = surveys;
	}

	public Survey addSurvey(Survey survey) {
		getSurveys().add(survey);
		survey.setDapssco(this);

		return survey;
	}

	public Survey removeSurvey(Survey survey) {
		getSurveys().remove(survey);
		survey.setDapssco(null);

		return survey;
	}

//	@Override
//	public Long getId() {
//		// TODO Auto-generated method stub
//		return null;
//	}

}