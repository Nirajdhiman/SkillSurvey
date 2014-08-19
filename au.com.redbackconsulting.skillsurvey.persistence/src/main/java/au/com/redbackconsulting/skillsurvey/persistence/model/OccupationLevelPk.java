package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.Id;

public class OccupationLevelPk implements Serializable{

	public OccupationLevelPk() {
		// TODO Auto-generated constructor stub
	}
	
	private long occupationId;
	
	 
	private long levelId;
	public long getOccupationId() {
		return occupationId;
	}


	public void setOccupationId(long occupationId) {
		this.occupationId = occupationId;
	}


	public long getLevelId() {
		return levelId;
	}


	public void setLevelId(long levelId) {
		this.levelId = levelId;
	}


	
	
	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof FunctionOccupationspk)) {
			return false;
		}
		OccupationLevelPk castOther = (OccupationLevelPk)other;
		return 
			(this.occupationId == castOther.getOccupationId())
			&& (this.levelId== castOther.levelId);
	}

	public int hashCode() {
		final long prime = 31;
		long hash = 17;
		hash = hash * prime + this.occupationId;
		hash = hash * prime + this.levelId;
		
		return (int) hash;
	}
}
