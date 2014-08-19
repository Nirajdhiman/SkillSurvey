package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Id;

public class SupervisionPK  implements Serializable {
	

	private static final long serialVersionUID = 1L;


	//@Column(name="SUPERVISORID")
private long supervisorId;
	
	

//	@Column(name="SUPERVISEDID")
	private long supervisedId;
	
	
	  public SupervisionPK() {
		}
	  
		
	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof SupervisionPK)) {
			return false;
		}
		SupervisionPK castOther = (SupervisionPK)other;
		return 
			(this.supervisedId == castOther.supervisedId)
			&& (this.supervisorId == castOther.supervisorId);
	}

	public int hashCode() {
		final long prime = 31;
		long hash = 17;
		hash = hash * prime + this.supervisedId;
		hash = hash * prime + this.supervisorId;
		
		return (int) hash;
	}


}
