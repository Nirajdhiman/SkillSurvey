package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import java.util.Date;

import com.google.gson.annotations.Expose;

import au.com.redbackconsulting.skillsurvey.api.bean.SurveyBean;

public class OverviewListSurveyBean  {
	
	public String getNeedDesciption() {
		return needDesciption;
	}

	public void setNeedDesciption(String needDesciption) {
		this.needDesciption = needDesciption;
	}

	@Expose 
	private long surveyId ;
	
	@Expose
	private String needName;
	
	@Expose
	private String needDesciption;
	
	@Expose
	private int  percentage=0;
	
	@Expose
	private String percentageStr;
	
 
	
	public float getPercentage() {
		return percentage;
	}

	public void setPercentage(int percentage) {
		if (percentage>0){
		percentageStr= String.valueOf(percentage)+" %";
		this.percentage = percentage;
		} else {
			percentageStr=  "0 %";
			this.percentage = percentage;
			
		}
	}

	public String getNeedName() {
		return needName;
	}

	public void setNeedName(String needName) {
		this.needName = needName;
	}

//	@Expose
//	private long dapsscoId;
	
	public long getSurveyId() {
		return surveyId;
	}

	public void setSurveyId(long surveyId) {
		this.surveyId = surveyId;
	}

//	public long getDapsscoId() {
//		return dapsscoId;
//	}
//
//	public void setDapsscoId(long dapsscoId) {
//		this.dapsscoId = dapsscoId;
//	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getFinishDate() {
		return finishDate;
	}

	public void setFinishDate(String finishDate) {
		this.finishDate = finishDate;
	}

	public String isStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Expose
	private String startDate;
	
	@Expose 
	private String finishDate;

	@Expose 
	private String status ="Not Started";
	
}
