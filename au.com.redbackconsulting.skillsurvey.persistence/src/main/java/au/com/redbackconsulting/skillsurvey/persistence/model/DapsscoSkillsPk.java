package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

public class DapsscoSkillsPk implements Serializable , IDBEntity{
	
	private static final long serialVersionUID = 1L;


 
//	@Column
     private String dapsscoId;
	
	
	
 	//@Column(name="UOC_GROUPID")
	private String uocGroupId;

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof DapsscoSkillsPk)) {
			return false;
		}
		DapsscoSkillsPk castOther = (DapsscoSkillsPk)other;
		return 
			(this.dapsscoId == castOther.dapsscoId)
			&& (this.uocGroupId == castOther.uocGroupId);
	}

	public int hashCode() {
		final long prime = 31;
		long hash = 17;
		hash = hash * prime + this.dapsscoId.hashCode();
		hash = hash * prime + this.uocGroupId.hashCode();
		
		return (int) hash;
	}



}
