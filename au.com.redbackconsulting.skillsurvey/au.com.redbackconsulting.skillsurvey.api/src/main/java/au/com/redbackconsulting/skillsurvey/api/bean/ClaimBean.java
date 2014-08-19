package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.Claim;

import com.google.gson.annotations.Expose;

public class ClaimBean {
	
	@Expose
	private Long id;
	
	@Expose
	private String code;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public static ClaimBean get(Claim entity) {
		ClaimBean bean = new ClaimBean();
		bean.setCode(entity.getCode());
		bean.setId(entity.getIdclaim());
		return bean;
	}
	
	

}
