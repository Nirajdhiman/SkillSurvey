var Styles = function(){
	this.no=90;
	//color:#808080;
	this.getStyleSurveyTemplateReportMatrixHeaderResponse=function(){
		return "color:#808080; margin:0px auto;border-top:1px #EAEFF7 solid;border-right:1px #EAEFF7 solid;font-family: Arial,Helvetica,sans-serif;font-size:0.900rem;font-weight:bold;height:30px;width:100px;";
	};
	this.getStyleSurveyTemplateReportMatrixCourseHeader=function(){
		return"color:#808080;font-weight:bold;background-color:white;border-top:1px #EAEFF7 solid;margin:0px auto;font-family: Arial,Helvetica,sans-serif;font-size:1rem;height:30px";
	};
	this.getStyleSurveyTemplateReportMatrixCourseContetCell_1=function(){
		return "margin:0px auto;border-top:1px #EAEFF7 solid;border-right:1px #EAEFF7 solid;font-family: Arial,Helvetica,sans-serif;height:28px;font-size:0.800rem;";
	};
	this.getStyleSurveyTemplateReportMatrixCourseContetCell_2=function(){
		return "margin:0px auto;border-top:1px #EAEFF7 solid;border-right:1px #EAEFF7 solid;font-family: Arial,Helvetica,sans-serif;font-size:0.800rem;height:28px;";
	};
	this.getStyleSurveyTemplateReportMatrixCourseContetCellNag=function(){
		return "margin:0px auto;border-top:1px #EAEFF7 solid;border-right:1px #EAEFF7 solid;font-family: Arial,Helvetica,sans-serif;font-size:0.800rem;height:28px;";
	};
	this.getStyleSurveyTemplateReportMatrixHeader=function(){
		var width = config.getDocWidth().toString()-570;
		return "color:#808080; margin:0px auto;border-top:1px #EAEFF7 solid;border-right:1px #EAEFF7 solid;font-family: Arial,Helvetica,sans-serif;font-size:0.900rem;font-weight:bold;width:"+width+"px;height:30px;";
	};
	this.getStyleSurveyTemplateReportHeaderMatrixHeader=function(){
		var width = config.getDocWidth().toString()-570;
		return "color:#808080; margin:0px auto; width:100%;font-family: Arial,Helvetica,sans-serif;font-size:0.900rem;font-weight:bold;width:"+width+"px;height:30px;";
	};
	
	
	this.getStyleSurveyTemplateReportMatrixCourseAdditionalQuestion=function(){
		return "margin:0px auto;border-top:1px #EAEFF7 solid;border-right:1px #EAEFF7 solid;font-family: Arial,Helvetica,sans-serif;height:28px;font-size:0.800rem; width:60%";

	};
	this.getStyleSurveyTemplateReportMatrixCourseAdditionalAnswer=function(){
		return "margin:0px auto;border-top:1px #EAEFF7 solid;font-family: Arial,Helvetica,sans-serif;height:28px;font-size:0.800rem; width:40%;";

	};
	this.getStyleSurveyTemplateReportMatrixCourseAdditionalAnswerInput=function(){
		return "margin:0px auto;border-top:1px #EAEFF7 solid;font-family: Arial,Helvetica,sans-serif;height:28px;font-size:0.800rem; width:40%;height:100px;";

	};
	this.getStyleSurveyTemplateReportMatrixCourseFooterInfo=function(){
		return "margin:0px auto;font-family: Arial,Helvetica,sans-serif;height:26px;font-size:0.800rem; width:100%";

	};
	this.getStyleSurveyTemplateReportMatrixCourseHeaderAdditional=function(){
		return"background-color:white;margin:0px auto;border:1px #EAEFF7 solid;font-family: Arial,Helvetica,sans-serif;font-size:1rem;height:30px";
	};
	this.getStyleSurveyTemplateReportMatrixCourseContetEndCell=function(){
		return "margin:0px auto;border-top:1px #EAEFF7 solid;font-family: Arial,Helvetica,sans-serif;font-size:0.800rem;height:28px;";
	};
	this.getStyleSurveyTemplateReportMatrixCourseContetHeadEndCell=function(){
		return "color:#808080;margin:0px auto;border-top:1px #EAEFF7 solid;font-family: Arial,Helvetica,sans-serif;font-size:0.900rem;font-weight:bold;height:28px;";
	};
	this.getStyleSurveyTemplateReportMatrixCourseContetCell=function(){
		return "margin:0px auto;border-top:1px #EAEFF7 solid;border-right:1px #EAEFF7 solid;font-family: Arial,Helvetica,sans-serif;height:28px;font-size:0.800rem;";
	};
};