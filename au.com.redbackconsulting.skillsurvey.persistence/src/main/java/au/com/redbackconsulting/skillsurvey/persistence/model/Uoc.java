
package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.*;

import java.util.Collection;
import java.util.List;


/**
 * The persistent class for the uoc database table.
 * 
 */
@Entity
@NamedQuery(name="Uoc.findAll", query="SELECT u FROM Uoc u")


public class Uoc implements Serializable,IDBEntity {
	private static final long serialVersionUID = 1L;

//	@Id
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
//	private long iduoc;
	@Id
	@Column(name="id")
	private String idsuoc;

	public String getIdsuoc() {
		return idsuoc;
	}

	public void setIdsuoc(String idsuoc) {
		this.idsuoc = idsuoc;
	}

	@Lob  
	@Column(name="description", nullable=false )
	private Byte[] description;
	
@Column(name="name", nullable= false, unique=false)
	private String name;

@Column(name="type", nullable= false, unique=false)
	private String type;

@Column(name="UID", nullable= false)
private String uid;

//	//bi-directional many-to-many association to UocGroup
	@ManyToMany(fetch=FetchType.EAGER, cascade=CascadeType.REFRESH)
	@JoinTable(
		name="uocgroupmembers"
		, joinColumns={
			@JoinColumn(name="uocid")
			}
		, inverseJoinColumns={
			@JoinColumn(name="uocgroupid")
			}
		)
	private List<UocGroup> uocGroups;

	
	
	
	//bi-directional many-to-one association to UocQuestion
	@OneToMany(mappedBy="uoc", fetch=FetchType.EAGER, cascade= CascadeType.REFRESH)
	private List<UocQuestion> uocQuestions;


	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	@ManyToOne
	@JoinColumn(name="providerid", nullable=false)
	private Provider provider;

	
		public Provider getProvider() {
		return provider;
	}

	public void setProvider(Provider provider) {
		this.provider = provider;
	}

		public List<UocGroup> getUocGroups() {
		return uocGroups;
	}

	public void setUocGroups(List<UocGroup> uocGroups) {
		this.uocGroups = uocGroups;
	}

		public Uoc() {
	}

//	public long getIduoc() {
//		return this.iduoc;
//	}
//
//	public void setIduoc(long iduoc) {
//		this.iduoc = iduoc;
//	}

	public String getDescription() {
		try {
			
			int len = description.length;
			byte[] bytes = new byte[len];
			
			for (int i = 0; i < description.length; i++) {
				bytes[i]= description[i];
				
				
			}
			String s= new String(bytes);

			return s;
			} catch (Exception e) {
			return null;	// TODO: handle exception
			}		

	}

	public void setDescription(String description) {
		try {
			
			byte[] bytes = description.getBytes();
			int len = bytes.length;
			Byte[] Bytes = new Byte[len];
			for (int i = 0; i < bytes.length; i++) {
				Bytes[i]= Byte.valueOf(bytes[i]);
			}
					this.description = Bytes;

			} catch (Exception e) {
				this.description = null; // TODO: handle exception
			}

	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	
//	public List<UocGroup> getUocGroups() {
//		return this.uocGroups;
//	}
//
//	public void setUocGroups(List<UocGroup> uocGroups) {
//		this.uocGroups = uocGroups;
//	}

	public List<UocQuestion> getUocQuestions() {
		return this.uocQuestions;
	}

	public void setUocQuestions(List<UocQuestion> uocQuestions) {
		this.uocQuestions = uocQuestions;
	}

	public UocQuestion addUocQuestion(UocQuestion uocQuestion) {
		getUocQuestions().add(uocQuestion);
		uocQuestion.setUoc(this);

		return uocQuestion;
	}

	public UocQuestion removeUocQuestion(UocQuestion uocQuestion) {
		getUocQuestions().remove(uocQuestion);
		uocQuestion.setUoc(null);

		return uocQuestion;
	}

//	@Override
//	public Long getId() {
//		
//		return iduoc;
//	}

}