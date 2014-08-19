package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.Survey;

import com.google.gson.annotations.Expose;

public class SurveyBean {

	@Expose
	private Long id;
	@Expose
	private Long individualId;
	@Expose
	private Long dapssco_Id;
	@Expose
	private String startedAt;
	@Expose
	private String completedAt;
	@Expose
	private Long needId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getIndividualId() {
		return individualId;
	}

	public void setIndividualId(Long individualId) {
		this.individualId = individualId;
	}

	public Long getDapssco_Id() {
		return dapssco_Id;
	}

	public void setDapssco_Id(Long dapssco_Id) {
		this.dapssco_Id = dapssco_Id;
	}

	public String getStartedAt() {
		return startedAt;
	}

	public void setStartedAt(String startedAt) {
		this.startedAt = startedAt;
	}

	public String getCompletedAt() {
		return completedAt;
	}

	public void setCompletedAt(String completedAt) {
		this.completedAt = completedAt;
	}

	public Long getNeedId() {
		return needId;
	}

	public void setNeedId(Long needId) {
		this.needId = needId;
	}

	public static SurveyBean get(Survey entity) {
		SurveyBean bean = new SurveyBean();
		 	bean.setNeedId(entity.getNeed().getIdneed());
		bean.setStartedAt(entity.getStartedAt().toString());
		return bean;
	}
	
	
	
}
