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
			id:"home-matrix",
			layoutFixed : false,
			width:"100%"
			
		}).addStyleClass("appHomeMatrix");
	
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:'100%'});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			vAlign:"Top",
			hAlign:"Left",
			}).addStyleClass("surveyTemplateLeftBox");
		oCell.addContent(this.getHomeLeftPaneContent());
		oRow.addCell(oCell);	
		
		
		
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			vAlign:"Top",
			hAlign:"Left",
			}).addStyleClass("surveyTemplateRightBox");
		oCell.addContent(this.getHomeRightPaneContent());
			oRow.addCell(oCell);

	oMatrix.addRow(oRow);
		
		return oMatrix;
		

	},
	getHomeLeftPaneContent:function(){
		var page = null;//this.app.getPage("HomeLeftPane");
		if (page == null) {
				 page = sap.ui.view({
					id : "HomeLeftPane",
					viewName : "survey-template.HomeLeftPane",
					type : sap.ui.core.mvc.ViewType.JS
				});
		}
		return page;
	},
	getHomeRightPaneContent:function(){
		var page =null ;// this.app.getPage("HomeRightPane");
		if (page == null) {
				 page = sap.ui.view({
					id : "HomeRightPane",
					viewName : "survey-template.HomeRightPane",
					type : sap.ui.core.mvc.ViewType.JS
				});
		}
		return page;
	},

});
