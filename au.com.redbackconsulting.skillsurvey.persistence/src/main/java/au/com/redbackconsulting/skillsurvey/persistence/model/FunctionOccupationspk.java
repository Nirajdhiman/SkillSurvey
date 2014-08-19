package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;
//@Embeddable
public class FunctionOccupationspk implements Serializable{
	public FunctionOccupationspk() {
		// TODO Auto-generated constructor stub
	}

	
	
	private static final long serialVersionUID = 1L;


	@Column(name="functionid")
private long functionId;


@Column(name="occupationid")
private long occupationid;



public long getFunctionId() {
	return functionId;
}


public void setFunctionId(long functionId) {
	this.functionId = functionId;
}


public long getOccupationid() {
	return occupationid;
}


public void setOccupationid(long occupationid) {
	this.occupationid = occupationid;
}

public boolean equals(Object other) {
	if (this == other) {
		return true;
	}
	if (!(other instanceof FunctionOccupationspk)) {
		return false;
	}
	FunctionOccupationspk castOther = (FunctionOccupationspk)other;
	return 
		(this.functionId == castOther.functionId)
		&& (this.occupationid== castOther.occupationid);
}

public int hashCode() {
	final long prime = 31;
	long hash = 17;
	hash = hash * prime + this.functionId;
	hash = hash * prime + this.occupationid;
	
	return (int) hash;
}

}