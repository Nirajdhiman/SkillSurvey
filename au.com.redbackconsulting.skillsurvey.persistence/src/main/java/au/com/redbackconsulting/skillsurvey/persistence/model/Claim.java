package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQuery;



/**
 * The persistent class for the claim database table.
 * 
 */
@Entity
@NamedQuery(name="Claim.findAll", query="SELECT c FROM Claim c")
public class Claim implements Serializable, IDBEntity {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long idclaim;

	@Column(name="code", nullable=false, unique=true)
	private String code;

public Claim() {
	}

	public long getIdclaim() {
		return this.idclaim;
	}

	public void setIdclaim(long idclaim) {
		this.idclaim = idclaim;
	}

	public String getCode() {
		return this.code;
	}

	public void setCode(String code) {
		this.code = code;
	}
	


//	@Override
//	public long getId() {
//		return idclaim;
//	}

//	@Override
//	public Long getId() {
//		// TODO Auto-generated method stub
//		return idclaim;
//	}

}