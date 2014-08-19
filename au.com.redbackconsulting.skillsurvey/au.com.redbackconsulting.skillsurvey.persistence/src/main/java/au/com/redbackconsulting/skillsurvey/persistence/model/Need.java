package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


/**
 * The persistent class for the need database table.
 * 
 */
@Entity
@NamedQuery(name="Need.findAll", query="SELECT n FROM Need n")
public class Need implements Serializable, IDBEntity {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long idneed;

	private String description;
	@Column(name="name", nullable = false, unique=true)
	private String name;

	//bi-directional many-to-one association to UocGroup
	@OneToMany(mappedBy="need", fetch=FetchType.EAGER)
	private List<UocGroup> uocGroups;

	public Need() {
	}

	public long getIdneed() {
		return this.idneed;
	}

	public void setIdneed(long idneed) {
		this.idneed = idneed;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

//	@Override
//	public Long getId() {
//		// TODO Auto-generated method stub
//		return Long.valueOf(idneed);
//	}

	public List<UocGroup> getUocGroups() {
		return this.uocGroups;
	}

	public void setUocGroups(List<UocGroup> uocGroups) {
		this.uocGroups = uocGroups;
	}

//	public UocGroup addUocGroup(UocGroup uocGroup) {
//		getUocGroups().add(uocGroup);
//		uocGroup.setNeed(this);
//
//		return uocGroup;
//	}
//
//	public UocGroup removeUocGroup(UocGroup uocGroup) {
//		getUocGroups().remove(uocGroup);
//		uocGroup.setNeed(null);
//
//		return uocGroup;
//	}

}