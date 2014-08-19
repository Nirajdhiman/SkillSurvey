sap.ui.controller("skillsurvey-ui.UocQuestion", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf skillsurvey-ui.UocQuestion
*/
//	onInit: function() {
	
	//
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf skillsurvey-ui.UocQuestion
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf skillsurvey-ui.UocQuestion
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf skillsurvey-ui.UocQuestion
*/
//	onExit: function() {
//
//	}
	
handleEdit : function (evt){
		
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav","toEdit",{
			id : "UocQuestionEdit", 
			tableid:"UocQuestion",
			data:evt.getSource().getBindingContext().getObject()
			});
		
	},
	handleOverview:function(evt){
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav","toOverview",{id : "UocQuestionOverview", tableid :"UocQuestion"	});
	},

	handleCreate:function(evt){
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav","toCreate",{id : "UocQuestionCreate", tableid :"UocQuestion"	});
	},
	handleDelete:function(evt){
	sap.m.MessageBox.confirm(
				"Do you sure want to delete!",
				function (oAction) {
					if (sap.m.MessageBox.Action.OK === oAction) {
						var bus = sap.ui.getCore().getEventBus();
						bus.publish("nav","toDelete",{id : "UocQuestion", tableid :"UocQuestion"});
					}
				}
		);
		
	}

});