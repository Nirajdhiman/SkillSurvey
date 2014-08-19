sap.ui.jsview("survey-template.DesirableReport", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.DesirableReport
	*/ 
	getControllerName : function() {
		return "survey-template.DesirableReport";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.DesirableReport
	*/ 
	createContent : function(oController) {
		 var oMatrix = new sap.ui.commons.layout.MatrixLayout({
				layoutFixed : false,
				width:config.getDocWidth().toString()+'px',
				height:config.getMatrixHeight().toString()+'px'
				
			}).addStyleClass("surveySurveyMatrix");
			 
		 var oReportTable = new sap.ui.table.Table(
					{
						// title: "Table with fixed columns
						// Example",
						visibleRowCount : config.getRowCount(),
						firstVisibleRow : 3,
						selectionMode : sap.ui.table.SelectionMode.Single,
						navigationMode : sap.ui.table.NavigationMode.Paginator,
						//fixedColumnCount: 2,
						width : "95%",
						columnHeaderVisible :true,
						enableGrouping:true,
					});
			
			var needColumn = new sap.ui.table.Column({
				width : "43%",
				sortProperty: "needName", 
				filterProperty:"needName",
			//	grouped :true,
				sorted : true,
				label : new sap.ui.commons.Label({
					text : "Need Type"
				}),
				template : new sap.ui.commons.TextView({width:'100%',wrapping :true}).addStyleClass("surveyPathwayHeaderTextStyle_z")
						.bindProperty("text", "needName"),
				hAlign : "Left",
				vAlign : "Middle",
				
			});
			oReportTable.addColumn(needColumn);
			oReportTable.setGroupBy(needColumn);
			oReportTable.addColumn(new sap.ui.table.Column({
				width : "43%",
				sortProperty: "uocName", 
				filterProperty:"uocName",
				label : new sap.ui.commons.Label({
					text : "Unit of Competency /Course Name"
				}),
				template : new sap.ui.commons.TextView({width:'100%',wrapping :true}).addStyleClass("surveyPathwayHeaderTextStyle_z")
						.bindProperty("text", "uocName"),
				hAlign : "Left",
				vAlign : "Middle",
				
			
			}));
			oReportTable
					.addColumn(new sap.ui.table.Column(
							{
								width : "7%",
								hAlign:"Center",
								label : new sap.ui.commons.Label({
									width:'100%',
									text : "Ranking",
									textAlign :  sap.ui.core.TextAlign.Center 
								}),
								template : new sap.ui.commons.Label({width:'100%',textAlign :  sap.ui.core.TextAlign.Center }).bindProperty("text","ranking"),
								vAlign : "Middle",
								hAlign : "Center",
							}));
			oReportTable
					.addColumn(new sap.ui.table.Column(
							{
								width : "7%",
								hAlign:"Center",
								label : new sap.ui.commons.Label({
									width:'100%',
									text : "Completed",
									textAlign :  sap.ui.core.TextAlign.Center 
								}),
								template : new sap.ui.commons.Label({width:'100%',textAlign :  sap.ui.core.TextAlign.Center }).bindProperty("text","completed"),
								vAlign : "Middle",
								hAlign : "Center",

							})).addStyleClass("questionTable");

			// Create a model and bind the table rows to this model

			oReportTable.setModel(sap.ui.getCore().getModel("Report"));
			oReportTable.bindRows("/");
			oReportTable.setGroupBy("needName");
		 /////////////////////
			var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"10px"}).addStyleClass("actionRow");
			var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Right"}).setColSpan(2);
			oCell.addContent(new sap.ui.commons.Button({text:"Print",
				press:function(){
				}}).addStyleClass("surveyContinueButtonContainer"));
			oRow.addCell(oCell);
			oMatrix.addRow(oRow);
			var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
			var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top",hAlign:"Left"}).setColSpan(2);
			oCell.addContent(oReportTable);
			oRow.addCell(oCell);
			
			oMatrix.addRow(oRow);

		
			return oMatrix;
	}

});
