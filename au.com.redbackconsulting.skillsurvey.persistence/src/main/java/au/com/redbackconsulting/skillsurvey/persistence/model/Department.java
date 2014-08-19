package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


/**
 * The persistent class for the department database table.
 * 
 */
@Entity
@NamedQuery(name="Department.findAll", query="SELECT d FROM Department d")
public class Department implements Serializable, IDBEntity {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long iddepartment;

	@Column(name="code", nullable=false, unique=true)
	private String code;

	private String description;

	private String name;

//	//bi-directional many-to-one association to Individual
	@OneToMany( fetch=FetchType.EAGER)
	private List<Individual> individuals;

	public List<Individual> getIndividuals() {
		return individuals;
	}

	public void setIndividuals(List<Individual> individuals) {
		this.individuals = individuals;
	}

	public Department() {
	}

	public long getIddepartment() {
		return this.iddepartment;
	}

	public void setIddepartment(long iddepartment) {
		this.iddepartment = iddepartment;
	}

	public String getCode() {
		return this.code;
	}

	public void setCode(String code) {
		this.code = code;
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

}