package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;


@Entity
@Table(name = "functionoccupations")
//@NamedQueries({ @NamedQuery(name = DBQueries.GET_FUNCTIONOCCUPTIONS, query = "select o from FunctionOccupations o where o.functionId = :functionId ")})
@IdClass(FunctionOccupationspk.class)
public class FunctionOccupations implements Serializable,IDBEntity {
	
	
	@Id
	@Column(name="occupationid")
	private long occupationid;



	@Id
	@Column(name="functionid")
private long functionId;


	
	
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



	
//	@EmbeddedId
	//public FunctionOccupationspk idpk;
	/**
	 * 
	 */
	
	

	public Long getId() {
		// TODO Auto-generated method stub
		return null;
	}

}
