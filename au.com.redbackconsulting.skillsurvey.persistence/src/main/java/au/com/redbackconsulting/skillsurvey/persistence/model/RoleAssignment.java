package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.*;


/**
 * The persistent class for the role_assignment database table.
 * 
 */
@Entity
@Table(name="roleassignment")
@IdClass(RoleAssignmentPK.class)
@NamedQuery(name="RoleAssignment.findAll", query="SELECT r FROM RoleAssignment r")
public class RoleAssignment implements Serializable,IDBEntity {
	public long getRoleId() {
		return roleId;
	}




	public void setRoleId(long roleId) {
		this.roleId = roleId;
	}




	public long getIndividualId() {
		return individualId;
	}




	public void setIndividualId(long individualId) {
		this.individualId = individualId;
	}




	private static final long serialVersionUID = 1L;

	//@EmbeddedId
	//private RoleAssignmentPK idpk;
@Id
@Column(name="roleid")
private long roleId;

@Id 
@Column(name="individualid")
private long individualId;




	public RoleAssignment() {
	}


}