package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;
import java.lang.String;
import java.util.List;

import javax.persistence.*;

/**
 * Entity implementation class for Entity: UserType
 *
 */
 
@Entity
@NamedQuery(name="UserType.findAll", query="SELECT u FROM UserType u")

public class UserType implements Serializable, IDBEntity {

	   
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;

	private String userType;
	
	private String description;
	
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	private static final long serialVersionUID = 1L;

	
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(
		name="usertypeneeds"
		, joinColumns={
			@JoinColumn(name="idusertype")
			}
		, inverseJoinColumns={
			@JoinColumn(name="idneed")
			}
		)
	private List<Need> needs;

	
	
	public List<Need> getNeeds() {
		return needs;
	}
	public void setNeeds(List<Need> needs) {
		this.needs = needs;
	}
	public UserType() {
		super();
	}   
	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}   
	public String getUserType() {
		return this.userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}
   
}
