sap.ui.jsview("survey-template.PrintOrgReport", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.PrintOrgReport
	*/ 
	getControllerName : function() {
		return "survey-template.PrintOrgReport";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.PrintOrgReport
	*/ 
	createContent : function(oController) {
		var oLable = new sap.ui.commons.Label();
		oLable.setText("Print Org Report");
		return oLable;
	}

});
