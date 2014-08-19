package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.UocQuestion;

import com.google.gson.annotations.Expose;

public class UocQuestionBean {
@Expose	
private String id;
@Expose
private String uoc_Id;
//@Expose
//private String questionId;

@Expose 
private String questiontext;

@Expose 
private String uocname;
//@Expose 
//private QuestionBean questionBean;
//
//@Expose
//private UocBean uocBean;


//public QuestionBean getQuestionBean() {
//	return questionBean;
//}
//
//public void setQuestionBean(QuestionBean questionBean) {
//	this.questionBean = questionBean;
//}
//
//public UocBean getUocBean() {
//	return uocBean;
//}
//
//public void setUocBean(UocBean uocBean) {
//	this.uocBean = uocBean;
//}

public String getId() {
	return id;
}

public void setId(String id) {
	this.id = id;
}

public String getUoc_Id() {
	return uoc_Id;
}

public void setUoc_Id(String uoc_Id) {
	this.uoc_Id = uoc_Id;
}

//public String getQuestionId() {
//	return questionId;
//}

//public void setQuestionId(String questionId) {
//	this.questionId = questionId;
//}

public static UocQuestionBean get(UocQuestion entity) {
	UocQuestionBean bean = new UocQuestionBean();
	bean.setId(entity.getIduocquestion());
//	bean.setQuestionId(entity.).getIdquestion());
	bean.setUoc_Id(entity.getUoc().getIdsuoc());
	
	bean.setQuestionText(entity.getText());
	
	bean.setUocName(entity.getUoc().getName());
	return bean;
}

public String getQuestionText() {
	return questiontext;
}

public void setQuestionText(String questionText) {
	this.questiontext = questionText;
}

public String getUocName() {
	return uocname;
}

public void setUocName(String uocName) {
	this.uocname = uocName;
}



}
