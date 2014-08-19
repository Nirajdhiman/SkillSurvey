package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the role_assignment database table.
 * 
 */
public class RoleAssignmentPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;
	@Column
 	private long individualId;

	@Column 
	private long roleId;

	
	public RoleAssignmentPK() {
	}
	public long getIndividualId() {
		return this.individualId;
	}
	public void setIndividualId(int individualId) {
		this.individualId = individualId;
	}
	public long getRoleId() {
		return this.roleId;
	}
	public void setRoleId(long roleId) {
		this.roleId = roleId;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof ClaimAssignmentsPK)) {
			return false;
		}
		RoleAssignmentPK castOther = (RoleAssignmentPK)other;
		return 
			(this.individualId == castOther.individualId)
			&& (this.roleId == castOther.roleId);
	}

	public int hashCode() {
		final long prime = 31;
		long hash = 17;
		hash = hash * prime + this.individualId;
		hash = hash * prime + this.roleId;
		
		return (int) hash;
	}
}