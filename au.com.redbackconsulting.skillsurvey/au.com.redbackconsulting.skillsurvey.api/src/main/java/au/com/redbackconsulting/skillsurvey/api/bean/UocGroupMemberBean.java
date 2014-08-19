package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.UocGroupMembers;

import com.google.gson.annotations.Expose;

public class UocGroupMemberBean {
	@Expose
	private Long uoc_GroupId;
	@Expose
	private Long uoc_Id;

	
	
	@Expose
	private String uocGroupName;
	
	public String getUocGroupName() {
		return uocGroupName;
	}

	public void setUocGroupName(String uocGroupName) {
		this.uocGroupName = uocGroupName;
	}

	public String getUocName() {
		return uocName;
	}

	public void setUocName(String uocName) {
		this.uocName = uocName;
	}

	@Expose
	private String uocName;
	
	public Long getUoc_GroupId() {
		return uoc_GroupId;
	}

	public void setUoc_GroupId(Long uoc_GroupId) {
		this.uoc_GroupId = uoc_GroupId;
	}

	public Long getUoc_Id() {
		return uoc_Id;
	}

	public void setUoc_Id(Long uoc_Id) {
		this.uoc_Id = uoc_Id;
	}

	public static UocGroupMemberBean get(UocGroupMembers entity) {
	UocGroupMemberBean bean = new UocGroupMemberBean();
bean.setUoc_GroupId(Long.valueOf(entity.getUoc_GroupId()));
bean.setUoc_Id(Long.valueOf(entity.getUoc_Id()));

	bean.setUocGroupName("uocGroupName");
	bean.setUocName("uocName");
		return bean;
	}

	
}
