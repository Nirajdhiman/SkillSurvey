package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import com.google.gson.annotations.Expose;

public class Test {
	
	

@Expose
private SurveyDataBean SurveyDataBean;

public SurveyDataBean getSurveyDataBean() {
	return SurveyDataBean;
}

public void setSurveyDataBean(SurveyDataBean surveyDataBean) {
	SurveyDataBean = surveyDataBean;
}
}
