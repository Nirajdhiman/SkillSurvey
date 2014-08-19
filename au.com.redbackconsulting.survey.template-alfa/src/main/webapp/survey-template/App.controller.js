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
					onInit : function() {
						this.app = this.getView().app;

						var role = jQuery.sap.getUriParameters().get("role");
						if (role == null) {
							role = this.roles.user;
						}

						this.role = role;
						// alert(this.role);
						var jsonTopMenu = {};
						var modelTopMenu = new sap.ui.model.json.JSONModel();
						modelTopMenu.loadData('./json/app/topmenu.json', false);
						modelTopMenu
								.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);

						var modelMainMenu = new sap.ui.model.json.JSONModel();
						
						var modelCreateSurvey = new sap.ui.model.json.JSONModel();
//						modelCreateSurvey.loadData('./json/createsurvey/createmenu.json');
//						sap.ui.getCore().setModel(modelCreateSurvey, "csm");
//					modelCreateSurvey.setDefaultBindingMode("OneWay");

						switch (this.role) {
						case this.roles.admin:
							modelMainMenu
									.loadData(
											'./json/app/role/adminmainmenu.json',
											false);
							break;
						case this.roles.supervisor:
							modelMainMenu.loadData(
									'./json/app/role/sueprvisormainmenu.json',
									false);
							break;
							break;
						case this.roles.reporting:
							modelMainMenu.loadData(
									'./json/app/role/reportingmainmenu.json',
									false);
							break;

						default:
							modelMainMenu.loadData(
									'./json/app/role/mainmenu.json', false);
							break;
						}

						// modelMainMenu.loadData('./json/app/mainmenu.json',false);

						// var breadcum = new sap.ui.model.json.JSONModel();
						// breadcum.loadData('./json/app/breadcum/home.json',
						// false);

						var footer = new sap.ui.model.json.JSONModel();
						footer.loadData('./json/app/footer.json', false);
						sap.ui.getCore().setModel(modelTopMenu, "topmenumodel");
						sap.ui.getCore().setModel(modelMainMenu,
								"mainmenumodel");
						// sap.ui.getCore().setModel(breadcum,"breadcummodel");
						sap.ui.getCore().setModel(footer, "footermodel");

						var bus = sap.ui.getCore().getEventBus();
						bus.subscribe("nav", "fromMenu", this.navHandler, this);
						bus.subscribe("nav", "toReport", this.navHandler, this);
						bus.subscribe("nav", "to", this.navHandler, this);

						bus.publish("nav", "to", {
							id : "home",

						});

					},
					navTo:function(data){
						debugger;
						//this.resetBreadcumModel(data.id);
						var key = data.id;

						if (this.app.getPage(data.id) === null) {
						//	this.setInitialDataModelofSelectedPage(data.id);
							var fullViewName = this.getViewName(data.id);

							var page = sap.ui.view({
								id : key,
								viewName : fullViewName,
								type : sap.ui.core.mvc.ViewType.JS
							});
							this.app.addPage(page,"slide");

						}
						;
						this.resetDateModelofSelectedPage (data.id);
						this.app.to(key, "show");
					},
					navToSurvey:function(data){
						
					},
					 lastRquest:"",
					navFromMenu:function(data){
						debugger;
						var keyList = data.id.split('-');
						var menuKey = keyList[0];
						var navKey = keyList[1];
						//alert(menuKey);
						switch(menuKey){
						case "Survey":
								var items = this.getDefaultSelected("menu","mysurvey");
								var keys = items.split('-');
								var key = keys[1];
								this.setSelectedLeftPaneModel("mysurvey");
								if(this.lastRquest!=items){
								//	alert(key);
									this.lastRquest = items;
									var bus = sap.ui.getCore().getEventBus();
									bus.publish("nav", "to", {
										id : key,

									});
								}else{
									return;
								}
								
								
							break;
						case "Report":
							var items = this.getDefaultSelected("menu","myreport");
							var keys = items.split('-');
							var key = keys[1];
							this.setSelectedLeftPaneModel("myreport");
							if(this.lastRquest!=items){
								//alert(key);
								this.lastRquest = items;
								var bus = sap.ui.getCore().getEventBus();
								bus.publish("nav", "to", {
									id : "Report",

								});
							}else{
								return;
							}
							break;
						case "Home":
							var items = this.getDefaultSelected("menu","profileHome");
							var keys = items.split('-');
							var key = keys[1];
							if(this.lastRquest!=items){
								//alert(key);
								this.lastRquest = items;
								var bus = sap.ui.getCore().getEventBus();
								bus.publish("nav", "to", {
									id : "Master",

								});
							}else{
								return;
							}
							break;
						}
						
					},
					navToReport:function(data){
						debugger;
					//	this.resetBreadcumModel(data.id);
						var key = data.data.key;
						//this.setInitialDataModelofSelectedPage(data.id);
						if (this.app.getPage(data.data.key) === null) {
						//	this.setInitialDataModelofSelectedPage(data.id);
							var fullViewName = this.getViewName(data.data.key);

							var page = sap.ui.view({
								id : data.data.key,
								viewName : fullViewName,
								type : sap.ui.core.mvc.ViewType.JS
							});
							this.app.addPage(page);

						}
						;
						
						this.app.to(key, "show");
					},
					navHandler : function(channelId, eventId, data) {
						
					if(eventId=="to"){
							this.navTo(data);
					}else if(eventId=="toReport"){
						this.navToReport(data);
					}else if(eventId=="fromMenu"){
						this.navFromMenu(data);
					}
					
					},

					getViewName : function(id) {
						var viewName;
						switch (id) {
						case 'Mandatory':
							viewName = 'Mandatory';

							break;
						case 'HighlyDesirable':
							viewName = 'HighlyDesirable';

							break;
						case 'Desirable':
							viewName = 'Desirable';

							break;

						case 'Master':
							viewName = 'Master';

							break;
						case 'home':
							viewName = 'Master';

							break;
						case 'help':
							viewName = "Help";
							break;
						case 'logout':
							viewName = "Logout";
							break;
						case 'createsurvey':
							viewName = "CreateSurvey";
							break;
						case 'createreport':
							viewName = "CreateReport";
							break;
						case 'printreport':
							viewName = "PrintReport";
							break;
						case 'createuser':
							viewName = "CreateUser";
							break;
						case 'contactus':
							viewName = "Contactus";
							break;
						case 'sitemap':
							viewName = "SiteMap";
							break;
						case 'errorbugs':
							viewName = "ErrorBugs";
							break;
						case 'mandatory':
					 			viewName = "Mandatory";
							break;
						case 'desirable':
				 			viewName = "Desirable";
						break;
						case 'highlydesirable':
				 			viewName = "HighlyDesirable";
						break;
						case 'createreportmandatory':
				 			viewName = "Report";
						break;
					case 'createreportdesirable':
			 			viewName = "Report";
					break;
					case 'createreporthighlydesirable':
			 			viewName = "Report";
					break;
					case 'Report':
			 			viewName = "Report";
					break;
					case 'user':
			 			viewName = "UserMaster";
					break;
					case 'role':
			 			viewName = "RoleMaster";
					break;

						default:
							break;
						}

						return 'survey-template.' + viewName;
					},

					setInitialDataModelofSelectedPage : function(id) {
						switch (id) {
						case 'createsurvey':
							var model = new sap.ui.model.json.JSONModel();
							sap.ui.getCore().setModel(model,
									'createsurveymodel');
						//	model.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);

							if (this.role == this.roles.admin) {
								model
										.loadData(
												'./json/createsurvey/admincreatemenu.json',
												false);
							} else if (this.role == this.roles.supervisor) {
								model
										.loadData(
												'./json/createsurvey/admincreatemenu.json',
												false);
							} else {
								model.loadData(
										'json/createsurvey/createmenu.json',
										false);
							}
							break;
						case 'createreport':
							var model = new sap.ui.model.json.JSONModel();
							sap.ui.getCore().setModel(model,
									'createreportmodel');
						//	model.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);

							if (this.role == this.roles.admin) {
								model
										.loadData(
												'./json/createreport/admincreatereportmenu.json',
												false);
							} else if (this.role == this.roles.supervisor) {
								model
										.loadData(
												'./json/createreport/supervisorcreatereportmenu.json',
												false);
							} else {
								model.loadData(
										'json/createreport/createreportmenu.json',
										false);
							}
							break;
						case 'createreportmandatory':
							var model = new sap.ui.model.json.JSONModel();
							sap.ui.getCore().setModel(model,
									'Report');
							model.loadData(
									'json/report/mandatory.json',
									true);
							break;
						case 'user':
							var model = new sap.ui.model.json.JSONModel();
							sap.ui.getCore().setModel(model,
									'usermenumodel');
						//	model.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);

							if (this.role == this.roles.admin) {
								model
										.loadData(
												'./json/createuser/usermenu.json',
												false);
							}  ;
							break;
							
						case 'role':
							var model = new sap.ui.model.json.JSONModel();
							sap.ui.getCore().setModel(model,
									'rolemenumodel');
						//	model.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);

							if (this.role == this.roles.admin) {
								model
										.loadData(
												'./json/createuser/rolemenu.json',
												false);
							}  ;
							break;


						default:
							break;
						}

					},

					resetBreadcumModel : function(id) {

						var name = id;

						var breadcum = sap.ui.getCore().getModel(
								"breadcummodel");
						if (breadcum == null) {
							breadcum = new sap.ui.model.json.JSONModel();
							sap.ui.getCore().setModel("breadcummodel", id);
						}
						// var breadcum = new sap.ui.model.json.JSONModel();
						breadcum.loadData('./json/app/breadcum/' + name
								+ '.json', false);
						sap.ui.getCore().setModel(breadcum, "breadcummodel");
						//	
						// var breadcum =
						// sap.ui.getCore().getModel("breadcummodel");
						// if (breadcum==null){
						// breadcum = new sap.ui.model.json.JSONModel();
						// };
						// var path = './json/app/breadcum/'+id+'.json';
						// breadcum.loadData(path, false);
						// sap.ui.getCore().setModel("breadcummodel",id);
					},

					/**
					 * Similar to onAfterRendering, but this hook is invoked
					 * before the controller's View is re-rendered (NOT before
					 * the first rendering! onInit() is used for that one!).
					 * 
					 * @memberOf in.co.itasca.survey.App
					 */
					// onBeforeRendering: function() {
					//
					// },
					/**
					 * Called when the View has been rendered (so its HTML is
					 * part of the document). Post-rendering manipulations of
					 * the HTML could be done here. This hook is the same one
					 * that SAPUI5 controls get after being rendered.
					 * 
					 * @memberOf in.co.itasca.survey.App
					 */
					// onAfterRendering: function() {
					//
					// },
					/**
					 * Called when the Controller is destroyed. Use this one to
					 * free resources and finalize activities.
					 * 
					 * @memberOf in.co.itasca.survey.App
					 */
					// onExit: function() {
					//
					// }
					// selectHandler : function (evt){
					// alert("In Handler");
					// },
					//	

					
					resetDateModelofSelectedPage   : function( id){
						
						switch (id) {
						case 'mandatory':
							var surveyModel = sap.ui.getCore().getModel("Mandatory");
							if (surveyModel==null){
								
								surveyModel= new sap.ui.model.json.JSONModel();
								sap.ui.getCore().setModel(surveyModel,'Mandatory');
								
							}
 							surveyModel.loadData('../api/api/surveydata/mandatory/sanjay', false);
							 
 							
							break;

						case 'desirable':
							var surveyModel = sap.ui.getCore().getModel("desirable");
							if (surveyModel==null){
								surveyModel= new sap.ui.model.json.JSONModel();
								sap.ui.getCore().setModel(surveyModel,'desirable');
							}
 							surveyModel.loadData('../api/api/surveydata/mandatory/sanjay', false);
							break;
							
						case 'highlydesirable':
							var surveyModel = sap.ui.getCore().getModel("highlydesirable");
							if (surveyModel==null){
								surveyModel= new sap.ui.model.json.JSONModel();
								sap.ui.getCore().setModel(surveyModel,'highlydesirable');
							}
 							surveyModel.loadData('../api/api/surveydata/mandatory/sanjay', false);
							break;


						default:
							break;
						}
						
					},
					
					
					topmenuPressHandler : function(evt) {
						var key = evt.getSource().data("key");

						var bus = sap.ui.getCore().getEventBus();
						bus.subscribe("nav", "toReport", this.navHandler, this);

						bus.publish("nav", "to", {
							id : key,

						});

					},

					mainmenuSelectHandler : function(key) {
						debugger;
						var bus = sap.ui.getCore().getEventBus();
						bus.subscribe("nav", "fromMenu", this.navHandler, this);

						bus.publish("nav", "fromMenu", {
							id : key,

						});

					},

					breadcumSelectHandler : function(evt) {

						var key = evt.getParameter("item").getKey();
						evt.getSource().rerender();
						var bus = sap.ui.getCore().getEventBus();
						bus.subscribe("nav", "to", this.navHandler, this);

						bus.publish("nav", "to", {
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
					setSelectedLeftPaneModel:function(id){
						var json = sap.ui.getCore().getModel("menu").oData;
						var items= json.MenuItems;
						 for(var it in items){
							 if(items[it].key==id){
								 var model = new sap.ui.model.json.JSONModel();
									model.setData(items[it].submenu, false);
									sap.ui.getCore().setModel(model,"LeftModel");
									break;
							 }
						 }
					}

				});