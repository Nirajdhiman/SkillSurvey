package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.annotations.Expose;

public class SurveyReportSkillRecognitionBean {
	
	@Expose
	private String title;
	
	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	@Expose
	private List<ReportProfileInfoBean> profileInfo;
	
	
	public List<ReportProfileInfoBean> getProfile() {
		return profileInfo;
	}


	public void setProfile(List<ReportProfileInfoBean> profile) {
		this.profileInfo = profile;
	}


	public List<SkillRecogReportBean> getItems() {
		return items;
	}


	public void add( SkillRecogReportBean  item) {
		this.items.add(item);
	}

	public void setItems(List<SkillRecogReportBean> items) {
		this.items = items;
	}


	@Expose
	private List<SkillRecogReportBean> items = new ArrayList<SkillRecogReportBean>();

}
