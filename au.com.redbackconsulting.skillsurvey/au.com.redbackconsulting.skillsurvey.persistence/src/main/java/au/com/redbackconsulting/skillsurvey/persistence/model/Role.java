package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Access;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQuery;


/**
 * The persistent class for the role database table.
 * 
 */
@Entity
@NamedQuery(name="Role.findAll", query="SELECT r FROM Role r")

public class Role implements Serializable, IDBEntity {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long idrole;

	@Column(name="name", nullable=false, unique=true)
	private String name;

	private String description;
	

public Role() {
	}

public String getIdName(){
	return "idindividual";
}


	public long getIdrole() {
		return this.idrole;
	}

	public void setIdrole(long idrole) {
		this.idrole = idrole;
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
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(	name="claimassignment"	, joinColumns={
			@JoinColumn(name="roleId")	},	inverseJoinColumns={
			@JoinColumn(name="claimId")})
	
	private List<Claim> claims;

	public List<Claim> getClaims() {
		return claims;
	}
	
	



	public void setClaims(List<Claim> claims) {
		this.claims = claims;
	}
	
	@JoinTable(	name="roleassignment"	, joinColumns={
			@JoinColumn(name="roleid", referencedColumnName = "idrole", nullable=false)	},	inverseJoinColumns={
			@JoinColumn(name="individualid", referencedColumnName = "idindividual", nullable=false)})
	@ManyToMany(fetch=FetchType.EAGER)
	private List<Individual> individuals;
	
	
 
}