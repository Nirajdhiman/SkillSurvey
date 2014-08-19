package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.UocGroup;

import com.google.gson.annotations.Expose;

public class UocGroupBean {
	@Expose
	private Long id;
	@Expose
	private String notes;
	@Expose
	private Long needId;
	@Expose
	private Long pathwayId;
	
	@Expose 
	private NeedBean need;
	
	@Expose
	private PathwayBean pathway;
	

	public PathwayBean getPathway() {
		return pathway;
	}

	public void setPathway(PathwayBean pathway) {
		this.pathway = pathway;
	}

	public NeedBean getNeed() {
		return need;
	}

	public void setNeed(NeedBean need) {
		this.need = need;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public Long getNeedId() {
		return needId;
	}

	public void setNeedId(Long needId) {
		this.needId = needId;
	}

	public Long getPathwayId() {
		return pathwayId;
	}

	public void setPathwayId(Long pathwayId) {
		this.pathwayId = pathwayId;
	}
	
	

	public static UocGroupBean get(UocGroup entity) {
		UocGroupBean  bean = new UocGroupBean();
		bean.setId(entity.getIduocgroup());
		bean.setNeedId(entity.getNeed().getIdneed());
		bean.setNotes(entity.getNotes());
		bean.setPathwayId(entity.getPathway().getIdpathway());
		NeedBean needbean = NeedBean.get(entity.getNeed());
		bean.setNeed(needbean);
		
		PathwayBean pathwayBean = PathwayBean.get(entity.getPathway());
		bean.setPathway(pathwayBean);
		
		
		return bean;
	}
	
	

}
