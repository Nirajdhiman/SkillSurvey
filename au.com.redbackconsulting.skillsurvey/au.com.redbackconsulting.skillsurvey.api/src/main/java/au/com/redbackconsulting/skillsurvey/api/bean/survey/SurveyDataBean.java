package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import java.util.List;

import au.com.redbackconsulting.skillsurvey.api.bean.IndividualBean;
import au.com.redbackconsulting.skillsurvey.api.bean.PathwayBean;
import au.com.redbackconsulting.skillsurvey.persistence.model.Individual;

import com.google.gson.annotations.Expose;

public class SurveyDataBean {
	

	@Expose
	private int sizePathwayUocGroups;
	
	@Expose
	private int sizeoccupationLevelUocGroups;
	
	@Expose
	private int sizeIntersectUocGroups;
	

	
	public int getSizePathwayUocGroups() {
		return sizePathwayUocGroups;
	}

	public void setSizePathwayUocGroups(int sizePathwayUocGroups) {
		this.sizePathwayUocGroups = sizePathwayUocGroups;
	}

	public int getSizeoccupationLevelUocGroups() {
		return sizeoccupationLevelUocGroups;
	}

	public void setSizeoccupationLevelUocGroups(int sizeoccupationLevelUocGroups) {
		this.sizeoccupationLevelUocGroups = sizeoccupationLevelUocGroups;
	}

	
	public int getSizeIntersectUocGroups() {
		return sizeIntersectUocGroups;
	}

	public void setSizeIntersectUocGroups(int sizeIntersectUocGroups) {
		this.sizeIntersectUocGroups = sizeIntersectUocGroups;
	}

	public PathwaySurveyBean getPathway() {
		return pathway;
	}

	public void setPathway(PathwaySurveyBean pathway) {
		this.pathway = pathway;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public Long getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(Long departmentId) {
		this.departmentId = departmentId;
	}

	public Long getFunctionId() {
		return functionId;
	}

	public void setFunctionId(Long functionId) {
		this.functionId = functionId;
	}

	public Long getOccupationId() {
		return occupationId;
	}

	public void setOccupationId(Long occupationId) {
		this.occupationId = occupationId;
	}

	public Long getLevelId() {
		return levelId;
	}

	public void setLevelId(Long levelId) {
		this.levelId = levelId;
	}

	@Expose
	private PathwaySurveyBean pathway;
	

	@Expose
	private String name;

	@Expose
	private String login;

	@Expose
	private Long departmentId;

	@Expose
	private Long functionId;

	@Expose
	private Long occupationId;

	@Expose
	private Long levelId;
	
	
	
	
	 @Expose 
	 private IndividualBean individual;

//	public PathwaySurveyBean getPathwaySurveyBean() {
//		return pathway;
//	}
//
//	public void setPathwaySurveyBean(PathwaySurveyBean pathwaySurveyBean) {
//		this.pathway = pathwaySurveyBean;
//	}

	public IndividualBean getIndividual() {
		return individual;
	}

	public void setIndividual(IndividualBean individual) {
		this.individual = individual;
	}
}
