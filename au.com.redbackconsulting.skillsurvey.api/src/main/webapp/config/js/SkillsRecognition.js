var SkillsRecognition=function(data){
	this.data = data;
	this.docContent='';
	this.column=0;
	this.style = new Styles();
	this.addHtmlReportHeader=function(contents){
		debugger;
contents+='<tr>';
		
		contents+='<td style="'+this.style.getStyleSurveyTemplateReportMatrixHeader()+'">Unit of Competency/Course Name</td>';
		contents+='<td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseContetHeadEndCell()+'width:200px;">Skills Recognition ***</td>';
		
		contents+='</tr>';
		
		return contents;
	};
	this.addCourseHtmlContent=function(courseContent){
		debugger;
		var items = courseContent.items;
		if(items.length<1){return;}
		//alert(this.column);
		var xHtml='<tr><td colspan="2" style="'+this.style.getStyleSurveyTemplateReportMatrixCourseHeader()+'">'+courseContent.needName+ '</td><td ></td><td ></td></tr>';
	
		for(var it in items){
		
			xHtml+='<tr><td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseContetCell()+'">'+items[it].uocName+'</td><td  style="'+this.style.getStyleSurveyTemplateReportMatrixCourseContetEndCell()+'">'+items[it].recognition+'</td></tr>';
		}
		return xHtml;
	};
	
	this.addProfileInfo=function(info){
		debugger;
		
		for(var h in info){
			this.docContent+='<tr>';
			this.docContent+='<td style="font-family: Arial,Helvetica,sans-serif;font-size:0.900rem;height:28px;">'+ info[h].name +'</td><td style="font-family: Arial,Helvetica,sans-serif;font-size:0.900rem;height:28px;">'+':'+info[h].value+'</td>';
			this.docContent+='</tr>';
		}
		
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
		 this.docContent+=this.addFooterHtml();
			this.docContent+=' </div>';	
		  return this.docContent;
		 
		
	};
	this.addFooterHtml=function(){
		var width = (config.getDocWidth().toString()-540)+(100*2);
		var html='<table style="width:'+width.toString()+'px;">';
			html+='<tr style="padding:0xp auto;margin:0px 0px 0px 0px;"><td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseFooterInfo()+'">** For further information on what training is Highly Desirable for your position, please refer to your Occupation Description and your Supervisor</td></tr>';
		html+='<tr style="padding:0xp auto;margin:0px 0px 0px 0px;"><td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseFooterInfo()+'">#  For further information on what training is Desirable for your position, please refer to your Occupation Description and your Supervisor</td></tr>';
	
			html+='<tr style="padding:0xp auto;margin:0px 0px 0px 0px;"><td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseFooterInfo()+'">*** Skills recognition is only available for accredited Units of Competency in the Highly Desirable and Desirable pathways.  It is not available for any Mandatory, Supervisor or Campus course.  This tool does not guarantee skills recognition.  It is meant to be used as a guide.  Please discuss skills recognition with your Supervisor</td></tr>';
		
		html+='<tr style="padding:0xp auto;margin:0px 0px 0px 0px;"><td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseFooterInfo()+'">The information contained in this report can assist you in tracking your progress towards a full qualification.  Please discuss this with your Supervisor or visit defence training for more information.</td></tr>';
		
		html+='</table>';
		return html;
		

		
	};
};