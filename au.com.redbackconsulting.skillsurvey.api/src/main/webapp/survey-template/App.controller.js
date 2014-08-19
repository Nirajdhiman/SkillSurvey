var config = new Config();
var templateHandler  = new TemplateIdHandler();
var helpAssistance = new HelpAssistance();

var generateQV = new GenerateQuickView();
var constant = new SurveyAppConstants();




var mBundle = new sap.ui.model.resource.ResourceModel({
		bundleUrl:'mBundle/appMessageBundle.properties',
		locale: sap.ui.getCore().getConfiguration().getLanguage()
});
sap.ui.getCore().setModel(mBundle,"mBundle");
sap.ui
		.controller(
				"survey-template.App",
				{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf in.co.itasca.survey.App
					 */
					role:'user',
					callForLoggedInUserName:function(){
						var urlPath =window.location.protocol + "//"+ window.location.host +"/skill/api/surveydata/profile/username";
						 $.ajax(
							    	{ 
										 type: 'GET', 
										 url: urlPath,
										 crossDomain: false,
										 cache: false,
										 async: "false",
										 contentType: "json",
										 dataType:"text",
										 success: function(userName) {
											 debugger;
											 var oText = config.getObjectById("appUserName");
											 oText.setText(userName);
											 
											
//											 debugger;
//											 var oModel = sap.ui.getCore().getModel("menuModel");
//											  var reps = oModel.oData;
//											  
//											  var data={};
//												 if(config.getRole()=="user"){
//													 data= reps.individual;
//												 }
//												if (oModel==null){
//													oModel= new sap.ui.model.json.JSONModel();
//													sap.ui.getCore().setModel(oModel,'menuModel');
//												}
//												oModel.setData(data,false);
//												config.addShellWrokItems();
										 }, 
										 error : function (e, textStatus,errorThrown ){ alert ("error in ajax call"+":::" + e.message+ errorThrown+":::" +textStatus);}
									});
					},
					callForLoggedInUserSurveyList:function(urlPath,target){
						 $.ajax(
							    	{ 
										 type: 'GET', 
										 url: urlPath,
										 crossDomain: false,
										 cache: false,
										 async: "false",
										 contentType: "json",
										 dataType:"json",
										 success: function(data) {
											 debugger;
											 var oModel =  sap.ui.getCore().getModel(target);
											 if(oModel==null){
												 oModel = new sap.ui.model.json.JSONModel();
												 oModel.setDefaultBindingMode("OneWay");
											 }
											 oModel.setData(data, false);
											 sap.ui.getCore().setModel(oModel,target);
												var bus = sap.ui.getCore().getEventBus();
												bus.publish("nav", "to", {
													id : target

												});
										 }, 
										 error : function (e, textStatus,errorThrown ){ alert ("error in ajax call"+":::" + e.message+ errorThrown+":::" +textStatus);}
									});
					},
					loadMenuModel:function(oController){
						var role = jQuery.sap.getUriParameters().get("role");
						if (role == null) {
							role = this.roles.user;
						}

						this.role = role;
					   debugger;

						var urlPath =window.location.protocol + "//"+ window.location.host +'/skill/api/surveydata/menu';
						config.setRole(this.role);
						
						$.ajax(
							    	{ 
										 type: 'GET', 
										 url: urlPath,
										 crossDomain: false,
										 cache: false,
										 async: false,
										 contentType: "json",
										 dataType:"json",
										 success: function(data) {
											
											 debugger;
											 var oModel = sap.ui.getCore().getModel("menuModel");
												if (oModel==null){
													oModel= new sap.ui.model.json.JSONModel();
													sap.ui.getCore().setModel(oModel,'menuModel');
												}
												oModel.setData(data,false);
												if(!config.profieInitial){
													window.location.reload(true);
												}else{
													oController.callForLoggedInUserName();
													config.addShellWrokItems();
												}
											
										 }, 
										 error : function (e, textStatus,errorThrown ){ 
											 config.displayNotificationBar("Error in loading menu model", "Error!");
												
										 }
									});
						
					},
					
					onInit : function() {
						this.app = this.getView().app;
//						var footer = new sap.ui.model.json.JSONModel();
//						footer.loadData('./json/app/footer.json', false);
//										sap.ui.getCore().setModel(footer, "footermodel");

										var bus = sap.ui.getCore().getEventBus();
										bus.subscribe("nav", "toLogin", this.navLoginHandler, this);
										bus.subscribe("nav", "toUpdateLoginDetails", this.navLoginHandler, this);
										bus.subscribe("nav", "fromMenu", this.navHandler, this);
										bus.subscribe("nav", "toReport", this.navHandler, this);
										bus.subscribe("nav", "fromUserManagement", this.navHandler, this);
										bus.subscribe("nav", "fromFooterBar", this.navHandler, this);
										bus.subscribe("nav", "fromTopBar", this.navHandler, this);
										bus.subscribe("nav", "toUser", this.navHandler, this);
										bus.subscribe("nav", "toRole", this.navHandler, this);
										bus.subscribe("nav", "toProfile", this.navHandler, this);
										bus.subscribe("nav", "toDropDownService", this.navHandler, this);
										bus.subscribe("nav", "fromPathway", this.navHandler, this);
										bus.subscribe("nav", "to", this.navHandler, this);
                    
						bus.publish("nav", "toProfile", {
							id : "UserProfile",
							data:{action:"status"}

						});

					},
					
					navTo:function(data){
						debugger;

						debugger;
						var oShell = config.getObjectById(config.getShellId());
						oShell.destroyContent();
							var fullViewName = config.getViewFullName(data.id);;

							var page = sap.ui.view({
								id : data.id,
								viewName : fullViewName,
								type : sap.ui.core.mvc.ViewType.JS
							});
							oShell.addContent(page);
					},
					 lastRquest:"",
					navFromMenu:function(data){
						debugger;
						var keyList = data.id.split('-');
						var menuKey = keyList[0];
						var navKey = keyList[1];
						switch(menuKey){
						case "mysurvey":
						//	var oController = this;
							var urlPath=window.location.protocol + "//"+ window.location.host +'/skill/api/surveydata/';
								if(this.lastRquest!=data.id){
									///
									config.setSaveAndContinueButtonText(navKey);
									this.lastRquest = data.id;
									if(navKey=="Mandatory"){
										urlPath+="get/mandatory";
										this.callForPathWayGetDataSevice(this, urlPath, navKey);
									}else if(navKey=="SurveyOverview"){
										urlPath+="overview";
										this.callForLoggedInUserSurveyList(urlPath, navKey);
									}else if(navKey=="HighlyDesirable"){
										urlPath+='get/highlydesirable';
										this.callForPathWayGetDataSevice(this, urlPath, navKey);
									}else if(navKey=="Desirable"){
										urlPath+='get/desirable';
										this.callForPathWayGetDataSevice(this, urlPath, navKey);
									}else if(navKey=="Supervisor"){
										urlPath+='get/supervisor';
										//alert("code to be implemented..");
										this.callForPathWayGetDataSevice(this, urlPath, navKey);
									}
									
									else{
//										 var oModel = sap.ui.getCore().getModel(navKey);
//											if (oModel==null){
//												oModel= new sap.ui.model.json.JSONModel();
//												sap.ui.getCore().setModel(oModel,navKey);
//											}
//											oModel.setData([],false);
//										var bus = sap.ui.getCore().getEventBus();
//										bus.publish("nav", "to", {
//											id : navKey,
//
//										});
									}
		
									
								}else{
									return;
								}
								
								
							break;
						case "myreport":
							var urlPath=window.location.protocol + "//"+ window.location.host +'/skill/api/surveydata/';
							if(this.lastRquest!=data.id){
								this.lastRquest = data.id;
								if(navKey=="MandatoryReport"){
									urlPath+="report/mandatory";
									this.callForPathwayGetReportDataSevice(this, urlPath, navKey);
									
								}else if(navKey=="HighlyDesirableReport"){
									urlPath+="report/highlydesirable";
									this.callForPathwayGetReportDataSevice(this, urlPath, navKey);
								}else if(navKey=="DesirableReport"){
									urlPath+="report/desirable";
									this.callForPathwayGetReportDataSevice(this, urlPath, navKey);
								}else if(navKey=="SkillsRecognitionReport"){
									urlPath+="report/recognition";
									this.callForPathwayGetReportDataSevice(this, urlPath, navKey);
							
								}else if(navKey=="SkillsCompentencyGapReport"){
									urlPath+="report/gap";
									this.callForPathwayGetReportDataSevice(this, urlPath, navKey);
							
								}else if(navKey=="SupervisorReport"){
									urlPath+="report/supervisor";
									this.callForPathwayGetReportDataSevice(this, urlPath, navKey);
							
								}
								
								
							}else{
								return;
							}
							break;
						case "Home":
							var items = this.getDefaultSelected("menuModel","profileHome");
							var keys = items.split('-');
							var key = keys[1];
							if(this.lastRquest!=items){
								this.lastRquest = items;
								var bus = sap.ui.getCore().getEventBus();
								bus.publish("nav", "to", {
									id : "Master",

								});
							}else{
								return;
							}
							break;
						case "usermanagement":
							var urlPath=window.location.protocol + "//"+ window.location.host +'/skill/api/surveydata/admin/';
							if(this.lastRquest!=data.id){
								urlPath+="profile/list";
								this.lastRquest=data.id;
								this.callForAllProfileData(this, urlPath, navKey);
								
							}else{
								return;
							}
							break;
						case "managesurvey":
							if(this.lastRquest!=data.id){
								this.lastRquest=data.id;
								
								var bus = sap.ui.getCore().getEventBus();
								bus.publish("nav", "to", {
									id : navKey,

								});
							}else{
								return;
							}
						break;
						case "managesite":
							if(this.lastRquest!=data.id){
								this.lastRquest=data.id;
								
								var bus = sap.ui.getCore().getEventBus();
								bus.publish("nav", "to", {
									id : navKey,

								});
							}else{
								return;
							}
							break;
						}
						
					},
					navToReport:function(data){
						debugger;
						
						
						if ( this.app.getPage(data.id)== null) {
							var page = sap.ui.view({
								id : data.id,
								viewName : "survey-template."+data.id,
								type : sap.ui.core.mvc.ViewType.JS
							});
							this.app.addPage(page);

						}
						
						
						this.app.to(data.id, "show");
					},

					callForPathWayGetDataSevice:function(oController,urlPath,target){
						$.ajax(
							    	{ 
										 type: 'GET', 
										 url: urlPath,
										 crossDomain: false,
										 cache: false,
										 async: "false",
										 contentType: "json",
										 success: function(data) {
											 if(data.courseItems.length<1){
												 config.setNeedSaveButtonStatus(false);
											 }else{
												 config.setNeedSaveButtonStatus(true);
												 var oButton = config.getObjectById("button_mysurvey-"+target+"-subMenu");
												 if(oButton!=null){
													 oButton.setVisible(config.getNeedSaveButtonStatus());
												 }
											 }
											 debugger;
											 var oSurveyModel =  sap.ui.getCore().getModel("SurveyModel");
											 if(oModel==null){
												 oSurveyModel = new sap.ui.model.json.JSONModel();
												 oSurveyModel.setDefaultBindingMode("TwoWay");
											 }
											 oSurveyModel.setData(data, false);
											 sap.ui.getCore().setModel(oSurveyModel,"SurveyModel");
											 var modelKey = oController.generateKey(data.needName);
											 var oModel =  sap.ui.getCore().getModel(modelKey);
											 if(oModel==null){
												 oModel = new sap.ui.model.json.JSONModel();
												 oModel.setDefaultBindingMode("TwoWay");
											 }
												 
											 var upModel =  sap.ui.getCore().getModel("SurveyModel").oData;

												 config.ModelKey = modelKey+'Trans';
												 
												 var toModel =  sap.ui.getCore().getModel(config.ModelKey);
												 if(toModel==null){
													 toModel = new sap.ui.model.json.JSONModel();
													 toModel.setDefaultBindingMode("TwoWay");
												 }
												 toModel.setData(data, false);
												 sap.ui.getCore().setModel(toModel,config.ModelKey);
												 config.mapModel=[];
												 var _data = config.convertoModelToTreeTableModel(sap.ui.getCore().getModel(config.ModelKey));
												 sap.ui.getCore().setModel(oModel,modelKey);
												 oModel.setData(_data, false);
											     var _initialData =  config.getModelDataForInitialView(_data)
												 
											     oModel.setData(_initialData,false);
											  
												 sap.ui.getCore().setModel(oModel,modelKey);
											
											 
										 
										config.setPathwayAction(target, "create");
										config.setSelectedId(target);
						
										 sap.ui.getCore().setModel(oModel);
		
											var bus = sap.ui.getCore().getEventBus();
											bus.publish("nav", "to", {
												id : target

											});

												
										 }, 
										 error : function (e, textStatus,errorThrown ){ 
											 config.displayNotificationBar("Error occured in reading data", "Error!");
												
											// alert ("error in ajax call"+":::" + e.message+ errorThrown+":::" +textStatus);
											 }
									});
					},
					callForPathWaySetDataSevice:function(oController,urlPath,target){
					
						debugger;
						var  oModel = new sap.ui.model.json.JSONModel();
						oModel.setData(config.createSurveyRequestModel(target), false);
						sap.ui.getCore().setModel(oModel,"Request");
						var transientModel = sap.ui.getCore().getModel("Request");
						debugger;
						$.ajax(
							    	{ 
										 type: 'POST', 
										 url: urlPath,
										 crossDomain: false,
										 contentType: 'application/json; charset=UTF8',
										 cache: false,
										 data:transientModel.getJSON(),
										 contentType: "json",
										 success: function(data) {
											 config.displayNotificationBar(sap.ui.getCore().getModel("mBundle").getResourceBundle().getText("surveySaveMessage"), "Success!");		
										 }, 
										 error : function (e, textStatus,errorThrown ){
											// alert ("error in ajax call"+":::" + e.message+ errorThrown+":::" +textStatus);
											 config.displayNotificationBar("Something went wrong!", "Error!");
												
										 }
									});
					},
					callForPathWayCompletedDataSevice:function(oController,urlPath,target){
						 var transientModel = sap.ui.getCore().getModel("SurveyModel");
						$.ajax(
							    	{ 
										 type: 'POST', 
										 url: urlPath,
										 crossDomain: false,
										 contentType: 'application/json; charset=UTF8',
										 cache: false,
										 data:transientModel.getJSON(),
										 contentType: "json",
										 success: function(data) {
											 config.displayNotificationBar("Data  has been successfully saved", "Success!");
												
										 }, 
										 error : function (e, textStatus,errorThrown ){
											// alert ("error in ajax call"+":::" + e.message+ errorThrown+":::" +textStatus);
											 config.displayNotificationBar("Somthing went wrong!", "Error!");
												
										 }
									});
					},
					// this navToProfile method handle all action related to profile..
					// method call user profile data.....
					callForProfileGetDataSevice:function(oController,urlPath,target){
						$.ajax(
							    	{ 
										 type: 'GET', 
										 url: urlPath,
										 crossDomain: false,
										 cache: false,
										 contentType: "json",
										 success: function(data) {
											 debugger;
											 var oModel = sap.ui.getCore().getModel("userProfile");
												if (oModel==null){
													oModel= new sap.ui.model.json.JSONModel();
													sap.ui.getCore().setModel(oModel,'userProfile');
												}
												oModel.setData(data,false);
												sap.ui.getCore().setModel(oModel,"userProfile");
												var levels = data.levels;
												var lModel = sap.ui.getCore().getModel("pathway");
												if (lModel==null){
													lModel= new sap.ui.model.json.JSONModel();
													sap.ui.getCore().setModel(lModel,'levels');
												}
												lModel.setData(levels,false);
												sap.ui.getCore().setModel(lModel,"levels");
												
												var pathways = data.pathways;
												var pModel = sap.ui.getCore().getModel("pathway");
												if (pModel==null){
													pModel= new sap.ui.model.json.JSONModel();
													sap.ui.getCore().setModel(pModel,'pathway');
												}
												pModel.setData(pathways,false);
												sap.ui.getCore().setModel(pModel,"pathway");
											
												
												var jJobTitles = data.jobTitles;
											     var rResponse = data.responseTypes;
												 var jModel = sap.ui.getCore().getModel("jobtitles");
													if (jModel==null){
														jModel= new sap.ui.model.json.JSONModel();
														sap.ui.getCore().setModel(jModel,'jobtitles');
													}
													jModel.setData(jJobTitles,false);
													sap.ui.getCore().setModel(jModel,"jobtitles");
													
													 var rModel = sap.ui.getCore().getModel("responseTypes");
														if (rModel==null){
															rModel= new sap.ui.model.json.JSONModel();
															sap.ui.getCore().setModel(rModel,'responseTypes');
														}
														rModel.setData(rResponse,false);
														sap.ui.getCore().setModel(rModel,"responseTypes");
													
													//responseTypes
													
													 var oProfileOverlay = sap.ui.getCore().byId("userProfileOverlay");
									            	  if(oProfileOverlay==null){
									            		  oController.getProfilePageContent();
									            	  }else{
									            		  if(!oProfileOverlay.isOpen()){
									            			  oProfileOverlay.closeButtonVisible=true;
									            			  oProfileOverlay.open();
															}
									            	  }
													
												///
												//oController.getProfilePageContent();
										 }, 
										 error : function (e, textStatus,errorThrown ){ alert ("error in ajax call"+":::" + e.message+ errorThrown+":::" +textStatus);}
									});
					},
					callForAllProfileData:function(oController,urlPath,target){
						$.ajax(
						    	{ 
									 type: 'GET', 
									 url: urlPath,
									 crossDomain: false,
									 cache: false,
									 contentType: "json",
									 success: function(data) {
										 debugger;
										 var oModel = sap.ui.getCore().getModel("profileListData");
											if (oModel==null){
												oModel= new sap.ui.model.json.JSONModel();
												sap.ui.getCore().setModel(oModel,'profileListData');
											}
											oModel.setData(data.items,false);
											sap.ui.getCore().setModel(oModel,'profileListData');
											var bus = sap.ui.getCore().getEventBus();
											bus.publish("nav", "to", {
												id : target,
											});	
									 }, 
									 error : function (e, textStatus,errorThrown ){
										 config.displayNotificationBar("Something went wrong!", "Error!");
										 }
								});
					},
					callForProfileUpdateDataSevice:function(oController,urlPath,target){
						var input = sap.ui.getCore().getModel("userProfile").getJSON() ;
						debugger;
					
						$.ajax(
							    	{ 
										 type: 'POST', 
										 url: urlPath,
										 contentType: 'application/json; charset=UTF8',
										 cache: false,
										data: input,
										 success: function(data) {
											 debugger;
											 config.displayNotificationBar("Profile has been updated", "Success!");
											 window.location.reload(true);
											
											 //var urlPath = window.location.protocol + "//"+ window.location.host +"/skill/api/surveydata/profile/status";
											// oController.callForProfileStatusSevice(oController,urlPath,"Master");
											// confims();
												//var bus = sap.ui.getCore().getEventBus();
												//bus.publish("nav", "to", {
												//	id : "Master",

												//});			 
										 }, 
										 error : function (e, textStatus,errorThrown ){ 
											 debugger;
											 config.displayNotificationBar("Something went wrong!", "Error!");
											 }
									});
					},
					callForSelectedUserProfileDataService:function(oController,urlPath,target){
						$.ajax(
						    	{ 
									 type: 'POST', 
									 url: urlPath,
									 contentType: 'application/json; charset=UTF8',
									 cache: false,
								//	data: input,
									 success: function(data) {
										 debugger;		 
									 }, 
									 error : function (e, textStatus,errorThrown ){ 
										 debugger;
										 config.displayNotificationBar("Something went wrong!", "Error!");
										 }
								});
					},
					callForCreateUserProfileDataService:function(oController,urlPath,target){
						$.ajax(
						    	{ 
									 type: 'GET', 
									 url: urlPath,
									 contentType: 'application/json; charset=UTF8',
									 cache: false,
									 dataType:'json',
									 success: function(resp) {
										 debugger;		
										 var oModel = new sap.ui.model.json.JSONModel();
										 oModel.setData(resp,false);
										sap.ui.getCore().setModel(oModel,'blankProfileModel');
										
										var userTypes = resp.userTypes;
										 var oUTModel = new sap.ui.model.json.JSONModel();
										 oUTModel.setData(userTypes,false);
										sap.ui.getCore().setModel(oUTModel,'userTypes');
										
										config.getUserManagementCreateOverlay();
									 }, 
									 error : function (e, textStatus,errorThrown ){ 
										 debugger;
										 config.displayNotificationBar("Something went wrong!", "Error!");
										 }
								});
					},
					callForProfileStatusSevice:function(oController,urlPath,target){
						debugger;
					
						$.ajax(
							    	{ 
										 type: 'GET', 
										 url: urlPath,
										 contentType: 'application/json; charset=UTF8',
										 cache: false,
										 dataType:'json',
										 success: function(status) {
											if(!status){
												//config.();
												var bus = sap.ui.getCore().getEventBus();
												bus.publish("nav", "toProfile", {
													id : "UserProfile",
													data:{action:"get"}

												});	
											}else{
												
												oController.loadMenuModel(oController);
												var bus = sap.ui.getCore().getEventBus();
												bus.publish("nav", "to", {
													id : "Master",

												});		
											}
											 	 
										 }, 
										 error : function (e, textStatus,errorThrown ){ 
											 debugger;
											 config.displayNotificationBar("Something went wrong!", "Error!");
											 }
									});
					},
					callForPathwayGetReportDataSevice:function(oController,urlPath,target){
						$.ajax(
							    	{ 
										 type: 'GET', 
										 url: urlPath,
										 crossDomain: false,
										 cache: false,
										 contentType: "json",
										 success: function(data) {
											var oShell = config.getObjectById(config.getShellId());
											oShell.destroyContent();
											 debugger;
											 var oReportModel = sap.ui.getCore().getModel("ReportModel");
												if (oReportModel == null) {
													oReportModel = new sap.ui.model.json.JSONModel();
													oReportModel.setDefaultBindingMode("OneWay");
												}
												oReportModel.setData(data, false);
												sap.ui.getCore().setModel(oReportModel,"ReportModel");
											var jsonModel = new Array();;
											var content = data;
											if(target=="SkillsRecognitionReport" || target=="SkillsCompentencyGapReport"){
											    var content = data.items;
												for(var cnt in content){
												var nName=  content[cnt].needDescription;
												var items = content[cnt].items;
												for(var it in items ){
													items[it].needDescription = nName;
													jsonModel.push(items[it]);
												}
											}
											}else{
												var nName=  content.needDescription;
												var items = content.items;
												for(var it in items ){
													items[it].needDescription = nName;
													jsonModel.push(items[it]);
												}
											}
											
											//var oReportModel = sap.ui.getCore().getModel(target);
											//if (oReportModel == null) {
												var 	oReportModel = new sap.ui.model.json.JSONModel();
												//oReportModel.setDefaultBindingMode("OneWay");
											//}
											//oReportModel.setData([], false);
											oReportModel.setData(jsonModel, false);
											sap.ui.getCore().setModel(oReportModel,target);
											var bus = sap.ui.getCore().getEventBus();
											bus.publish("nav", "to", {
												id : target,

											});
										 }, 
										 error : function (e, textStatus,errorThrown ){ 
											 config.displayNotificationBar("Something went wrong!", "Error!");
											 }
									});
					},
					navToProfile:function(data){
						debugger;
						var urlPath = window.location.protocol + "//"+ window.location.host +"/skill/api/surveydata/profile";
						switch(data.data.action){
						case "update":
							 urlPath+="/edit";
							this.callForProfileUpdateDataSevice(this, urlPath, "Master");
							break;
						//	config.addShellWrokItems();
							var bus = sap.ui.getCore().getEventBus();
							bus.publish("nav", "to", {
								id : "Master",

							});	
						case "exit":
						//	config.addShellWrokItems();
							var bus = sap.ui.getCore().getEventBus();
							bus.publish("nav", "to", {
								id : data.id

							});
							 config.displayNotificationBar("Data could not save!", "Alert!");
							break;
						case "status":
							// urlPath+='/status';
							 urlPath+="/status"
							//alert("waiting for profile status");
							this.callForProfileStatusSevice(this, urlPath, data.id);
							break;
						case "get":
							 // urlPath+="sanjay"; // its default for demo
							  this.callForProfileGetDataSevice(this, urlPath, data.id);
							break;
						}
						
					},

					navFromUserManagement:function(data){
						//alert(config.getSelectedUserProfileId());
						//alert(data.id);
						//return;
						var urlPath = window.location.protocol + "//"+ window.location.host +"/skill/api/surveydata/admin/profile/";
						switch(data.id){
						case"create":
							urlPath+="blank";
							this.callForCreateUserProfileDataService(this,urlPath,data);
							break;
							
						case "edit":
							// make call for getselected user profile all data
							// this.callForSelectedUserProfileDataService(this,urlPath,data);
							break;
						
						case "delete":
							//config.setActionStatus(false);
							//oModel.setData(data.context.data, false);
							break;
						}
				
						
					},
					
				
				   navFromFooterBar:function(data){
					   var bus = sap.ui.getCore().getEventBus();
						bus.publish("nav", "to", {
							id : data.id,

						});
				   },
				   navFromTopBar:function(data){
					   var bus = sap.ui.getCore().getEventBus();
						bus.publish("nav", "to", {
							id : data.id,

						});
				   },
					navHandler : function(channelId, eventId, data) {
						debugger;
					if(eventId=="to"){
							this.navTo(data);
					}else if(eventId=="toReport"){
						this.navToReport(data);
					}else if(eventId=="fromMenu"){
						this.navFromMenu(data);
					}else if(eventId=="toProfile"){
						this.navToProfile(data);
					}else if(eventId=="fromUserManagement"){
						this.navFromUserManagement(data);
					}else if(eventId=="toUser"){
						this.navToUser(data);
					}else if(eventId=="toRole"){
						this.navToRole(data);
					}else if(eventId=="fromFooterBar"){
						this.navFromFooterBar(data);
					}else if(eventId=="fromTopBar"){
						this.navFromTopBar(data);
					}else if(eventId=="fromPathway"){
						this.navFromPathway(data);
					}else if(eventId=="toDropDownService"){
						this.navToDropDownServices(data);
					}
					
					},
					navToDropDownServices:function(data){
						var urlPath = window.location.protocol + '//'+ window.location.host +'/skill/api/surveydata/profile/get/'+data.id+'/'+data.context.id;
						//alert(urlPath);
					//	return;
						$.ajax(
						    	{ 
									 type: 'GET', 
									 url: urlPath,
									 crossDomain: false,
									 cache: false,
									 contentType: "json",
									 success: function(reps) {
										 debugger;
										 var oReportModel = sap.ui.getCore().getModel(data.id);
											if (oReportModel == null) {
												oReportModel = new sap.ui.model.json.JSONModel();
												oReportModel.setDefaultBindingMode("OneWay");
											}
											oReportModel.setData(reps, false);
											sap.ui.getCore().setModel(oReportModel,data.id);
											var oControl = config.getObjectById(data.context.target);
											oControl.setEnabled(true);
											oControl.setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel(data.id)));
										
									 }, 
									 error : function (e, textStatus,errorThrown ){ 
										 config.displayNotificationBar("Something went wrong!", "Error!");
										 }
								});
					},
					navFromPathway:function(data){
						var urlPath = window.location.protocol + "//"+ window.location.host +"/skill/api/surveydata/survey/";
						switch(data.data.action){
						
						case "create":
							urlPath+="save";
							this.callForPathWaySetDataSevice(this, urlPath, data.id);
							break;
						case "completed":
							urlPath+="completed";
							this.callForPathWayCompletedDataSevice(this, urlPath, data.id);
							break;
						}
					},
					
                 
					mainmenuSelectHandler : function(key) {
						debugger;
						var bus = sap.ui.getCore().getEventBus();
						bus.subscribe("nav", "fromMenu", this.navHandler, this);

						bus.publish("nav", "fromMenu", {
							id : key,

						});

					},

					getDefaultSelected:function(id,menuName){
						var items = sap.ui.getCore().getModel(id).oData.MenuItems;
						for(var it in items){
							    if(items[it].key==menuName){
							    	var subit = items[it].submenu;
									for(var bit in subit){
										if(subit[bit].isDefault){
											return subit[bit].key;
										}
									}
							    }
								
						}
					},

					footerSelectHandler : function(evt) {
						var key = evt.getSource().data("key");
						var bus = sap.ui.getCore().getEventBus();
						bus.subscribe("nav", "to", this.navHandler, this);

						bus.publish("nav", "to", {
							id : key,

						});

					},

					roles : {
						user : "user",
						admin : "administrator",
						supervisor : "supervisor",
						reporting : "reporting"
					},
					
					getProfilePageContent:function(){
						//var oShell = config.getObjectById(config.getShellId());
					//	oShell.destroyContent();
						var oOverlayContainer = config.getObjectById("userProfileOverlay")
						if(oOverlayContainer!=null){
							if(!oOverlayContainer.isOpen()){
								oOverlayContainer.open();
							}
							
						}else{
							debugger;
							var page = sap.ui.view({
								id : "UserProfile",
								viewName : "survey-template.UserProfile",
								type : sap.ui.core.mvc.ViewType.JS
							});
					
					function handler(oEvent) {
						//alert("Event '"+oEvent.getId()+"' triggered");
					}

					oOverlayContainer = new sap.ui.ux3.OverlayContainer({
						id:"userProfileOverlay",
						openButtonVisible : false,
						closeButtonVisible:false, 
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
						
					
					},
					generateKey:function(str){
						var key="";
						for(var i=0;i<str.length;i++){
							if(str[i]!=" "){
								key+=str[i];
							}
						}
						return key;
					},
					createHelpOverlayContainer:function(){
						debugger;

				        var oControl = this;
						var c = sap.ui.commons; /* shorthand */    
						function createTI() {
						var oActionExit = new sap.ui.ux3.ThingAction({
								id : "user-help-button-exit",
								text : "Exit",
								tooltip: "Exit",
								width:'120px'
						});
						var oTI = new sap.ui.ux3.ThingInspector({ 
							id:config.getHelpThingInspactorId(),
							icon:"config/images/help.png", 
							firstTitle:"Help Assistance",
							closeButtonVisible:true,
							openButtonVisible:false,
							width:'100%',
								height:'100%',
							actions:[oActionExit]
						});
						oTI.attachActionSelected(function(oControlEvent) {
							oTI.destroy();
						});
						oTI.attachFacetSelected(function(oControlEvent) {
							var id = oControlEvent.getParameters().id;
							//alert("Facet \"" + id + "\" of Thing \""
							//		+ oControlEvent.getSource().getId() + "\" selected");
							//setContent();
						});
					    oTI.attachClose(function(oControlEvent) { 
					    	
					    	oTI.destroy();
					    });
					    oTI.attachOpenNew(function(oControlEvent) {
							//var id = oControlEvent.getParameters().id;
							//alert("Thing \"" + id + "\"openNew triggered");
						});
					    oTI.attachOpen(function(oControlEvent) {
						//	var id = oControlEvent.getParameters().id;
						//	alert("Thing \"" + id + "\"open triggered");
						});
					  //  oTI.addAction(oA4);
					    return oTI;
						}
						
					   
					    	oTI = createTI();
					    	helpAssistance.createThingGroup("helpHome");
					    	//oTI.addFacetContent(oFC1);
					    	oTI.open();
					  // return oTI;
					 

					},

});