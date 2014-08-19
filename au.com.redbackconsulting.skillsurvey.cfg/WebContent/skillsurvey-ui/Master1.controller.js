sap.ui.controller("skillsurvey-ui.Master1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf skillsurvey-ui.Master1
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf skillsurvey-ui.Master1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf skillsurvey-ui.Master1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf skillsurvey-ui.Master1
*/
//	onExit: function() {
//
//	}
	listItemTriggered : function (evt){
		//alert("In Trigger");
		   var id = evt.oSource.data("id"); // this id remains unused in this example, though!

	        // Option 2:
	        // In case of data binding we can get the binding context (a sort of pointer to the data object to which the clicked ListItem is bound)
	    //    var bindingContext = evt.oSource.getBindingContext(); // evt.oSource is the ListItem

	        // The EventBus is used to let the Root Controller know that a navigation should take place.
	        // The bindingContext is attached to the data object here to be used in the Root Controller's event handler.
	     //    debugger;         
	        var bus = sap.ui.getCore().getEventBus();
	        bus.publish("nav", "to", { 
	            id : id
	           
	       });

	}

});