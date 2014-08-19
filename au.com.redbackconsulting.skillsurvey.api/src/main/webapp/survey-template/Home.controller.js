sap.ui.controller("survey-template.Home", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf survey-template.Home
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf survey-template.Home
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf survey-template.Home
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf survey-template.Home
*/
//	onExit: function() {
//
//	}
	role:'user',
	loadMenuModel:function(){
		var role = jQuery.sap.getUriParameters().get("role");
		if (role == null) {
			role = this.roles.user;
		}

		this.role = role;
		debugger;
		var urlPath="";
		switch (this.role) {
		case this.roles.admin:
			urlPath='http://localhost:9090/au.com.redbackconsulting.survey.template-alfa/json/app/role/adminmainmenu.json';
			break;
		case this.roles.supervisor:
			urlPath='http://localhost:9090/au.com.redbackconsulting.survey.template-alfa/json/app/role/supervisormainmenu.json';
			break;
		case this.roles.reporting:
			urlPath='http://localhost:9090/au.com.redbackconsulting.survey.template-alfa/json/app/role/reportingmainmenu.json';
			break;

		default:
			urlPath ='http://localhost:9090/au.com.redbackconsulting.survey.template-alfa/json/app/role/mainmenu.json';
			break;
		}
		
		
		 $.ajax(
			    	{ 
						 type: 'GET', 
						 url: urlPath,
						 crossDomain: false,
						 cache: false,
						 contentType: "json",
						 success: function(data) {
							 debugger;
							 var oModel = sap.ui.getCore().getModel("menuModel");
								if (oModel==null){
									oModel= new sap.ui.model.json.JSONModel();
									sap.ui.getCore().setModel(oModel,'menuModel');
								}
								oModel.setData(data,false);
								config.addShellWrokItems();
								var bus = sap.ui.getCore().getEventBus();
								bus.publish("nav", "to", {
									id : "home",

								});
						 }, 
						 error : function (e, textStatus,errorThrown ){ alert ("error in ajax call"+":::" + e.message+ errorThrown+":::" +textStatus);}
					});
		
	},
	roles : {
		user : "user",
		admin : "administrator",
		supervisor : "supervisor",
		reporting : "reporting"
	},

});