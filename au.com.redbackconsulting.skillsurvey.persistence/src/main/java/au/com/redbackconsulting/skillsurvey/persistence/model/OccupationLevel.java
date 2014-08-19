package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.*;

import org.eclipse.persistence.annotations.PrimaryKey;

/**
 * Entity implementation class for Entity: OccupationLevel
 *
 */
@Entity
@Table(name = "occupationslevels")
@IdClass (OccupationLevelPk.class)
public class OccupationLevel implements Serializable {

	
	private static final long serialVersionUID = 1L;
	
	public OccupationLevel() {
		super();
	}
	@Id

@Column(name="occupationid" )
	private long occupationId;
	
	@Id 

@Column(name="levelid" )
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


   
}
