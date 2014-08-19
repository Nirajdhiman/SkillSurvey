sap.ui.controller("skillsurvey-ui.RoleEdit", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf skillsurvey.RoleEdit
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf skillsurvey.RoleEdit
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf skillsurvey.RoleEdit
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf skillsurvey.CreateRole
*/
//	onExit: function() {
//
//	}
	
	handleSave:function(){
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav","toEditSave",{id : "Role",tableid:"Role"	});
		},
	handleCancel:function(){
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav","to",{id:"Role",tableid:"Role"});

			
		}

});