sap.ui.jsview("survey-template.Header", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.Header
	*/ 
	getControllerName : function() {
		return "survey-template.Header";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.Header
	*/ 
	createContent : function(oController) {
		var oHeader = new sap.ui.commons.ApplicationHeader({
//			id : "id", // sap.ui.core.ID
			logoSrc : undefined, // sap.ui.core.URI
			logoText : "Redback", // string
			displayLogoff : true, // boolean
			userName : undefined, // string
			displayWelcome : true, // boolean
			tooltip : undefined, // sap.ui.core.TooltipBase
			customData : [ new sap.ui.core.CustomData({
				id : "id1", // sap.ui.core.ID
				key : undefined, // string
				value : undefined, // any
				writeToDom : false, // boolean, since 1.9.0
				tooltip : undefined, // sap.ui.core.TooltipBase
				customData : []
			// sap.ui.core.CustomData
			}) ], // sap.ui.core.CustomData
			logoff : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ]
		});
		
		oHeader.placeAt("header");
	}

});