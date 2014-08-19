package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import java.util.ArrayList;
import java.util.List;

import au.com.redbackconsulting.skillsurvey.api.utility.UOCCourseStautsReport;

import com.google.gson.annotations.Expose;

public class SurveyGapReport {
	
	@Expose
	private String title; 
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Expose
	private   List<ReportProfileInfoBean> profileInfo ;
	
	@Expose
	private List<ReportSurveyBean> items= new ArrayList<ReportSurveyBean>();;

	public List<ReportProfileInfoBean> getProfile() {
		return profileInfo;
	}

	public void setProfile(List<ReportProfileInfoBean> profile) {
		this.profileInfo = profile;
	}

	public List<ReportSurveyBean> getItems() {
		return items;
	}

	public void setItems(List<ReportSurveyBean> items) {
		this.items.addAll(items);
	}
	
	public void addItem(ReportSurveyBean item ){
		this.items.add(item);
	}
	

}
