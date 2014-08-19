sap.ui.jsview("survey-template.SurveyMaster", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.SurveyMaster
	*/ 
	getControllerName : function() {
		return "survey-template.SurveyMaster";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.SurveyMaster
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [ new sap.ui.commons.Label({text : "Manage Survey"})
			
			]
		});
	}

});