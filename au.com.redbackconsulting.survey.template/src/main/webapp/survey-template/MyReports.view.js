sap.ui.jsview("survey-template.MyReports", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.MyReports
	*/ 
	getControllerName : function() {
		return "survey-template.MyReports";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.MyReports
	*/ 
	createContent : function(oController) {
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			width:(window.innerWidth).toString()+'px',
			height:(window.innerHeight-192).toString()+'px'
			
		}).addStyleClass("surveyGlobalMatrix");
		/////////////////////////////// >>///////////////////////////////////////////
		// define navigation bar
		var navigationBar  = new sap.ui.commons.Toolbar({
			
			items:[ new sap.ui.commons.Button({
				text : "Home >> ",
				tooltip : "Home",
				press:function(evt){
					var bus = sap.ui.getCore().getEventBus();
					bus.publish("nav", "to", { 
			            id : "Master",
			           
			       });
				}
			}).removeStyleClass("sapUiBtnNorm").addStyleClass("navButton"),
			new sap.ui.commons.Button({
				text : "My Reports",
				tooltip : "My Reports",
				
			}).removeStyleClass("sapUiBtnNorm").addStyleClass("navButton")]
		});
		// set standalone false, flat design and fixed width
		navigationBar.setStandalone(false);
		navigationBar.setDesign(sap.ui.commons.ToolbarDesign.Flat);	
		navigationBar.setWidth("200px");
		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"20px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Middle"}).addStyleClass("surveyTemplateSiteBar");
		oCell.addContent(navigationBar);
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		//define template for content area 
		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"64%"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top",hAlign:"Left"}).addStyleClass("surveyTemplateLeftBox");
		
		var container  = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : false,
			witdh:'225px'
		}).addStyleClass("surveyCreateReportMatrix");
		var oContainerRow = new sap.ui.commons.layout.MatrixLayoutRow();
		var oContainerCell = new sap.ui.commons.layout.MatrixLayoutCell();
        oContainerCell.addContent(new sap.m.Label({text:"Create Reports"}).addStyleClass("surveyHeadingLabelA"));
        oContainerRow.addCell(oContainerCell);
        container.addRow(oContainerRow);
        var oContainerRow = new sap.ui.commons.layout.MatrixLayoutRow();

	    
        oContainerCell = new sap.ui.commons.layout.MatrixLayoutCell();
        oContainerCell.addContent( new sap.ui.commons.Link({
	    	text: " 1. Mandatory", 
	    	width:'300px',
	    	tooltip: "This is a test tooltip",
	    	press: function() {alert('Alert from ' + oLink1.getText());}}).addStyleClass("surveyHeadingLabelC"));
        oContainerRow.addCell(oContainerCell);
        container.addRow(oContainerRow);
        oContainerRow = new sap.ui.commons.layout.MatrixLayoutRow();
        oContainerCell = new sap.ui.commons.layout.MatrixLayoutCell();
        oContainerCell.addContent( new sap.ui.commons.Link({
	    	text: " 2. Highly Desirable", 
	    	tooltip: "This is a test tooltip",
	    	press: function() {alert('Alert from ' + oLink1.getText());}}).addStyleClass("surveyHeadingLabelC"));
        oContainerRow.addCell(oContainerCell);
        
        container.addRow(oContainerRow);
        var oContainerRow = new sap.ui.commons.layout.MatrixLayoutRow();

        oContainerCell = new sap.ui.commons.layout.MatrixLayoutCell();
        oContainerCell.addContent( new sap.ui.commons.Link({
	    	text: " 3. Desirable", 
	    	tooltip: "This is a test tooltip",
	    	press: function() {alert('Alert from ' + oLink1.getText());}}).addStyleClass("surveyHeadingLabelC"));
        oContainerRow.addCell(oContainerCell);
        
        
        container.addRow(oContainerRow);
        var oContainerRow = new sap.ui.commons.layout.MatrixLayoutRow();

        oContainerCell = new sap.ui.commons.layout.MatrixLayoutCell();
        oContainerCell.addContent( new sap.ui.commons.Link({
	    	text: " 4. Skills Competency Gap", 
	    	tooltip: "This is a test tooltip",
	    	press: function() {alert('Alert from ' + oLink1.getText());}}).addStyleClass("surveyHeadingLabelC"));
        
        oContainerRow.addCell(oContainerCell);
        
        container.addRow(oContainerRow);
        
        var oContainerRow = new sap.ui.commons.layout.MatrixLayoutRow();

        oContainerCell = new sap.ui.commons.layout.MatrixLayoutCell();
        oContainerCell.addContent( new sap.ui.commons.Link({
	    	text: " 5. Skills Recognition", 
	    	tooltip: "This is a test tooltip",
	    	press: function() {alert('Alert from ' + oLink1.getText());}}).addStyleClass("surveyHeadingLabelC"));
		
		oContainerRow.addCell(oContainerCell);
		container.addRow(oContainerRow);
        var oContainerRow = new sap.ui.commons.layout.MatrixLayoutRow();

        oContainerCell = new sap.ui.commons.layout.MatrixLayoutCell();
        oContainerCell.addContent( new sap.ui.commons.Link({
	    	text: " 6. Supervisor", 
	    	tooltip: "This is a test tooltip",
	    	press: function() {alert('Alert from ' + oLink1.getText());}}).addStyleClass("surveyHeadingLabelC"));
		
		oContainerRow.addCell(oContainerCell);
		container.addRow(oContainerRow);
		///////////////////////////////////////////////////////
		// end of content area
		// defining page right area content
	
		oCell.addContent(container)
	    oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		
		return oMatrix;

	}

});
