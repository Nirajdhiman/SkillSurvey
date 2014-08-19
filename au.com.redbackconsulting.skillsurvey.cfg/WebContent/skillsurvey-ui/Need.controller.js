sap.ui.controller("skillsurvey-ui.Need", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf need.NeedTest
*/
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf need.NeedTest
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf need.NeedTest
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf need.NeedTest
*/
//	onExit: function() {
//
//	}

handleEdit : function (evt){
		
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav","toEdit",{
			id : "NeedEdit", 
			tableid:"Need",
			data:evt.getSource().getBindingContext().getObject()
			});
		
	},
	handleOverview:function(evt){
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav","toOverview",{id : "NeedOverview", tableid :"Need"	});
	},

	handleCreate:function(evt){
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav","toCreate",{id : "NeedCreate", tableid :"Need"	});
	},
	handleDelete:function(evt){
	sap.m.MessageBox.confirm(
				"Do you sure want to delete!",
				function (oAction) {
					if (sap.m.MessageBox.Action.OK === oAction) {
						var bus = sap.ui.getCore().getEventBus();
						bus.publish("nav","toDelete",{id : "Need", tableid :"Need"});
					}
				}
		);
		
	}
	
	
});