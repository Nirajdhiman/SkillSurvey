var SkillsCompetencyGap =function(data){
	this.data = data;
	this.docContent='';
	this.column=0;
	this.style = new Styles();
	this.addHtmlReportHeader=function(contents,hData){
		debugger;
		contents+='<tr>';
		
		contents+='<td style="'+this.style.getStyleSurveyTemplateReportMatrixHeader()+'">Unit of Competency/Course Name</td>';
		contents+='<td style="'+this.style.getStyleSurveyTemplateReportMatrixHeaderResponse()+'">Completed</td>';
		contents+='<td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseContetHeadEndCell()+'">Future Learning</td>';
		
		contents+='</tr>';
		return contents;
	};
	this.addCourseHtmlContent=function(courseContent){
		debugger;
		var items = courseContent.items;
		if(items.length<1){return;}
		var xHtml='<tr><td colspan="3" style="'+this.style.getStyleSurveyTemplateReportMatrixCourseHeader()+'">'+courseContent.needName+ '</td><td ></td><td ></td></tr>';
		for(var it in items){

			xHtml+='<tr><td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseContetCell()+'">'+items[it].uocName+'</td><td  style="'+this.style.getStyleSurveyTemplateReportMatrixCourseContetCell()+'">'+items[it].completed+'</td><td  style="'+this.style.getStyleSurveyTemplateReportMatrixCourseContetEndCell()+'">'+items[it].fututeLearning+'</td></tr>';
	}
		return xHtml;
	};
	this.generateHTMLReport=function(){
	  debugger; 
	  if(this.data==null){return ;}
	  
		this.docContent='<div style="height:'+(config.getMatrixHeight()-26).toString()+'px;width:'+config.getDocWidth().toString()+'px;" class="reportContainerDiv">';
		this.docContent+='<table>';
		this.addProfileInfo(this.data.profileInfo);
		this.docContent+='</table>';
		
		this.docContent+='<table style="border:0px;padding:0px auto;margin-bottom:4px; border:1px #EAEFF7 solid;"><tr height="30px"><td colspan="3" style="'+this.style.getStyleSurveyTemplateReportHeaderMatrixHeader()+'">'+this.data.title+'</td></tr>';
	
		this.docContent = this.addHtmlReportHeader(this.docContent);
	
		var content = this.data.items;
		var xHtml='';
		 for(var c in content){
			 xHtml+= this.addCourseHtmlContent(content[c]);
		 }
		 this.docContent+=xHtml;
		 this.docContent+='</table >';
		 this.docContent+=this.addAdditionalLearning();
		 this.docContent+=this.addFooterHtml();
		this.docContent+=' </div>';	
		  return this.docContent;
		 
		
	};
	this.addProfileInfo=function(info){
		debugger;
		
		for(var h in info){
			this.docContent+='<tr>';
			this.docContent+='<td style="font-family: Arial,Helvetica,sans-serif;font-size:0.900rem;height:28px;">'+ info[h].name +'</td><td style="font-family: Arial,Helvetica,sans-serif;font-size:0.900rem;height:28px;">'+':'+info[h].value+'</td>';
			this.docContent+='</tr>';
		}
		
		//return contents;
	};
	this.addFooterHtml=function(){
		var width = (config.getDocWidth().toString()-540)+(100*2);
		var html='<table style="width:'+width.toString()+'px;">';
		html+='<tr style="padding:0xp auto;margin:0px 0px 0px 0px;"><td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseFooterInfo()+'">*  You must complete all mandatory training</td></tr>';
		html+='<tr style="padding:0xp auto;margin:0px 0px 0px 0px;"><td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseFooterInfo()+'">** For further information on what training is Highly Desirable for your position, please refer to your Occupation Description and your Supervisor</td></tr>';
		html+='<tr style="padding:0xp auto;margin:0px 0px 0px 0px;"><td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseFooterInfo()+'">#  For further information on what training is Desirable for your position, please refer to your Occupation Description and your Supervisor</td></tr>';
		
		if(config.getRole()!="user"){
			html+='<tr style="padding:0xp auto;margin:0px 0px 0px 0px;"><td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseFooterInfo()+'">## All Supervisor/Manager Training is mandatory for Supervisors / Managers</td></tr>';
		}
		html+='<tr style="padding:0xp auto;margin:0px 0px 0px 0px;"><td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseFooterInfo()+'">The information contained in this report can assist you in tracking your progress towards a full qualification.  Please discuss this with your Supervisor or visit defence training for more information.</td></tr>';
		
		html+='</table>';
		return html;
		

		
	};
	this.addAdditionalLearning=function(){
		var width = (config.getDocWidth().toString()-540)+(100*2);
		var html='<table style="width:'+width.toString()+'px;border:1px #EAEFF7 solid;">';
	
		html+='<tr ><td colspan="2" style="color:#808080;font-weight:bold;font-size:1rem;font-family: Arial,Helvetica,sans-serif;">Additional Learning</td></tr>';
		html+='<tr ><td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseAdditionalQuestion()+'">Are there any additional courses not listed that you believe you need to complete to be successful in your role?</td>';
		html+='<td  style="'+this.style.getStyleSurveyTemplateReportMatrixCourseAdditionalAnswerInput()+'">Insert name Allow for more than 1 qual</td></tr>';
		
		html+='<tr ><td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseAdditionalQuestion()+'">Do you currently hold or are you currently undertaking Higher Education / Tertiary Qualifications?</td>';
		html+='<td  style="'+this.style.getStyleSurveyTemplateReportMatrixCourseAdditionalAnswer()+'" >Yes</td></tr>';
	
		html+='<tr ><td  style="'+this.style.getStyleSurveyTemplateReportMatrixCourseAdditionalQuestion()+'">What is the name of the degree you hold or are currently studying and what year did you complete?</td>';
		html+='<td  style="'+this.style.getStyleSurveyTemplateReportMatrixCourseAdditionalAnswerInput()+'">Insert name and year.	Allow for more than 1 qual.</td></tr>';
	
		html+='<tr ><td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseAdditionalQuestion()+'">Would you like to pursue Higher Education / Tertiary Qualifications if supported by Studybank?</td>';
		html+='<td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseAdditionalAnswer()+'">Yes</td></tr>';
		html+='</table>';
		return html;
	};
};