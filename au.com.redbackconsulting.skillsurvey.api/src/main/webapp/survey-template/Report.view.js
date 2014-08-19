sap.ui.jsview("survey-template.Report", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.Report
	*/ 
	getControllerName : function() {
		return "survey-template.Report";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.Report
	*/ 
	createContent : function(oController) {
		//if(sap.ui.getCore().getModel("Report")==null){return ;}
		 		debugger;
		var oControl =[];
		var report = new Reports(sap.ui.getCore().getModel("Report").oData);
		var button = new sap.ui.commons.Button({text:"Print",
		 press:oController.toPrint	
		}).addStyleClass("reportPringButton");
		 oControl.push(button);
		 var html =new sap.ui.core.HTML("reportHtml" ,{ content:report.generateHTMLReport()});
	
		 oControl.push(html);
		
		return oControl;
		
		

	}

});
