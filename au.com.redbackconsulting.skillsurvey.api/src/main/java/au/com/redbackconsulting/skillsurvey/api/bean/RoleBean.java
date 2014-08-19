package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.Role;

import com.google.gson.annotations.Expose;

public class RoleBean {
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

	public static RoleBean get(Role entity) {
		RoleBean bean = new RoleBean();
		
		bean.setDescription(entity.getDescription());
		bean.setId(entity.getIdrole());
		bean.setName(entity.getName());
		return bean;
	}
	
	

}
