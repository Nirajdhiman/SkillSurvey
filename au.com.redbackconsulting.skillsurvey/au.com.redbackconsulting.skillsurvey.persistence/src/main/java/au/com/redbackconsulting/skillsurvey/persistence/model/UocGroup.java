package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


/**
 * The persistent class for the uoc_group database table.
 * 
 */
@Entity
@Table(name="uocgroup")
@NamedQuery(name="UocGroup.findAll", query="SELECT u FROM UocGroup u")
public class UocGroup implements Serializable,IDBEntity {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long iduocgroup;
	@Column(name="notes", nullable=false, unique=true)
	private String notes;

 
	//bi-directional many-to-one association to Need
	@ManyToOne
	@JoinColumn(name="NEED_ID", nullable=false)
	private Need need;

@ManyToMany(mappedBy="uocGroups",  fetch=FetchType.EAGER)
private List<Uoc> uocs;



	public List<Uoc> getUocs() {
	return uocs;
}

public void setUocs(List<Uoc> uocs) {
	this.uocs = uocs;
}


	//bi-directional many-to-one association to Pathway
	@ManyToOne
	@JoinColumn(name="pathway_id", nullable=false)
	private Pathway pathway;

	public UocGroup() {
	}

	public long getIduocgroup() {
		return this.iduocgroup;
	}

	public void setIduocgroup(long iduocgroup) {
		this.iduocgroup = iduocgroup;
	}

	public String getNotes() {
		return this.notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

  
	public Need getNeed() {
		return this.need;
	}

	public void setNeed(Need need) {
		this.need = need;
	}

	public Pathway getPathway() {
		return this.pathway;
	}

	public void setPathway(Pathway pathway) {
		this.pathway = pathway;
	}
//	
 

	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(
		name="dapsscoskills"
		, joinColumns={
			@JoinColumn(name="uocGroupId")
			}
		, inverseJoinColumns={
			@JoinColumn(name="dapsscoId")
			}
		)
	private List<Dapssco> dapsscos;



	public List<Dapssco> getDapsscos() {
		return dapsscos;
	}

	public void setDapsscos(List<Dapssco> dapsscos) {
		this.dapsscos = dapsscos;
	} 
	

//	@Override
//	public Long getId() {
//		// TODO Auto-generated method stub
//		return null;
//	}

}