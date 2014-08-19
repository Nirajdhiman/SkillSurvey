

sap.ui.jsview("skillsurvey-ui.app", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skillsurvey-ui.app
	*/ 
	getControllerName : function() {
		return "skillsurvey-ui.app";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skillsurvey-ui.app
	*/ 
	createContent : function(oController) {
	
	
		var app = new sap.m.SplitApp("theApp");
		this.app = app;
		// load the master page
		//var master = sap.app.viewCache.get("Master1");
		var master = sap.ui.view({id : "Master1", viewName : "skillsurvey-ui.Master1", type : sap.ui.core.mvc.ViewType.XML});
		debugger;
		//master.getController().nav = this.getController();
		app.addPage(master, true);

		// load the detail page
		//var detail = sap.app.viewCache.get("Detail");
		//this.app.addPage(detail, false);
		
	//	var level = sap.app.viewCache.get("Level");
	//this.app.addPage(level, false);
	
		//var need = sap.app.viewCache.get("Need");
		//app.addPage(need, false);
		
		
		//var breakschedule = sap.app.viewCache.get("BreakSchedule");
		//this.app.addPage( breakschedule, false);
		
		//var question = sap.app.viewCache.get("Question");
		//this.app.addPage(question, false);
		
//		var uoc = sap.app.viewCache.get("Uoc");
//		this.app.addPage(uoc, false);
//	
//		var occupation = sap.app.viewCache.get("Occupation");
//		this.app.addPage(occupation, false);
//		
//		var individual = sap.app.viewCache.get("Individual");
//		this.app.addPage(individual, false);
//		
//		
//		var role = sap.app.viewCache.get("Role");
//		this.app.addPage(role, false);
//		
	//	var roleassingments = sap.app.viewCache.get("RoleAssingments");
//		this.app.addPage(roleassingments, false);
		
	//	var Function = sap.app.viewCache.get("Function");
	//	this.app.addPage(Function, false);
		
	//	var FunctionOccupations = sap.app.viewCache.get("FunctionOccupations");
	//	this.app.addPage(FunctionOccupations, false);
//		
//		
//		var claim = sap.app.viewCache.get("Claim");
//		this.app.addPage(claim, false);
//		
//		var claimassingments = sap.app.viewCache.get("ClaimAssingments");
//		this.app.addPage(claimassingments, false);
//		
//		var pathway = sap.app.viewCache.get("Pathway");
//		this.app.addPage(pathway, false);
//		
//		var department = sap.app.viewCache.get("Department");
//		this.app.addPage(department, false);
//		
//		
//		var dapssco = sap.app.viewCache.get("Dapssco");
//		this.app.addPage(dapssco, false);
//		
//		var uocquestion = sap.app.viewCache.get("UocQuestion");
//		this.app.addPage(uocquestion, false);
//		
	//	var uocgroup = sap.app.viewCache.get("UocGroup");
		//this.app.addPage(uocgroup, false);
		
	//	var survey = sap.app.viewCache.get("Survey");
	//	this.app.addPage(survey, false);
//		
//		var surveyanswer = sap.app.viewCache.get("SurveyAnswer");
//		this.app.addPage(surveyanswer, false);
//		
//		var dapsscolevels = sap.app.viewCache.get("DapsscoLevels");
//		this.app.addPage(dapsscolevels, false);
//		
//		var uocgroupmembers = sap.app.viewCache.get("UocGroupMembers");
//		this.app.addPage(uocgroupmembers, false);
//		
//	var dapsscoskills = sap.app.viewCache.get("DapsscoSkills");
	//	this.app.addPage(dapsscoskills, false);
//		
	//	var supervisons = sap.app.viewCache.get("Supervisons");
	//	this.app.addPage(supervisons, false);
//		
		
		//var newuser=sap.app.viewCache.get("NewUser");
		//this.app.addPage(newuser, false);
		
		
		// load the empty page
		var empty = sap.app.viewCache.get("Empty");
		app.addPage(empty, false);

		app.setInitialDetail("Empty");
		
		//var login = sap.app.viewCache.get("Login");
		//this.app.addPage(login, false);

		
		
		//this.app = oController.initService(oController,this);
		//alert('work done');
		
		return new sap.m.Shell("Shell", {
		title : "{i18n>ShellTitle}",
			title : "ShellTitle",
		showLogout : false,
		app : app
		});
	}

});