var Config = function(){
	
	this.questionnaires = new Array();
	this.secondatoryQuestion = new Array();
	
	
	this.contentRowHeight=0;
	this.footerHeight=30;
	this.matrixHeight=0;
	this.hPer =25.3;
	this.userManagementContentMargin=206;
	this.mainControllerHeight=0;
	this.shellId="surveyAppShell";
	this.helpThingInspactorId ="helpTemplateThingInspector",
	this.userManagementThingInspactorId ="user-management-thing-inspector";
	this.docHeight= document.documentElement.clientHeight;
	this.docWidth = (document.documentElement.clientWidth-5.5);
	this.continueButtonId='';
	this.appNameSpace="survey-template";
	this.userManagementLeftContentWidth=440;
	this.actionStatus=false;
	this.app={};
	this.pathwayAction="create"; //default action for all pathway type;
	this.pathwayActionList=new Array();
	this.selectedId="";
	this.mapModel={root:[]};
	this.role="";
	this.profieInitial = true;
	this.toggleButtonStatus = new Array();
	this.manageExpendCollapse= new Array();
	this.needSaveButtonStatus=false;
	this.selectedUserProfileId="";
	this.setSelectedUserProfileId=function(id){
		this.selectedUserProfileId = id;
	};
	this.getSelectedUserProfileId=function(){
		return this.selectedUserProfileId;
	};
	this.getUserManagementThingInspactorId=function(){
		return this.userManagementThingInspactorId;
	};
	this.getNeedSaveButtonStatus=function(){
		return this.needSaveButtonStatus;
	};
	this.setNeedSaveButtonStatus=function(status){
		this.needSaveButtonStatus =status;
	};
	this.getHelpThingInspactorId=function(){
		return this.helpThingInspactorId;
	};
	this.setExpendCollapse=function(id,idx,status){
		
		var items = this.manageExpendCollapse[id];
		if(items==null){
			var arr= new Array();
			arr[idx]=status;
			this.manageExpendCollapse[id]=arr;
		}else{
			items[idx]=status;
			this.manageExpendCollapse[id]= items;
		}
		
	};
	this.getExpandCollapse=function(id){
		return this.manageExpendCollapse[id];
	};
	this.setToogleButtonStatus=function(id,status,idx){
		this.toggleButtonStatus[id]=status;
	};
	this.getToggleButtonStatus=function(id){
		return this.toggleButtonStatus[id];
	};
	this.setRole=function(role){
		this.role =role;
	};
	this.getRole=function(){
		return this.role;
	};
	this.setSelectedId=function(id){
		this.selectedId =id;
	};
	this.getSelectedId=function(){
		return this.selectedId;
	};
	this.displayNotificationBar=function(sText,type){
		displayListener(false);
		var oMessageBar = this.getObjectById("notificationBar");
		oMessageBar.removeAllNotifiers();
		var now = (new Date()).toUTCString();
		var oMessage = new sap.ui.core.Message({
		//	icon:'config/images/success.png',
			text : sText,
			timestamp : now
		});
		var oNotifier = new sap.ui.ux3.Notifier({
			title : type,
			messages:[oMessage],
			messageSelected :function(){
				displayListener(false);
			}
		});
		
		oMessageBar.addNotifier(oNotifier);
		displayListener(true);
		
	};
	this.setPathwayAction=function(id,action){
		this.pathwayActionList[id]=action;
	};
	this.getPathwayAction=function(id){
		return this.pathwayActionList[id];
	};
	this.setApp=function(app){
		this.app=app;
	};
	this.getApp=function(){
		return this.app;
	};
	this.getAppNameSpace=function(){
		return this.appNameSpace;
	};
	this.getViewFullName=function(key){
		return this.getAppNameSpace()+'.'+key;
	};
	this.getRowCount=function(){
		return parseInt( this.getMatrixHeight()/33.2);
	};
	this.getActionStatus=function(){
		return this.actionStatus;
	};
	this.setActionStatus=function(status){
		 this.actionStatus=status;
	};
	this.getUserManagementLeftContentWidth=function(){
		return this.userManagementLeftContentWidth;
	};
	this.getUserManagementRightContentWidth=function(){
		return this.getDocWidth()-(this.getUserManagementLeftContentWidth()+5);
	};
	this.addShellWrokItems=function(){
		var its=[];
		 var items = sap.ui.getCore().getModel("menuModel").oData.MenuItems;
		debugger;
		for(var it in items){
			its.push(new sap.ui.ux3.NavigationItem({id:items[it].key+'-menu',key:items[it].key,text:items[it].label,subItems:this.AddSubMenuWorkItems(items[it].submenu)}));
		}
		//return its;
		var oShell = this.getObjectById(this.shellId);
		for(var i=0;i<its.length;i++){
			oShell.addWorksetItem(its[i]);
		}
		
	};
	this.AddSubMenuWorkItems=function(items){
		var arr =[];
		for(var it in items){
			arr.push( new sap.ui.ux3.NavigationItem({id:items[it].key+'-subMenu',key:items[it].key,text:items[it].label}));//			oSegmentedButton.addButton(new sap.ui.commons.Button({text:items[it].label}));
		}
		return arr;
	};
	this.getShellId=function(){
		return this.shellId;
	};
	this.getObjectById=function(id){
		return sap.ui.getCore().byId(id);
	};
	this.shellNavHandler=function(id){
		debugger;
		var keys = id.split('_');
		var navId = keys[1];
		switch(navId){
		case "mysurvey-Mandatory-subMenu":
			  this.getObjectById(this.shellId).setSelectedWorksetItem(this.getObjectById(navId));
			break;
		case "mysurvey-HighlyDesirable-subMenu":
			//var workItem = this.getObjectById("mysurvey-HighlyDesirable-subMenu");
			 this.getObjectById(this.shellId).setSelectedWorksetItem(this.getObjectById(navId));
			break;
		case "mysurvey-Desirable-subMenu":
			 this.getObjectById(this.shellId).setSelectedWorksetItem(this.getObjectById(navId));
			break;
		}
	};
	this.setContinueButtonId=function(id){
		this.contineuButtonId= id;
	};
	this.getContinueButtonId=function(){
		return this.continueButtonId;
	};
	this.getFooterHeight=function(){
		return this.footerHeight;
	};
	this.getDocWidth=function(){
		return this.docWidth;
	};
	this.getMainControllerHeight=function(){
		 var hper = (this.docHeight*this.hPer/100);
		 this.mainControllerHeight = this.docHeight-154;
		 return this.mainControllerHeight;
	};
	this.getContentHeight=function(){
		 //var hper = (this.docHeight*this.hPer/100);
		 this.contentRowHeight = (this.getMainControllerHeight()-this.footerHeight);
		 return this.contentRowHeight;
		 
	};
	this.getMatrixHeight=function(){
		this.matrixHeight=(this.contentRowHeight-7);
		return this.matrixHeight;
	};
//	this.loginOverlay=function(){
//		function handler(oEvent) {
//			//alert("Event '"+oEvent.getId()+"' triggered");
//		}
//
//		var oOverlayContainer = new sap.ui.ux3.OverlayContainer("loginOverlay",{
//			content:[new sap.ui.commons.Label({width:'80%',height:'2%'}),page]
//		});
//		oOverlayContainer.attachClose(handler);
//		oOverlayContainer.attachOpen(handler);
//		oOverlayContainer.attachOpenNew(handler);
//
//				if(!oOverlayContainer.isOpen()){
//					oOverlayContainer.open();
//				}
//				
//	};
	this.setSaveAndContinueButtonText=function(id){
		
		oButton = this.getObjectById("button_mysurvey-"+id+"-subMenu");
		if(oButton!=null){
			oButton.setText("Save");
		}
	};
	this.updateSurveySaveAndCompltedButtonStatus=function(model,id){
		debugger;
		var status = true;
		for(var obj in model){
			if(model[obj].answer=="No Answer"){
				this.getObjectById(id).setText("Save");
				this.setPathwayAction(this.getSelectedId(), "create");
				status=false;
				break;
			}
		}
		if(status==true){
			this.getObjectById(id).setText("Completed");
			this.setPathwayAction(this.getSelectedId(), "completed");
		}
	};
	this.updateSurveySaveAndCompltedButtonStatus=function(model,id){
		debugger;
		var status = true;
		for(var obj in model){
			if(model[obj].answer=="No Answer"){
				this.getObjectById(id).setText("Save");
				this.setPathwayAction(this.getSelectedId(), "create");
				status=false;
				break;
			}
		}
		if(status==true){
			this.getObjectById(id).setText("Completed");
			this.setPathwayAction(this.getSelectedId(), "completed");
		}
	};
	this.getModelDataForInitialView= function(jdata){
		debugger;
		var arr=[];
		for(var j in jdata){
			if(jdata[j].isPrimary==1){
               arr.push(jdata[j]);
			}
			if(jdata[j].no==true){
				var items = this.getSecondaryQuestionModelDataForInitialView(jdata[j].courseId);
				if(items.length>0){
					for(var it in items){
						arr.push(items[it]);
					}
				}
			}
		}
		return arr;
	};
	this.getSecondaryQuestionModelDataForInitialView=function(courseId){
		var arr=[];
		debugger;
		var sQuestion = this.secondatoryQuestion[courseId];
		if(sQuestion!=null){
			for(var s in sQuestion){
				arr.push(sQuestion[s]);
				if(sQuestion[s].yes==true){
					var questions = this.questionnaires[courseId];
					if(questions.length>0){
						for(var q in questions){
							arr.push(questions[q]);
						}
					}
				}
			}
		}
		
		return arr;	
		
	};
	this.convertoModelToTreeTableModel=function(oModel,modelId){
		var questions = oModel.oData.questions;
	       var index=0;
	       debugger;
	       var courseSqnNo=1;
	       for(var q=0;q< questions.length;q++){
	    	   if(questions[q].isPrimary==1){
	    		   if(!this.isExistUoc(this.mapModel, questions[q].uocName)){
	    			   var _yes=false;
	        		   var _no=false;
	        		   var _check=false;
	        		   if(questions[q].answer=="Yes"){
	        			   _yes=true;
	        			   _no=false;
	        			   _check=false;
	        		   }else if(questions[q].answer=="No Answer"){
	        			   _yes=false;
	        			   _no=false;
	        		   }else if(questions[q].answer=="No"){
	        			   _yes=false;
	        			   _no=true;
	        			   _check=true;
	        		   }else{
	        			   _yes=false;
	        			   _no=false;
	        		   }
	        		  // _yes=false;
	    			  //_no=false;
	        		   if(!this.isExist(this.mapModel, questions[q].question,questions[q].uocName)){
	        			   
	        			   this.mapModel.push({
	            			   question:questions[q].question,
	            			   style:questions[q].style,
	            			   isPrimary:questions[q].isPrimary,
	            			   answer:questions[q].answer,
	            			   uocQuestionId:questions[q].uocQuestionId,
	            			   courseId:questions[q].courseId,
	            			   uocName:questions[q].uocName,
	            			   courseId:questions[q].courseId,
	            			   cVisibility:true,
	            			   codeVisibility:true,
	            			   idx:index,
	            			   id:index,
	            			   yes:_yes,
	            			   no:_no,
	            			   checked:_check,
	            			  // questions:this.createSecondatoryQuestionList(index, questions[q].uocName,courseSqnNo)
	            		   });
	        			   if(this.ModelKey!=constant._SURVEY_MANDATORY_MODEL_TRANS&& this.ModelKey!=constant._SURVEY_SUPERVISOR_MODEL_TRANS){
	        			   this.secondatoryQuestion[questions[q].courseId] = this.createSecondatoryQuestionList(index, questions[q].uocName,courseSqnNo);
	        			   this.setExpendCollapse(modelId, index, _check);
	        			   }
	            		   index+=1;
	            		   courseSqnNo+=1;
	        		   }
	    			   
	    		   }
	    	   }
	}
	return this.mapModel;
};
this.ModelKey="";
this.createQuestionList=function(index,key,courseId){
	var jdata = sap.ui.getCore().getModel(this.ModelKey).oData.questions;
	var arr=[];
	var idx=0;
	debugger;
	//this.updateRPLText(courseId);
	 arr.push(	{
		 question: sap.ui.getCore().getModel("mBundle").getResourceBundle().getText("rplQuestionMessage"),
			   cVisibility:true,
			   codeVisibility:false,
			   check:false,
			   courseId:courseId,
			   icon:'config/images/collapse.png',
		   });
	var questionSqnNo=1;
	var exist = 0;
	 for(var j in jdata){
		 if(jdata[j].isPrimary==3 && jdata[j].uocName==key){
    		   var _yes=false;
    		   var _no=false;
    		   if(jdata[j].answer=="Yes"){
    			   _yes=true;
    			   _no=false;
    		   }else if(jdata[j].answer=="No Answer"){
    			   _yes=false;
    			   _no=false;
    		   }else if(jdata[j].answer=="No"){
    			   _yes=false;
    			   _no=true;
    		   }else{
    			   _yes=false;
    			   _no=false;
    		   }
    		   arr.push({
    			   question: jdata[j].question,
    			   style:jdata[j].style,
    			   isPrimary:jdata[j].isPrimary,
    			   answer:jdata[j].answer,
    			   uocQuestionId:jdata[j].uocQuestionId,
    			   courseId:jdata[j].courseId,
    			   uocName:jdata[j].uocName,
    			   courseId:jdata[j].courseId,
    			   idx:index,
    			   id:idx,
    			   yes:_yes,
    			   no:_no,
    			   cVisibility:false,
    			   codeVisibility:false,
    			   check:true,
    			  // checked:check,
    			   icon:'config/images/question_icon.png',
   	            	
    		   });
    		   exist+=1;
    		   idx+=1;
    		   questionSqnNo+=1;
	    }
	 }
	 if(exist==0){return null;}
	 return arr;
} ;
this.createSecondatoryQuestionList=function(index,key,courseSeqNo){
	var jdata = sap.ui.getCore().getModel(this.ModelKey).oData.questions;
	var arr=[];
	var idx=0;
	var _icon ='';
	if(this.ModelKey=="MandatoryTrans" || this.ModelKey=="SupervisorTrans"){
		_icon='config/images/question_icon.png';
	}
	debugger;
	
	var questionSqnNo=1;
	 for(var j in jdata){
		 if(jdata[j].isPrimary==2 && jdata[j].uocName==key){
    		   var _yes=false;
    		   var _no=false;
    		   if(jdata[j].answer=="Yes"){
    			   _yes=true;
    			   _no=false;
    		   }else if(jdata[j].answer=="No Answer"){
    			   _yes=false;
    			   _no=false;
    		   }else if(jdata[j].answer=="No"){
    			   _yes=false;
    			   _no=true;
    		   }else{
    			   _yes=false;
    			   _no=false;
    		   }
    		   arr.push({
    			   question: jdata[j].question,
    			   style:jdata[j].style,
    			   isPrimary:jdata[j].isPrimary,
    			   answer:jdata[j].answer,
    			   uocQuestionId:jdata[j].uocQuestionId,
    			   courseId:jdata[j].courseId,
    			   uocName:jdata[j].uocName,
    			   courseId:jdata[j].courseId,
    			   idx:index,
    			   id:idx,
    			   yes:_yes,
    			   no:_no,
    			   cVisibility:false,
    			   codeVisibility:false,
    			   check:true,
    			  // checked:check,
    			   icon:_icon,
    			  // questions:this.createQuestionList(index, jdata[j].uocName,questionSqnNo)
    		   });
    		   var ques = this.createQuestionList(index, jdata[j].uocName,jdata[j].courseId);
    		   if(ques!=null){
    			   this.questionnaires[jdata[j].courseId] = ques;
    		   }
    		   idx+=1;
    		   questionSqnNo+=1;
	 }
	 }
	 return arr;
} ;
this.isExist=function(jdata,key1,key2){
	 for(var j in jdata){
		 var items= jdata[j];
		 for(var it in items){
			 if(items[it].uocName==key2&&items[it].question==key1){
				 return true;
			 }
		 }
		
	 }
	 return false;
};
this.isExistUoc=function(jdata,key){
	// for(var j in jdata){
		 for(var it in jdata){
			 if(jdata[it].uocName==key){
				 return true;
			 }
		 }
		
	// }
	 return false;
};
this.updateModelBeforeSaved=function(modelName){
	var json = sap.ui.getCore().getModel(modelName).oData;
	for(var j in json){
		if(json[j].isPrimary==1){
			if(json[j].answer=="Yes"){
				this.updateAswerWithNoAnswer(json[j].courseId,modelName);
			}else{
				if(!this.updateAswerWithResposeAnswer(json[j].courseId,modelName)){return false;}
			}
			
		}
	}
	return true;
};
this.updateAswerWithNoAnswer=function(courseId,modelName){
	var json = sap.ui.getCore().getModel(modelName).oData;
	for(var j in json){
		if(json[j].courseId== courseId){
				var sQuestion = this.secondatoryQuestion[courseId];
				for(var s in sQuestion){
					sQuestion[s].answer ="No Answer";
				}
				this.secondatoryQuestion[courseId]=sQuestion;
				var questions = this.questionnaires[courseId];
				for(var q in questions){
					questions[q].answer="No Answer";
				}
				this.questionnaires[courseId]=questions;
				break;
			//}

			
		}
		
	}
};
this.updatQuesionWithAnswer= function(courseId, modelName){
	var json = sap.ui.getCore().getModel(modelName).oData;
	var arr =[];
	for(var j=0 ;j<json.length;j++){
		if(json[j].courseId== courseId && json[j].isPrimary==3){
			if(json[j].answer=="No Answer"){return false;}
			arr.push(json[j]);
		}
	}
	if(arr.length>0){
		this.questionnaires[courseId]=arr;
	}
	return true;
};
this.updateAswerWithResposeAnswer=function(courseId,modelName){
	debugger;
	var status = true;
	var json = sap.ui.getCore().getModel(modelName).oData;
	for(var j in json){
		if(json[j].courseId== courseId){
			//for(var j in json){
				if(json[j].courseId== courseId){
					if(json[j].isPrimary==2 && json[j].answer=="Yes"){
						var results = this.updateQuestionByQuestionId(json[j], courseId);
						this.secondatoryQuestion[courseId] = results;
						status = this.updatQuesionWithAnswer(courseId, modelName);
						if(!status){return false;}
					 break;	  
					}else{
						
						//this.updateAswerWithNoAnswer(courseId, modelName);
						if(json[j].isPrimary==2 && json[j].answer=="No"){
							status = true;
						}
						
					}
				}
			//}
		}
		
	}
	return status;
};
this.createSurveyRequestModel=function(modelName){
	var questions=[];
	var json = sap.ui.getCore().getModel(modelName).oData;
	for(var j in json){
		if(json[j].isPrimary==1){
			questions.push(json[j]);
			var sQuestions = this.secondatoryQuestion[json[j].courseId];
			if(sQuestions!=null){
				for(var s in sQuestions){
					questions.push(sQuestions[s]);
				}
			}
			
			var _questions = this.questionnaires[json[j].courseId];
			if(_questions!=null){
				for(var q in _questions){
					if(_questions[q].isPrimary==3){
						questions.push(_questions[q]);
					}

				}
			}
			
		}
	}
	 var upModel =  sap.ui.getCore().getModel("SurveyModel").oData;
	 upModel.questions= questions;
	return upModel;
};

this.createRequestData=function(){
	var tranModel = sap.ui.getCore().getModel(this.ModelKey).oData;
	var json={needName:tranModel.needName,questions:[]};
	for(var obj in this.mapModel.root ){
		json.questions.push({
			   question:this.mapModel.root[obj].question,
			   style:this.mapModel.root[obj].style,
			   isPrimary:this.mapModel.root[obj].isPrimary,
			   answer:this.mapModel.root[obj].answer,
			   uocQuestionId:this.mapModel.root[obj].uocQuestionId,
			   courseId:this.mapModel.root[obj].courseId,
			   uocName:this.mapModel.root[obj].uocName,
			   courseId:this.mapModel.root[obj].courseId,
		   });
	  var questions = this.mapModel.root[obj].questions;
	  for(var q in questions){
		  json.questions.push({
   			   question:questions[q].question,
   			   style:questions[q].style,
   			   isPrimary:questions[q].isPrimary,
   			   answer:questions[q].answer,
   			   uocQuestionId:questions[q].uocQuestionId,
   			   courseId:questions[q].courseId,
   			   uocName:questions[q].uocName,
   			   courseId:questions[q].courseId,
   		   });
	  }
	}
	return json;
};
this.removeAndUpdateQuestionsByCouseId=function(courseId,modelName){
	 debugger;
	 var model = sap.ui.getCore().getModel(modelName).oData;
	 var arr=[];
	 var count=0;
	 var questions = [];
	 for(var m in model){
		 if(model[m].courseId == courseId){
			 count+=1;
			 if(count<=2){
				 arr.push(model[m]);
				 //model[m].no =false;
			 }
			 if(model[m].isPrimary==3){
					 model[m].no =false;
					 model[m].yes =false;
					 model[m].answer="No Answer";
					 questions.push(model[m]); 
			 }
		 }else{
			 arr.push(model[m]);
		 }
	 }
	 if(questions.length>0){
		 this.questionnaires[courseId] = questions;
	 }
	
	 sap.ui.getCore().getModel(modelName).setData(	arr,false);
	 
};
this.updateQuestionByQuestionId=function(model,courseId){
	var sQuestions =  this.secondatoryQuestion[courseId];
	for(var s in sQuestions){
		if(model.uocQuestionId == sQuestions[s].uocQuestionId){
			sQuestions[s]=model;
			break;
		}
	}
	return sQuestions;
};
this.removeAndUpdateSecondaryQuestionByCouseId=function(courseId,modelName){
	 debugger;
	 var model = sap.ui.getCore().getModel(modelName).oData;
	 var arr=[];
	 var count=0;
	 var questions = [];
	 for(var m in model){
		 if(model[m].courseId == courseId){
			 count+=1;
			 if(count==1){
				 arr.push(model[m]);
				 model[m].no =false;
			 }
			 if(model[m].isPrimary==2 || model[m].isPrimary==3){
				 if(model[m].isPrimary==2){
					 model[m].no =false;
					 model[m].yes =false;
					 model[m].answer="No";
					 var results = this.updateQuestionByQuestionId(model[m],courseId);
					 this.secondatoryQuestion[model[m].courseId]= results;
				 }
				 if(model[m].isPrimary==3){
					 model[m].no =false;
					 model[m].yes =false;
					 model[m].answer="No Answer";
					 questions.push(model[m]); 
				 }
			 }
		 }else{
			 arr.push(model[m]);
		 }
	 }
	 if(questions.length>0){
		 this.questionnaires[courseId] = questions;
	 }
	
	 sap.ui.getCore().getModel(modelName).setData(	arr,false);
};
this.isExitRplType=function(questions){
	var status =true;
	 for(var q in questions){
		 status=false;
		 if(questions[q].question == sap.ui.getCore().getModel("mBundle").getResourceBundle().getText("rplQuestionMessage")){
			 return true;
		 }
	 }
	 return status;
};
this.getQuestionnaireByCouseId=function(courseId,modelName){
	 debugger;
	 var model = sap.ui.getCore().getModel(modelName).oData;
	 var arr=[];
	 var count=0;
	 var questions = this.questionnaires[courseId];
	
	 for(var m in model){
		 if(model[m].courseId == courseId){
			 arr.push(model[m]);
			 count+=1;
			 if(count==2){
				 if(!this.isExitRplType(questions)){
					 arr.push(	{question: sap.ui.getCore().getModel("mBundle").getResourceBundle().getText("rplQuestionMessage"),
						   cVisibility:true,
						   codeVisibility:false,
						   check:false,
						   courseId:courseId,
						   icon:'config/images/collapse.png',
					   });
				 }
				
				 for(var q in questions){
					 arr.push(questions[q]);
				 }
			 }
			
		 }else{
			 arr.push(model[m]);
		 }
	 }
	 sap.ui.getCore().getModel(modelName).setData(	arr,false);
};
this.getQuestionByCourseId = function(courseId){
	for(var c in this.secondatoryQuestion){
		if(c==courseId){
			return this.secondatoryQuestion[c];
		}
	}
	return null;
};
this.getSecondaryQuestionByCouseId=function(courseId,modelName){
	debugger;
	 var model = sap.ui.getCore().getModel(modelName).oData;
	 var arr=[];
	 for(var m in model){
		 if(model[m].courseId == courseId){
			 arr.push(model[m]);
			 var temp = null;
			 temp = this.getQuestionByCourseId(model[m].courseId);
			  //this.secondatoryQuestion[temp = ];
			  if(temp!=null){
				  for(var i in temp){
					  arr.push(temp[i]);
				  }
				  
			  }
			 
			
		 }else{
			 arr.push(model[m]);
		 }
	 }
	 sap.ui.getCore().getModel(modelName).setData(	arr,false);
};
this.getUserManagementCreateOverlay=function(){
	var oOverlayContainer = config.getObjectById(constant._USER_MANAGEMENT_CREATE_PROFILE_OVERLAY_ID);
	if(oOverlayContainer!=null){
		if(!oOverlayContainer.isOpen()){
			oOverlayContainer.open();
		}
		
	}else{
		debugger;
		var page = sap.ui.view({
			id : "User",
			viewName : "survey-template.User",
			type : sap.ui.core.mvc.ViewType.JS
		});

		function handler(oEvent) {
			//alert("Event '"+oEvent.getId()+"' triggered");
		}
		oOverlayContainer = new sap.ui.ux3.OverlayContainer({
			id:constant._USER_MANAGEMENT_CREATE_PROFILE_OVERLAY_ID,
			openButtonVisible : false,
			closeButtonVisible:true, 
			content:[new sap.ui.commons.Label({width:'80%',height:'2%'}),page]
		});
		//oOverlayContainer.addContent(oForm1);			
		oOverlayContainer.attachClose(handler);
		oOverlayContainer.attachOpen(handler);
		oOverlayContainer.attachOpenNew(handler);

		if(!oOverlayContainer.isOpen()){
			oOverlayContainer.open();
		}
	}
};
this.profileStatus = function(){
	// if(this.profieInitial){return false;}
	 var dataElement = sap.ui.getCore().getModel("userProfile").oData;
	debugger;
	 for(var data in dataElement){
		 if(dataElement[data] instanceof Array){
			 
		 }else{
			 if(data!="answerQuestion1" || data!="answerQuestion2"){
				 if(data=="gender"){
					 if(dataElement[data].genderId==-1)
						 return false; 
				 }else if(data=="function"){
					 if(dataElement[data].id==-1)
						 return false; 
				 }else if(data=="jobTitle"){
					 if(dataElement[data].id==-1)
						 return false; 
				 }else if(data=="level"){
					 if(dataElement[data].id==-1)
						 return false; 
				 }else if(data=="location"){
					 if(dataElement[data].locationId==-1)
						 return false; 
				 }else if(data=="userType"){
					 if(dataElement[data].userId==-1)
						 return false; 
				 }
			 }
			
			 
				
				
		 }
	 }
	 
	 return true;
 };
};



var TemplateIdHandler=function(){
	this.profileExitButtonId="profile-template-exit-button";
	this.profileExitButtonVisibility =false;
	this.getProfileExitButtonVisibility =function(){
		this.profileExitButtonVisibility;
	};
	this.setProfileExitButtonVisibility =function(visible){
		this.profileExitButtonVisibility=visible;
	};
	this.getProfileTemplateExitButtonId=function(){
		return this.profileExitButtonId;
	};
};