sap.ui.jsview("survey-template.TestPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.TestPage
	*/ 
	getControllerName : function() {
		return "survey-template.TestPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.TestPage
	*/ 
	createContent : function(oController) {
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : false,
			width:(document.documentElement.clientWidth-3).toString()+'px', 
			//height:'99%'
		//	height:(window.innerHeight).toString()+'px'
			
		}).addStyleClass("surveyGlobalMatrix");
		
		/////////////////////////////////////////////////////////////////////////
		// defin templte for page top header
		var siteMenuBarTop= new sap.ui.commons.Toolbar({
			
		});
		siteMenuBarTop.addItem(new sap.ui.commons.Button({
			icon : "sap-icon://home",
			press:function(evt){
				
				var bus = sap.ui.getCore().getEventBus();
				  bus.publish("nav", "to", { 
			            id : "Master",
			           
			       });
			}
		}));
		siteMenuBarTop.addItem(new sap.ui.commons.Button({
			text:"Help",
		}));
		siteMenuBarTop.addItem(new sap.ui.commons.Button({
			icon : "sap-icon://log",
			press:function(evt){
				//location.replace("logout.jsp");
				
				//window.location.replace("http://localhost:9090/au.com.redbackconsulting.survey.template/logout.jsp");
		;
			}
		}));
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"2%"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Right"}).addStyleClass("surveyTemplateSiteToMenuBar");
		oCell.addContent(siteMenuBarTop);
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		
		  /// creatin banner matrix layout
		var bLayout = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : false,
			width:(document.documentElement.clientWidth-3).toString()+'px', 
			height:'150px'
		}).addStyleClass("bLayout");
		var bLayoutRow = new sap.ui.commons.layout.MatrixLayoutRow();
		var bLayoutCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Left"});
		
	
		bLayoutRow.addCell(bLayoutCell);
		
		
		
		
		//define template for banner icon
		
		
		
		var bLayoutRow = new sap.ui.commons.layout.MatrixLayoutRow();
		var bLayoutCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Left"}).setColSpan(2);
		bLayoutCell.addContent(new sap.m.Label({text:"sitemenu text here"}));
		bLayoutRow.addCell(bLayoutCell);
		bLayout.addRow(bLayoutRow);
		//
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"2%"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Right"});
	     oCell.addContent(bLayout);
	     oRow.addCell(oCell);
	     oMatrix.addRow(oRow);
		///////////////////////////////////////////////////////////////////////
		
//define template for site menu bar
		
		
		
		return oMatrix;
	}

});
