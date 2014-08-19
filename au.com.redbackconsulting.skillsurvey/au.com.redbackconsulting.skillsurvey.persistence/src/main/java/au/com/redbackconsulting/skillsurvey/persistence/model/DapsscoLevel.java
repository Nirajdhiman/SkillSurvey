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
@Table(name = "dapsscolevel")
//@NamedQueries({ @NamedQuery(name = DBQueries.GET_DAPSSCOLEVEL, query = "select o from DapsscoLevel o where o.dapssco_id = :dapssco_id")})

@IdClass(DapsscoLevelPk.class)
public class DapsscoLevel implements Serializable,IDBEntity {
	@Id
	@Column(name = "dapsscoid")
	private long dapsscoId;
		
		
@Id
		@Column(name = "levelid")	
	private long levelId;



public long getDapssco_id() {
		return dapsscoId;
	}


	public void setDapssco_id(long dapssco_id) {
		this.dapsscoId = dapssco_id;
	}


	public long getLevelId() {
		return levelId;
	}


	public void setLevelId(long levelId) {
		this.levelId = levelId;
	}



	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

 
	
	public Long getId() {
		// TODO Auto-generated method stub
		return null;
	}





}
