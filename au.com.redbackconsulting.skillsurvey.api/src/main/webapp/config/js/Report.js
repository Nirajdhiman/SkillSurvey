var Reports=function(data){
	this.data = data;
	this.docContent='';
	this.column=0;
	this.style = new Styles();
	this.addHtmlReportHeader=function(contents){
		debugger;
		contents+='<tr>';
		
		contents+='<td style="'+this.style.getStyleSurveyTemplateReportMatrixHeader()+'">Unit of Competency/Course Name</td>';
				contents+='<td style="'+this.style.getStyleSurveyTemplateReportMatrixHeaderResponse()+'">Completed</td>';
				contents+='<td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseContetHeadEndCell()+'">Future Learning</td>';
		
		contents+='</tr>';
		return contents;
	};
	this.addTwoColumnHtmlContent=function(){
		
	};
	this.addCourseHtmlContent=function(courseContent){
		debugger;
		var items = courseContent.items;
		//alert(this.column);
		var xHtml='<tr><td colspan="3" style="'+this.style.getStyleSurveyTemplateReportMatrixCourseHeader()+'">'+courseContent.needName+ '</td><td ></td><td ></td></tr>';
		
		for(var it in items){

			xHtml+='<tr><td style="'+this.style.getStyleSurveyTemplateReportMatrixCourseContetCell()+'">'+items[it].uocName+'</td><td  style="'+this.style.getStyleSurveyTemplateReportMatrixCourseContetCell()+'">'+items[it].completed +'</td><td  style="'+this.style.getStyleSurveyTemplateReportMatrixCourseContetEndCell()+'">'+items[it].fututeLearning+'</td></tr>';
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
		
		//return contents;
	};
	this.generateHTMLReport=function(){
	  debugger; 
	  if(this.data==null){return ;}
	
		this.docContent='<div style="height:'+(config.getMatrixHeight()-26).toString()+'px;width:'+config.getDocWidth().toString()+'px;" class="reportContainerDiv">';
		this.docContent+='<table>';
		this.addProfileInfo(this.data.profileInfo);
		this.docContent+='</table>';
		
		this.docContent+='<table style="border:0px;padding:0px auto;margin-bottom:4px; border:1px #EAEFF7 solid;"><tr height="30px"><td colspan="3" style="'+this.style.getStyleSurveyTemplateReportHeaderMatrixHeader()+'">'+this.data.title+'</td></tr>';
		//this.docContent = this.addProfileInfo(this.docContent,  this.data.profileInfo);
		this.docContent = this.addHtmlReportHeader(this.docContent);
	
		//var content = this.data.content;
		var xHtml='';
		// for(var c in content){
			 xHtml+= this.addCourseHtmlContent(this.data);
		// }
		 this.docContent+=xHtml;
		 this.docContent+='</table ></div>';	
		  return this.docContent;
		 
		
	};
	
};