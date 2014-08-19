sap.ui.jsview("survey-template.ManageSite", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.ManageSite
	*/ 
	getControllerName : function() {
		return "survey-template.ManageSite";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.ManageSite
	*/ 
	createContent : function(oController) {
 		return new sap.ui.commons.Label({text : "Manage Site"});
	}

});