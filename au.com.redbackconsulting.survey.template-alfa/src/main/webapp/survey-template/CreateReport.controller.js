sap.ui.controller("survey-template.CreateReport", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf survey-template.CreateReport
*/
	onInit: function() {

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf survey-template.CreateReport
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf survey-template.CreateReport
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf survey-template.CreateReport
*/
//	onExit: function() {
//
//	}
	onSelectHandler : function (oEvent ){
		debugger;
		var json ={"reportTitle":"Survey completed 12 june 2014- Work Health & Safety Officer - APS4","reportHeader":[{"name":"Unit of Competency/Course Name"},{"name":"Ranking"},{"name":"Completed"}],"content":[{"courseType":"Mandatory Training","items":[{"course":"DECA - The Essentials for Employees","ranking":"Mandatory","completed":"Yes"},{"course":"Ethics and Fraud Awareness","ranking":"Mandatory","completed":"Yes"},{"course":"Personal Data Retention Policy ","ranking":"Mandatory","completed":"Yes"},{"course":"Fraud Prevention Awareness","ranking":"Mandatory","completed":"Yes"}]}]} ;
		var model = new sap.ui.model.json.JSONModel();
		model.setData(json, false);
		sap.ui.getCore().setModel(model,"Report");
		
		var control = oEvent.getSource();
		var key =control.data("key");
		
		var bus = sap.ui.getCore().getEventBus();
		

		bus.publish("nav", "toReport", {
			id : key,
			data:{key:"Report"}

		});

	}
	
	
});