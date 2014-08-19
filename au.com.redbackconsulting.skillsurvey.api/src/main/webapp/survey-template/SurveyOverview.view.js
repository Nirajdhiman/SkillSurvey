sap.ui.jsview("survey-template.SurveyOverview", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.SurveyOverview
	*/ 
	getControllerName : function() {
		return "survey-template.SurveyOverview";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.SurveyOverview
	*/ 
	createContent : function(oController) {
		 var oMatrix = new sap.ui.commons.layout.MatrixLayout({
				layoutFixed : false,
				//width:config.getDocWidth().toString()+'px',
				//height:config.getMatrixHeight().toString()+'px'
				
			}).addStyleClass("surveySurveyMatrix");
			 
		 var oQuestionTable = new sap.ui.table.Table(
					{
						// title: "Table with fixed columns
						// Example",
					//	visibleRowCount : config.getRowCount(),
						//firstVisibleRow : 3,
						selectionMode : sap.ui.table.SelectionMode.Single,
						navigationMode : sap.ui.table.NavigationMode.Paginator,
						//fixedColumnCount: 2,
						width : "900px",
						columnHeaderVisible :true,
						enableGrouping:true,
					});
			
		//
			oQuestionTable.addColumn(new sap.ui.table.Column({
				width : "250px",
				sortProperty: "needName", 
				label : new sap.ui.commons.Label({
					text : "Surveys"
				}),
				template : new sap.ui.commons.TextView({width:'100%',wrapping :true})
						.bindProperty("text", "needDesciption"),
				hAlign : "Left",
				vAlign : "Middle",
				
			
			}));
			
			oQuestionTable.addColumn(new sap.ui.table.Column({
				width : "100px",
				sortProperty: "needName", 
				label : new sap.ui.commons.Label({
					text : "Status"
				}),
				template : new sap.ui.commons.TextView({width:'100%',wrapping :true})
						.bindProperty("text", "status"),
				hAlign : "Left",
				vAlign : "Middle",
				
			
			}));
     oQuestionTable.addColumn(new sap.ui.table.Column({
	width : "100px",
	sortProperty: "needName", 
	label : new sap.ui.commons.Label({
		text : "Progress"
	}),
	template :new sap.ui.commons.ProgressIndicator( {
		width: "90px", 
		percentValue: "{percentage}", 
		displayValue:"{percentageStr}"
		}),
	hAlign : "Left",
	vAlign : "Middle",
	

}));
     oQuestionTable.addColumn(new sap.ui.table.Column({
			width : "150px",
			//sortProperty: "pathwayName", 
			label : new sap.ui.commons.Label({
				text : "Started At"
			}),
			template : new sap.ui.commons.TextView({width:'100%',wrapping :true})
					.bindProperty("text", "startDate"),
			hAlign : "Left",
			vAlign : "Middle",
			
		
		}));
     oQuestionTable.addColumn(new sap.ui.table.Column({
			width : "150px",
			//sortProperty: "pathwayName", 
			label : new sap.ui.commons.Label({
				text : "Completed At"
			}),
			template : new sap.ui.commons.TextView({width:'100%',wrapping :true})
					.bindProperty("text", "finishDate"),
			hAlign : "Left",
			vAlign : "Middle",
			
		
		}));
			oQuestionTable.setModel(sap.ui.getCore().getModel(
					"SurveyOverview"));
			oQuestionTable.bindRows("/");
			
			var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
			var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top",hAlign:"Left"});
			oCell.addContent(oQuestionTable);
			oRow.addCell(oCell);
			
			oMatrix.addRow(oRow);
			return oMatrix;

	}

});
