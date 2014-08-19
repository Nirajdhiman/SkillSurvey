package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.google.gson.annotations.Expose;

public class ReportSurveyBean {

	@Expose
	private String reportTitle;
	
	
	 
	@Expose
	private String title;
 
	public void setTitle(String title) {
		this.title = title;
	}

	@Expose 
	private String needName;
	
	@Expose 
	private String needDescription;
	
	
	public String getNeedDescription() {
		return needDescription;
	}

	public void setNeedDescription(String needDescription) {
		this.needDescription = needDescription;
	}

	public String getNeedName() {
		return needName;
	}

	public void setNeedName(String needName) {
		this.needName = needName;
	}

	public String getReportTitle() {
	return this.reportTitle;
	}

//	public void setReportTitle(String reportTitle) {
//		this.reportTitle = reportTitle;
//	}

	@Expose
	private List<ReportProfileInfoBean> profileInfo;
	
	@Expose
	private List<UocCourseStatusBean> items= new ArrayList<UocCourseStatusBean>();

	
	public List<ReportProfileInfoBean> getProfileInfo() {
		return profileInfo;
	}

	public void setProfileInfo(List<ReportProfileInfoBean> profileInfo) {
		this.profileInfo = profileInfo;
	}

	public List<UocCourseStatusBean> getItems() {
		return items;
	}

	public void setItems(List<UocCourseStatusBean> items) {
		this.items = items;
	}
	
	public void addAll(List<UocCourseStatusBean> collection){
		this.items.addAll(collection);
	}
	  
	
   
	public List<UocCourseStatusBean> getUocCourses() {
		return items;
	}

	public void setUocCourses(List<UocCourseStatusBean> uocCourses) {
		this.items = uocCourses;
	}
	
	
	
	
	

}
