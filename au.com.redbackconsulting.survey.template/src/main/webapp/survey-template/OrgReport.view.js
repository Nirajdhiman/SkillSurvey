sap.ui.jsview("survey-template.OrgReport", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.OrgReport
	*/ 
	getControllerName : function() {
		return "survey-template.OrgReport";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.OrgReport
	*/ 
	createContent : function(oController) {
		var oLable = new sap.ui.commons.Label();
		oLable.setText("Org Report");
		return oLable;
	}

});
