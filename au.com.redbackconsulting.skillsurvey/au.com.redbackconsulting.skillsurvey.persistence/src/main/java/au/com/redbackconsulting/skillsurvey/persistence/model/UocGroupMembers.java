package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;



@Entity
@Table(name = "uocgroupmembers")
//@NamedQueries({ @NamedQuery(name = DBQueries.GET_UOCGROUP_MEMBERS, query = "select o from UocGroupMembers o where o.uoc_GroupId = :uoc_GroupId")})
@IdClass(UocGroupMembersPk.class)
public class UocGroupMembers implements Serializable,IDBEntity {
//	public long getUoc_Id() {
//		return uoc_Id;
//	}
//
//	public void setUoc_Id(long uoc_Id) {
//		this.uoc_Id = uoc_Id;
//	}

	public long getUoc_GroupId() {
		return uoc_GroupId;
	}

	public void setUoc_GroupId(long uoc_GroupId) {
		this.uoc_GroupId = uoc_GroupId;
	}

	private static final long serialVersionUID = 1L;
	@Id
	@Column(name="uocid")
	//private long uoc_Id;
	private String uoc_Id;
	
	public String getUoc_Id() {
		return uoc_Id;
	}

	public void setUoc_Id(String uoc_Id) {
		this.uoc_Id = uoc_Id;
	}

	@Id
	@Column(name="uocgroupid")
	private long uoc_GroupId;
	
	//@Id	
	//private UocGroupMembersPk  idpk;
	
//public UocGroupMembersPk getIdpk() {
//		return idpk;
//	}
//
//	public void setIdpk(UocGroupMembersPk idpk) {
//		this.idpk = idpk;
//	}

/**
	 * 
	 */
	
//@Id
//@Column(name="UOC_GROUPID")
//private long uoc_GroupId;
//	
//
	
//@Id
//@Column(name="UOC_ID")
//private long uoc_Id;
//
//	public long getUoc_GroupId() {
//		return uoc_GroupId;
//	}
//
//	public void setUoc_GroupId(long uoc_GroupId) {
//		this.uoc_GroupId = uoc_GroupId;
//	}
//
//	public long getUoc_Id() {
//		return uoc_Id;
//	}
//
//	public void setUoc_Id(long uoc_Id) {
//		this.uoc_Id = uoc_Id;
//	}
//
//	public Long getId() {
//		// TODO Auto-generated method stub
//		return null;
//	}

//@ManyToOne
//@JoinColumn (name="uocgroup_id", updatable=false, insertable=false)
//private UocGroup uoc_group;
//
//	
//@ManyToOne
//@JoinColumn (name= "UOC_ID", updatable=false, insertable=false )
//private Uoc uoc;

//public UocGroup getUocGroup() {
//	return uoc_group;
//}
//
//public void setUocGroup(UocGroup uoc_group) {
//	this.uoc_group = uoc_group;
//}
//
//public Uoc getUoc(){
//return uoc;
//}

//public void setUoc(Uoc uoc){
//	this.uoc= uoc;
//}


}