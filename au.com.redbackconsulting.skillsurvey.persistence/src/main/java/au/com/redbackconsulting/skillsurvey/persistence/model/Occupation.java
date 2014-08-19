package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


/**
 * The persistent class for the occupation database table.
 * 
 */
@Entity
@NamedQuery(name="Occupation.findAll", query="SELECT o FROM Occupation o")
public class Occupation implements Serializable, IDBEntity {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long idoccupation;

	private String description;
@Column(name="name", nullable=false, unique=true)
	private String name;




//*****start updation
//	//bi-directional many-to-one association to Dapssco
	@OneToMany(mappedBy="occupation", fetch=FetchType.EAGER)
	private List<Dapssco> dapsscos;

	
	@OneToMany(mappedBy="occupation", fetch=FetchType.EAGER)
	private List<Individual> individuals;
	//*****end updation
 
	
	
	public List<Individual> getIndividuals() {
		return individuals;
	}

	public void setIndividuals(List<Individual> individuals) {
		this.individuals = individuals;
	}

 

	public Occupation() {
	}

	public long getIdoccupation() {
		return this.idoccupation;
	}

	public void setIdoccupation(long idoccupation) {
		this.idoccupation = idoccupation;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Dapssco> getDapsscos() {
		return this.dapsscos;
	}

	public void setDapsscos(List<Dapssco> dapsscos) {
		this.dapsscos = dapsscos;
	}
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(
		name="occupationslevels"
		, joinColumns={
			@JoinColumn(name="occupationid")
			}
		, inverseJoinColumns={
			@JoinColumn(name="levelid")
			}
		)
 private List<Level> levels;



	public List<Level> getLevels() {
		return levels;
	}

	public void setLevels(List<Level> levels) {
		this.levels = levels;
	}
	
 
}