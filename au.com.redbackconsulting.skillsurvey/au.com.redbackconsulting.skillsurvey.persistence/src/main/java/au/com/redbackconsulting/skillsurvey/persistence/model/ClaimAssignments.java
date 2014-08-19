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
@Table(name = "claimassignment")
//@NamedQueries({ @NamedQuery(name = DBQueries.GET_CLAIMASSIGNMENT, query = "select u from ClaimAssignments u where u.Claimid= :Claimid")})
@IdClass(ClaimAssignmentsPK.class)
public class ClaimAssignments implements Serializable,IDBEntity {

	@Id
	@Column(name = "claimid",nullable=false)
	private long  claimId;
	

	
	@Id
	@Column(name = "roleid", nullable=false)
	private long roleId;

	
	
	public long getClaimid() {
		return claimId;
	}



	public void setClaimid(long claimid) {
		this.claimId = claimid;
	}



	public long getRoleId() {
		return roleId;
	}



	public void setRoleId(long roleId) {
		this.roleId = roleId;
	}



	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;


	

}
