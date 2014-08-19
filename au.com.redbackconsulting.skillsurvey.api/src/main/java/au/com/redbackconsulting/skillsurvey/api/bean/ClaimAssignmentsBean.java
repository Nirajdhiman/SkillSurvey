package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.ClaimAssignments;

import com.google.gson.annotations.Expose;

public class ClaimAssignmentsBean {
	


	@Expose
	private Long claimId;
	
	
	
	@Expose
	private Long roleId;
	
	@Expose
	private String claimName;
	
	@Expose
	private String roleName;

	public String getClaimName() {
		return claimName;
	}

	public void setClaimName(String claimName) {
		this.claimName = claimName;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public Long getClaimId() {
		return claimId;
	}

	public void setClaimId(Long claimId) {
		this.claimId = claimId;
	}

	public Long getRoleId() {
		return roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

	public static ClaimAssignmentsBean get(ClaimAssignments entity) {
		ClaimAssignmentsBean bean = new ClaimAssignmentsBean();
		
		bean.setClaimId(entity.getClaimid());
	bean.setRoleId(Long.valueOf(entity.getRoleId()));
bean.setClaimName("claimNmae");
bean.setRoleName("roleName");
		return bean;
	}
	
	

}
