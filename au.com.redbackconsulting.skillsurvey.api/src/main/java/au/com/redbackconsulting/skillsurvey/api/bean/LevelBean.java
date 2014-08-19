package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.Level;

import com.google.gson.annotations.Expose;

public class LevelBean {
	
	@Expose
	private long id;
	
	@Expose
	private String code;

	@Expose
	private String description;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public static LevelBean get(Level entity){
		LevelBean bean = new LevelBean();
		if(entity!=null){
		bean.setCode(entity.getCode());
		bean.setDescription(entity.getDescription());
		bean.setId(entity.getIdlevel());
		}
		return bean;
		
	}
	
}
