var Reports=function(data){
	this.data = data;
	this.docContent='';
	this.style = new Styles();
	this.addHtmlReportHeader=function(contents,hData){
		debugger;
		contents+='<tr>';
		for(var h in hData){
			if(hData[h].name=="Completed" || hData[h].name=="Ranking"){
			
				contents+='<td style="'+this.style.getStyleSurveyTemplateReportMatrixHeaderResponse()+'">'+ hData[h].name +'</td>';
			}else{
				contents+='<td style="'+this.style.getStyleSurveyTemplateReportMatrixHeader()+'">'+ hData[h].name +'</td>';
			}
			
		}
		contents+='</tr>';
		return contents;
	};
	this.addCourseHtmlContent=function(courseContent){
		debugger;
		var xHtml='<tr><td colspan="3" style="'+this.style.getStyleSurveyTemplateReportMatrixCourseHeader()+'"><u>'+courseContent.courseType+ '</u></td><td ></td><td ></td></tr>';
		var items = courseContent.items;
		var cssStyle="";
		var counter=0;
		for(var it in items){
			counter+=1;
			
			if(counter==1){
				cssStyle =this.style.getStyleSurveyTemplateReportMatrixCourseContetCell_1();
			}
			if(counter==2){
				cssStyle=this.style.getStyleSurveyTemplateReportMatrixCourseContetCell_2();
				counter=0;
			}
			if(items[it].completed=="No"){
				cssStyle = this.style.getStyleSurveyTemplateReportMatrixCourseContetCellNag();
			}
			xHtml+='<tr><td style="'+cssStyle+'">'+items[it].course+'</td><td  style="'+cssStyle+'">'+items[it].ranking +'</td><td  style="'+cssStyle+'">'+items[it].completed+'</td></tr>';
		}
		return xHtml;
	};
	this.generateHTMLReport=function(){
	  debugger; 
	  if(this.data==null){return ;}
	
		this.docContent='<div class="reportContainerDiv"><table class="report",id="report"><tr height="30px"><td colspan="3" style="'+this.style.getStyleSurveyTemplateReportMatrixHeader()+'">'+this.data.reportTitle+'</td></tr>';
		this.docContent = this.addHtmlReportHeader(this.docContent,  this.data.reportHeader);
	
		var content = this.data.content;
		var xHtml='';
		 for(var c in content){
			 xHtml+= this.addCourseHtmlContent(content[c]);
		 }
		 this.docContent+=xHtml;
		 this.docContent+='</table ></div>';	
		  return this.docContent;
		 
		
	};
	
};