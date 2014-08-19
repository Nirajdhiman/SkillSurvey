package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
//@Embeddable
public class DapsscoLevelPk implements Serializable {
	private static final long serialVersionUID = 1L;
	

	@Column(name = "DEPSSCO_ID")
private long dapsscoId;
	
	

	@Column(name = "LEVELID")	
private long levelId;
	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof SupervisionPK)) {
			return false;
		}
		DapsscoLevelPk castOther = (DapsscoLevelPk)other;
		return 
			(this.dapsscoId == castOther.dapsscoId)
			&& (this.levelId == castOther.levelId);
	}

	public int hashCode() {
		final long prime = 31;
		long hash = 17;
		hash = hash * prime + this.dapsscoId;
		hash = hash * prime + this.levelId;
		
		return (int) hash;
	}


}
