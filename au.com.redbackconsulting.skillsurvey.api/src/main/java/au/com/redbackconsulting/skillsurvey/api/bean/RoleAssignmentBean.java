package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.RoleAssignment;

import com.google.gson.annotations.Expose;

public class RoleAssignmentBean {
	@Expose
	private Long individualId;
	@Expose
	private Long roleId;
	@Expose
	private String individualName;
	@Expose
	private String roleName;

	public String getIndividualName() {
		return individualName;
	}

	public void setIndividualName(String individualName) {
		this.individualName = individualName;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public Long getIndividualId() {
		return individualId;
	}

	public void setIndividualId(Long individualId) {
		this.individualId = individualId;
	}

	public Long getRoleId() {
		return roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

	public static RoleAssignmentBean get(RoleAssignment entity) {
	RoleAssignmentBean bean = new RoleAssignmentBean();
	bean.setIndividualId(entity.getIndividualId());
	bean.setRoleId(Long.valueOf(entity.getRoleId()));
bean.setIndividualName("individualName");
bean.setRoleName("roleName");
		return bean;
	}

}
