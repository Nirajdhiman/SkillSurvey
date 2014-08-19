package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.*;

import java.util.Collection;
import java.util.List;


/**
 * The persistent class for the individual database table.
 * 
 */
@Entity
@NamedQuery(name="Individual.findAll", query="SELECT i FROM Individual i")
public class Individual implements Serializable,IDBEntity {
	private static final long serialVersionUID = 1L;

	public Individual() {
		}
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	@Column(name="idindividual" )
	private long idindividual;

	@Column(name="gender", nullable=false)
	private String gender;

	@Column(name="login", nullable=false, unique=true)
	private String login;

	@Column(name="name", nullable=false)
	private String name;

	@Column(name="password", nullable=false)
	private String password;
	
	public String getIdName(){
		return "idindividual";
	}
	
	
	//private long supervisorid;
	
//	private long supervisedid;

	//bi-directional many-to-one association to Department
	
	@JoinColumn(name="departmentid", nullable=false)
	@ManyToOne(optional=false)
	private Department department;
	
	@JoinColumn(name="functionid", nullable=false)
	@ManyToOne(optional=false)
	private Function function;

	@JoinColumn(name="occupation", nullable=false)
	@ManyToOne(optional=false)
	private Occupation occupation;

	@JoinColumn(name="level", nullable= false)
	@ManyToOne(optional=false)
	private Level level;

	//bi-directional many-to-one association to Function
	@OneToMany( mappedBy="individual")
	private List<Survey> surveyes;

	public Level getLevel() {
		return level;
	}

	public List<Survey> getSurveyes() {
		return surveyes;
	}

	public void setSurveyes(List<Survey> surveyes) {
		this.surveyes = surveyes;
	}

	public void setLevel(Level level) {
		this.level = level;
	}

	public Occupation getOccupation() {
		return occupation;
	}

	public void setOccupation(Occupation occupation) {
		this.occupation = occupation;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	public Function getFunction() {
		return function;
	}

	public void setFunction(Function function) {
		this.function = function;
	}


	
	//bi-directional many-to-many association to Individual
	
	
	

	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(	name="supervisons"	, joinColumns={
			@JoinColumn(name="supervisorId")	},	inverseJoinColumns={
	
			@JoinColumn(name="supervisedId")})

	private List<Individual> subOrdinates;
  
	//	
//
	public long getIdindividual() {
		return this.idindividual;
	}

	public void setIdindividual(long idindividual) {
		this.idindividual = idindividual;
	}

	public String getGender() {
		return this.gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getLogin() {
		return this.login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Individual> getSubOrdinates() {
		return subOrdinates;
	}

	public void setSubOrdinates(List<Individual> subOrdinates) {
		this.subOrdinates = subOrdinates;
	}
 
}