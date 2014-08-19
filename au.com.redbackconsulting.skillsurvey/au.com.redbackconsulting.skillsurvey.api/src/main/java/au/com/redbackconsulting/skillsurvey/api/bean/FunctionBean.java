package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.Function;

import com.google.gson.annotations.Expose;

public class FunctionBean {
	
	
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

	public static FunctionBean get(Function entity) {
		FunctionBean bean = new FunctionBean();
		bean.setDescription(entity.getDescription());
		bean.setId(entity.getIdfunction());
		bean.setName(entity.getName());
		return bean;
	}
	
	

}
