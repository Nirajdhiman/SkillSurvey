package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: UserTypeNeeds
 *
 */
@Entity
@Table(name="usertypeneeds")

@IdClass(UserTypeNeedsPK.class)
public class UserTypeNeeds implements Serializable, IDBEntity {

	   
	@Id
	private long idusertype;   
	@Id
	private long idneed;
	private static final long serialVersionUID = 1L;

	public UserTypeNeeds() {
		super();
	}  
	
//	@ManyToOne
//	@JoinColumn(name="idusertype")
//	private UserType userType;
//	
//	@ManyToOne
//	@JoinColumn(name="idneed")
//	private Need need;
	
//	public UserType getUserType() {
//		return userType;
//	}
//
//	public void setUserType(UserType userType) {
//		this.userType = userType;
//	}
//
//	public Need getNeed() {
//		return need;
//	}
//
//	public void setNeed(Need need) {
//		this.need = need;
//	}

	public long getIdusertype() {
		return this.idusertype;
	}

	public void setIdusertype(long idusertype) {
		this.idusertype = idusertype;
	}   
	public long getIdneed() {
		return this.idneed;
	}

	public void setIdneed(long idneed) {
		this.idneed = idneed;
	}
   
}
