package au.com.redbackconsulting.skillsurvey.api.bean;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import au.com.redbackconsulting.skillsurvey.persistence.model.Individual;

import com.google.gson.annotations.Expose;

public class IndividualBean {

	@Expose
	private Long id;

//	@Expose
//	private String name;

	@Expose
	private String gender;

	@Expose
	private String login;

	
	@Expose
	private Long functionId;

	@Expose
	private Long occupationId;

	@Expose
	private Long levelId;
	
	@Expose
	private String pathwayName ;
	
	
	public String getPathwayName() {
		return pathwayName;
	}

	public void setPathwayName(String pathwayName) {
		this.pathwayName = pathwayName;
	}


	@Expose 
	private List<IndividualBean> subordinates;
	
@Expose 
private List<IndividualBean> supervisor;

	public List<IndividualBean> getSupervisor() {
	return supervisor;
}

public void setSupervisor(List<IndividualBean> supervisor) {
	this.supervisor = supervisor;
}

	public List<IndividualBean> getSubordinates() {
		return subordinates;
	}

	public void setSubordinates(List<IndividualBean> subordinates) {
		this.subordinates = subordinates;
	}

	public String getLogin() {
		return login;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

 
	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getLoginPassword() {
		return login;
	}

	public void setLogin(String login) {
		this.login= login;
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

	
	public static IndividualBean get(Individual entity) {
	
		IndividualBean bean = new IndividualBean();
		bean.setId(entity.getIdindividual());
		bean.setGender(entity.getGender());
		bean.setLogin(entity.getLogin());
 
			bean.setFunctionId(entity.getFunction().getIdfunction());
		bean.setOccupationId(entity.getOccupation().getIdoccupation());
		bean.setLevelId(entity.getLevel().getIdlevel());
		
		return bean;
	}

	
}
