package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.Dapssco;

import com.google.gson.annotations.Expose;

public class DapsscoBean {
	
	
	@Expose
	private Long id;
	
	@Expose
	private Long occupatioId;
	
	@Expose
	private Long levelId;
	
	@Expose 
	private String levelName;
	
	@Expose 
	private String OccupationName;

	public String getLevelName() {
		return levelName;
	}

	public void setLevelName(String levelName) {
		this.levelName = levelName;
	}

	public String getOccupationName() {
		return OccupationName;
	}

	public void setOccupationName(String occupationName) {
		OccupationName = occupationName;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getOccupatioId() {
		return occupatioId;
	}

	public void setOccupatioId(Long occupatioId) {
		this.occupatioId = occupatioId;
	}

	public Long getLevelId() {
		return levelId;
	}

	public void setLevelId(Long levelId) {
		this.levelId = levelId;
	}

	public static DapsscoBean get(Dapssco entity) {
		DapsscoBean bean = new DapsscoBean();
		bean.setId(Long.valueOf(entity.getIddepssco()));
	//	bean.setLevelId((entity.g.getLevelId()));
		
		return bean;
	}
	
	

}
