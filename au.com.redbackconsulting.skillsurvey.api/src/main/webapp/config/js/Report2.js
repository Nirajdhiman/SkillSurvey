var Reports=function(data){
	this.data = data;
	this.docContent='';
	this.column=0;
	this.style = new Styles();
	this.addHtmlReportHeader=function(contents,hData){
		debugger;
		contents+='<tr>';
		for(var h in hData){
			this.column+=1;
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
		var items = courseContent.items;
		//alert(this.column);
		var xHtml='<tr><td colspan="'+this.column+'" style="'+this.style.getStyleSurveyTemplateReportMatrixCourseHeader()+'"><u>'+courseContent.needName+ '</u></td><td ></td><td ></td></tr>';
		
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
			var object = items[it];
			//xHtml+='<tr>';
			//for(var obj in object){
		//		xHtml+='<td style="'+cssStyle+'">'+object[obj]+'</td>';
		//	}
			//xHtml+='</tr>';
			xHtml+='<tr><td style="'+cssStyle+'">'+items[it].uocName+'</td><td  style="'+cssStyle+'">'+items[it].completed+'</td></tr>';
		}
		return xHtml;
	};
	this.generateHTMLReport=function(){
	  debugger; 
	  if(this.data==null){return ;}
	
		this.docContent='<div style="height:'+(config.getMatrixHeight()-26).toString()+'px;width:'+config.getDocWidth().toString()+'px;" class="reportContainerDiv"><table class="report",id="report" style="border:0px;padding:0px auto;"><tr height="30px"><td colspan="3" style="'+this.style.getStyleSurveyTemplateReportMatrixHeader()+'">'+this.data.reportTitle+'</td></tr>';
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