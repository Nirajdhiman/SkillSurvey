package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.Department;

import com.google.gson.annotations.Expose;

public class DepartmentBean {
	
	
	@Expose
	private Long id;
	
	
	@Expose
	private String name;
	
	
	@Expose
	private String description;
	
	
	@Expose
	private String code;

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

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public static DepartmentBean get(Department entity) {
		DepartmentBean bean = new DepartmentBean();
		bean.setCode(entity.getCode());
		bean.setDescription(entity.getDescription());
		bean.setId(entity.getIddepartment());
		bean.setName(entity.getName());
		
		return bean;
	}


	

}
