package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.*;

import java.util.Collection;
import java.util.Date;
import java.util.List;

/**
 * The persistent class for the individual database table.
 * 
 */
@Entity
@NamedQueries({
		@NamedQuery(name = "Individual.findAll", query = "SELECT i FROM Individual i") ,
		@NamedQuery(name= DBQueries.GET_LOGGED_IN_USER, query="SELECT i from Individual i where i.login = :name"),
		@NamedQuery(name=DBQueries.GET_PROFILE_STATUS, query ="SELECT I FROM Individual i where i.login =:name and (i.usertypefk is null or  i.gender is null or i.function is null or i.occupation is null or i.level is null  or i.ansofqtn1 is null or i.ansofqtn2 is null or i.location is null )")})
public class Individual implements Serializable, IDBEntity {
	private static final long serialVersionUID = 1L;

	public Individual() {
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idindividual")
	private long idindividual;

	@Column(name = "gender", nullable = true)
	private String gender;

	@Column(name = "login", nullable = false, unique = true)
	private String login;


	@Column(name = "password", nullable = false)
	private String password;
	

	@Column(name="pathway", nullable= true)
	private long pathway;
	
	public String getAnsofqtn1() {
		return ansofqtn1;
	}

	public void setAnsofqtn1(String ansofqtn1) {
		this.ansofqtn1 = ansofqtn1;
	}



	public String getAnsofqtn2() {
		return ansofqtn2;
	}

	public void setAnsofqtn2(String ansofqtn2) {
		this.ansofqtn2 = ansofqtn2;
	}

	public boolean isMylock() {
		return mylock;
	}

	public void setMylock(boolean mylock) {
		this.mylock = mylock;
	}

	public Date getMylockedOn() {
		return mylockedOn;
	}

	public void setMylockedOn(Date mylockedOn) {
		this.mylockedOn = mylockedOn;
	}

	public Date getPwChangeon() {
		return pwChangeon;
	}

	public void setPwChangeon(Date pwChangeon) {
		this.pwChangeon = pwChangeon;
	}

	public UserType getUsertypefk() {
		return usertypefk;
	}

	public void setUsertypefk(UserType usertypefk) {
		this.usertypefk = usertypefk;
	}

	private String ansofqtn1;
	
	private String ansofqtn2;
	

	@Column(name ="mylock")
	private boolean mylock;
	
	
	@Temporal(TemporalType.DATE)
	@Column(name="mylockedon")
	private Date mylockedOn;
	
	@Temporal(TemporalType.DATE)
	@Column(name="pwchangeon")
	private Date pwChangeon;


	
	public String getIdName() {
		return "idindividual";
	}

	// private long supervisorid;

	// private long supervisedid;

	// bi-directional many-to-one association to Department

	
	@JoinColumn(name="usertypeid")
	@ManyToOne(optional=false)
	private UserType usertypefk;
	
	
//	@JoinColumn(name = "departmentid")
//	// , nullable=false)
//	@ManyToOne(optional = false)
//	private Department department;

	
	@JoinColumn(name="locationid")
	@ManyToOne(optional=false)
	private Location location;
	
	
	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	@JoinColumn(name = "functionid")
	// , nullable=false)
	@ManyToOne(optional = false)
	private Function function;

	

	@JoinColumn(name = "occupation")
	// , nullable=false)
	@ManyToOne(optional = false)
	private Occupation occupation;

	@JoinColumn(name = "level")
	// , nullable= false)
	@ManyToOne(optional = false)
	private Level level;

 
	// bi-directional many-to-one association to Function
	@OneToMany(mappedBy = "individual")
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
 
	public long getPathway() {
		return pathway;
	}

	public void setPathway(long pathwayid) {
		this.pathway = pathwayid;
	}

	public Function getFunction() {
		return function;
	}

	public void setFunction(Function function) {
		this.function = function;
	}

	// bi-directional many-to-many association to Individual

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "supervisons", joinColumns = { @JoinColumn(name = "supervisorId") }, inverseJoinColumns = {

	@JoinColumn(name = "supervisedId") })
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

//	public String getName() {
//		return this.name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}

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