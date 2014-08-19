package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.Need;

import com.google.gson.annotations.Expose;

public class NeedBean {
	
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

	public static NeedBean get(Need entity) {
	NeedBean bean = new NeedBean();
	bean.setId(Long.valueOf(entity.getIdneed()));
	bean.setDescription(entity.getDescription());
	bean.setName(entity.getName());
		return bean;
	}
	
	

}
