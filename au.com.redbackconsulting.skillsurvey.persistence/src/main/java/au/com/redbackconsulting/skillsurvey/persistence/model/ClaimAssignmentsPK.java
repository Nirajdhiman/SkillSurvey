package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Id;

public class ClaimAssignmentsPK implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Column(name = "claimid")
	private long  claimId;
	

	
	@Column(name = "roleid")
	private long roleId;

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof RoleAssignmentPK)) {
			return false;
		}
		ClaimAssignmentsPK castOther = (ClaimAssignmentsPK)other;
		return 
			(this.claimId == castOther.claimId)
			&& (this.roleId == castOther.roleId);
	}

	public int hashCode() {
		final long prime = 31;
		long hash = 17;
		hash = hash * prime + this.claimId;
		hash = hash * prime + this.roleId;
		
		return (int) hash;
	}
}
