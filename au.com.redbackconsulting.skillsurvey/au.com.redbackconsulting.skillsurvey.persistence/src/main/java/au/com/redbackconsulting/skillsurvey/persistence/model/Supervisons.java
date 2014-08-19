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
@Table(name = "supervisons")
//@NamedQueries({ @NamedQuery(name = DBQueries.GET_SUPERVISONS, query = "select o from Supervisons o where o.supervisorId = :supervisorId")})
@IdClass(SupervisionPK.class)
public class Supervisons implements Serializable,IDBEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="supervisorid", nullable=false)
private long supervisorId;
	
	
	@Id
	@Column(name="supervisedid", nullable=false)
	private long supervisedId;
	
public Supervisons() {

}





//private SupervisionPK idPk;


//	public long getSupervisorId() {
//		return supervisorId;
//	}
//
//
//	public void setSupervisorId(long supervisorId) {
//		this.supervisorId = supervisorId;
//	}
//
//
//	public long getSupervisedId() {
//		return supervisedId;
//	}
//
//
//	public void setSupervisedId(Long supervisedId) {
//		this.supervisedId = supervisedId;
//	}


	public Long getId() {
		// TODO Auto-generated method stub
		return null;
	}

	public long getSupervisorId() {
		return supervisorId;
	}

	public void setSupervisorId(long supervisorId) {
		this.supervisorId = supervisorId;
	}

	public long getSupervisedId() {
		return supervisedId;
	}

	public void setSupervisedId(long supervisedId) {
		this.supervisedId = supervisedId;
	}

//	public SupervisionPK getIdPk() {
//		return idPk;
//	}
//
//	public void setIdPk(SupervisionPK idPk) {
//		this.idPk = idPk;
//	}
	
//	@ManyToOne 
//	@JoinColumn(name = "supervisorId" , updatable=false, insertable=false)
//	private Individual individual;
//	
}
