sap.ui.jsview("survey-template.SiteMap", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.SiteMap
	*/ 
	getControllerName : function() {
		return "survey-template.SiteMap";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.SiteMap
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [new sap.ui.commons.Label({text : "SiteMap"})
			
			]
		});
	}

});