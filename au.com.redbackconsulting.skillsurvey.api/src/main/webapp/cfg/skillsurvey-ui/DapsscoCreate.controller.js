sap.ui.controller("skillsurvey-ui.DapsscoCreate", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf skillsurvey-ui.DapsscoCreate
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf skillsurvey-ui.DapsscoCreate
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf skillsurvey-ui.DapsscoCreate
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf skillsurvey-ui.DapsscoCreate
*/
//	onExit: function() {
//
//	}
	
	handleSave:function(evt){
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav","toCreateSave",{id : "Dapssco" ,	tableid :"Dapssco"});
		},
	handleCancel:function(evt){
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav","to",{id:"Dapssco", tableid :"Dapssco"});
			
		}

});