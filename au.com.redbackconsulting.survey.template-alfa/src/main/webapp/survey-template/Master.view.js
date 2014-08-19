sap.ui.jsview("survey-template.Master", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.Master
	*/ 
	getControllerName : function() {
		return "survey-template.Master";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.Master
	*/ 
	createContent : function(oController) {
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			width:(document.documentElement.clientWidth-10).toString()+'px',
			height:(document.documentElement.clientHeight-250).toString()+'px'
			
		}).addStyleClass("surveySurveyMatrix");
	
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"100%"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top",hAlign:"Left"}).addStyleClass("surveyTemplateLeftBox");
		oCell.addContent(new sap.m.Label({text:"Welcome Header"}).addStyleClass("surveyHeadingLabelA"));
		oRow.addCell(oCell);
		//var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top",hAlign:"Left"})
		
		      oCell.addContent(new sap.m.Label({text:"Welcome text",
					}).addStyleClass("surveyHeadingLabelC"));
			oRow.addCell(oCell);
		
			
		
		
		
		
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top",hAlign:"Left"}).addStyleClass("surveyTemplateRightBox");
oCell.addContent(new sap.m.Label({text:"Overview Header"}).addStyleClass("surveyHeadingLabelA"));
//oRow.addCell(oCell);
//var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top",hAlign:"Left"})
		oCell.addContent(new sap.m.Label(
				{text:"Overview text"}).addStyleClass("surveyHeadingLabelC"));
			oRow.addCell(oCell);

	oMatrix.addRow(oRow);
		
		return oMatrix;
		//return new sap.m.Label({text:"this is master page"});
	}

});
