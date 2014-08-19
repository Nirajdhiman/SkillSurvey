package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
//@Embeddable
public class UocGroupMembersPk implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Column(name="uocgroup_id")
	private String uoc_GroupId;

	@Column(name="uoc_id")
//	private long uoc_Id;
	private String uoc_Id;
	 public UocGroupMembersPk() {
		// TODO Auto-generated constructor stub
	}
	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof RoleAssignmentPK)) {
			return false;
		}
		UocGroupMembersPk castOther = (UocGroupMembersPk)other;
		return 
			(this.uoc_GroupId == castOther.uoc_GroupId)
			&& (this.uoc_Id == castOther.uoc_Id);
	}

	public int hashCode() {
		final long prime = 31;
		long hash = 17;
		hash = hash * prime + this.uoc_GroupId.hashCode();
		hash = hash * prime +  this.uoc_Id.hashCode();
		
		return (int) hash;
	}

}
