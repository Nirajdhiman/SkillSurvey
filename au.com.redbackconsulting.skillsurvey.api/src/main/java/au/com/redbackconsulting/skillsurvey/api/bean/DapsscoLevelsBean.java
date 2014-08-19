package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.DapsscoLevel;

import com.google.gson.annotations.Expose;

public class DapsscoLevelsBean {
	

	@Expose
	private Long iddapsscolevel;
	
	@Expose
	private String dapsscoName;
	
	@Expose
	private String levelName;
	
	public String getDapsscoName() {
		return dapsscoName;
	}

	public void setDapsscoName(String dapsscoName) {
		this.dapsscoName = dapsscoName;
	}

	public String getLevelName() {
		return levelName;
	}

	public void setLevelName(String levelName) {
		this.levelName = levelName;
	}

	public Long getIddapsscolevel() {
		return iddapsscolevel;
	}

	public void setIddapsscolevel(Long iddapsscolevel) {
		this.iddapsscolevel = iddapsscolevel;
	}

	@Expose
	private String dapssco_id;
	
	
	public String getDapssco_id() {
		return dapssco_id;
	}

	public void setDapssco_id(String dapssco_id) {
		this.dapssco_id = dapssco_id;
	}

	@Expose
	private Long levelId;

//	public Long getDapssco_id() {
//		return dapssco_id;
//	}
//
//	public void setDapssco_id(Long dapssco_id) {
//		this.dapssco_id = dapssco_id;
//	}

	public Long getLevelId() {
		return levelId;
	}

	public void setLevelId(Long levelId) {
		this.levelId = levelId;
	}

	public static DapsscoLevelsBean get(DapsscoLevel entity) {
		DapsscoLevelsBean bean = new DapsscoLevelsBean();
		bean.setIddapsscolevel(Long.valueOf(entity.getId()));
	
	bean.setDapssco_id((entity.getDapsscoId()));
	bean.setLevelId(Long.valueOf(entity.getLevelId()));
	
		return bean;
	}

	
	

}
