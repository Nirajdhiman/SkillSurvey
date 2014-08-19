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
@Table(name = "dapsscoskills")
//@NamedQueries({ @NamedQuery(name = DBQueries.GET_DAPSSCOSKILLS, query = "select o from DapsscoSkills o where o.dapssco_Id = :dapssco_Id")})

@IdClass(DapsscoSkillsPk.class)
public class DapsscoSkills implements Serializable,IDBEntity {

	@Id
	@Column(name="uocgroupid",nullable=false)
	private long uocGroupId;
	
	@Id
	@Column(name = "dapsscoid", nullable=false)
    private long dapsscoId;
	
	


	/**
	 * 
	 */
 
  

	public Long getId() {
		// TODO Auto-generated method stub
		return null;
	}




	public long getUoc_GroupId() {
		return uocGroupId;
	}




	public void setUoc_GroupId(long uocGroupId) {
		this.uocGroupId = uocGroupId;
	}




	public long getDapsscoId() {
		return dapsscoId;
	}




	public void setDapssco_Id(long dapsscoId) {
		this.dapsscoId = dapsscoId;
	}
	
}
