package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.Occupation;

import com.google.gson.annotations.Expose;

public class OccupationBean {
	
	@Expose
	private Long id;
	
	@Expose
	private String name;
	
	@Expose
	private String description;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public static OccupationBean get(Occupation entity) {
		OccupationBean bean = new OccupationBean();
		bean.setName(entity.getName());
		bean.setDescription(entity.getDescription());
		bean.setId(entity.getIdoccupation());
		return bean;
	}



}
