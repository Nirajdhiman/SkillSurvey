sap.ui.jsview("survey-template.Desirable", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.Desirable
	*/ 
	getControllerName : function() {
		return "survey-template.Desirable";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.Desirable
	*/ 
	createContent : function(oController) {
		var oMandatoryModel = sap.ui.getCore().getModel(
		"Desirable");
if (oMandatoryModel == null) {
	oMandatoryModel = new sap.ui.model.json.JSONModel();
	oMandatoryModel.setDefaultBindingMode("TwoWay");

}
var xData = [
		{
			id : 1,
			course : "New Starters Program",
			question : "Have you completed this unit of competency / course? ",
			yes : false,
			no : false,
			rpl : false
		},
		{
			id : 2,
			course : "DECA - The Essentials for Employees",
			question : "Have you completed this unit of competency / course? ",
			yes : false,
			no : false,
			rpl : false
		},
		{
			id : 3,
			course : "DECA - The Essentials for Supervisors",
			question : "Have you completed this unit of competency / course? ",
			yes : false,
			no : false,
			rpl : false
		},
		{
			id : 4,
			course : "Workplace Behaviour Mandatory Awareness",
			question : "Have you completed this unit of competency / course? ",
			yes : false,
			no : false,
			rpl : false
		},
		{
			id : 5,
			course : "Introduction To Security",
			question : "Have you completed this unit of competency / course? ",
			yes : false,
			no : false,
			rpl : false
		},
		{
			id : 6,
			course : "Defence WHS Awareness",
			question : "Have you completed this unit of competency / course? ",
			yes : false,
			no : false,
			rpl : false
		},
		{
			id : 7,
			course : "Ethics and Fraud Awareness",
			question : "Have you completed this unit of competency / course? ",
			yes : false,
			no : false,
			rpl : false
		},
		{
			id : 8,
			course : "Campus 00004767",
			question : "Have you completed this unit of competency / course? ",
			yes : false,
			no : false,
			rpl : false
		},
		{
			id : 9,
			course : "Indigenous Cultural Awareness",
			question : "Have you completed this unit of competency / course? ",
			yes : false,
			no : false,
			rpl : false
		},
		{
			id : 10,
			course : "Campus 00001221",
			question : "Have you completed this unit of competency / course? ",
			yes : false,
			no : false,
			rpl : false
		},
		{
			id : 11,
			course : "Campus 00001401",
			question : "Have you completed this unit of competency / course? ",
			yes : false,
			no : false,
			rpl : false
		},
		{
			id : 12,
			course : "Working with Privacy",
			question : "Have you completed this unit of competency / course? ",
			yes : false,
			no : false,
			rpl : false
		},

];
oMandatoryModel.setData(xData, false);
sap.ui.getCore().setModel(oMandatoryModel,	"Desirable");
/**********  new coding */
oMandatoryModel.setData(xData, false);
sap.ui.getCore().setModel(oMandatoryModel);
 var oMatrix = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : false,
		width:'98%',
		height:'280px'
		
	}).addStyleClass("surveySurveyMatrix");
	/////////////////////////////// >>///////////////////////////////////////////
	var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"4px",vAlign:"Middle"});
	var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
	oRow.addCell(oCell);
	var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
	oRow.addCell(oCell);
	oMatrix.addRow(oRow);
	// >>///////////////////////////////////////////

	 var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"30px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell().addStyleClass("surveyPathwayButtonDesirableBar");
		oRow.addCell(oCell);

		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
	oMatrix.addRow(oRow);
   
 
 /////////////////////
	var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
	var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top",hAlign:"Left"}).setColSpan(2);


	var oQuestionTable = new sap.ui.table.Table(
			{
				// title: "Table with fixed columns
				// Example",
				visibleRowCount : 9,
				firstVisibleRow : 3,
				selectionMode : sap.ui.table.SelectionMode.Single,
				navigationMode : sap.ui.table.NavigationMode.Paginator,
				// fixedColumnCount: 2,
				width : "95%",
				height:'90%',
				columnHeaderVisible : true
			});
	// oQuestionTable.setWidth(sWidth)
	// Define the columns and the control templates to be
	// used
	oQuestionTable.addColumn(new sap.ui.table.Column({
		width : "30%",
		label : new sap.ui.commons.Label({
			text : "Course"
		}),
		template : new sap.ui.commons.TextView({
			width : '100%',
			wrapping : true
		}).bindProperty("text", "course"),
		hAlign : "Left",
		vAlign : "Middle"
	})).addStyleClass("surveyPathwayHeaderTextStyle_z");
	oQuestionTable.addColumn(new sap.ui.table.Column({
		width : "30%",
		label : new sap.ui.commons.Label({
			text : "Questions"
		}),
		template : new sap.ui.commons.TextView({
			width : '100%',
			wrapping : true
		}).addStyleClass("surveyPathwayHeaderTextStyle_z")
				.bindProperty("text", "question"),
		hAlign : "Left",
		vAlign : "Middle"
	}));
	oQuestionTable
			.addColumn(new sap.ui.table.Column(
					{
						width : "3%",
						hAlign : "Center",
						label : new sap.ui.commons.Label({
							text : "Yes"
						}),
						template : new sap.ui.commons.CheckBox(
								{
									change : function(evt) {
										var model = sap.ui
												.getCore()
												.getModel(
														"Desirable").oData;
										for ( var obj in model) {
											if (model[obj].id == this
													.getBindingContext()
													.getObject().id) {
											//	if (this
												//		.getBindingContext()
												//		.getObject().no == true) {
													this
															.getBindingContext()
															.getObject().no = false;
													this
															.getBindingContext()
															.getObject().rpl = false;
												//}
												model[obj] = this
														.getBindingContext()
														.getObject();
												break;
											}
										}
										sap.ui
												.getCore()
												.getModel(
														"Desirable")
												.setData(
														model,
														false);
										// oQuestionTable.unbindRows();
										oQuestionTable
												.setModel(sap.ui
														.getCore()
														.getModel(
																"Desirable"));
										oQuestionTable
												.bindRows("/");
									}
								}).bindProperty("checked",
								"yes"),
						vAlign : "Middle",
						hAlign : "Center",
					}));
	oQuestionTable
			.addColumn(new sap.ui.table.Column(
					{
						width : "3%",
						label : new sap.ui.commons.Label({
							text : "No"
						}),
						template : new sap.ui.commons.CheckBox(
								{
									change : function(evt) {
										var model = sap.ui
												.getCore()
												.getModel(
														"Desirable").oData;
										for ( var obj in model) {
											if (model[obj].id == this
													.getBindingContext()
													.getObject().id) {
												//if (this.getBindingContext()getObject().yes == true) {
													this
															.getBindingContext()
															.getObject().yes = false;
													this
															.getBindingContext()
															.getObject().rpl = false;
											//	}
												model[obj] = this
														.getBindingContext()
														.getObject();
												break;
											}
										}
										sap.ui
												.getCore()
												.getModel(
														"Desirable")
												.setData(
														model,
														false);
										// oQuestionTable.unbindRows();
										oQuestionTable
												.setModel(sap.ui
														.getCore()
														.getModel(
																"Desirable"));
										oQuestionTable
												.bindRows("/");
									}

								}).bindProperty("checked",
								"no"),
						vAlign : "Middle",
						hAlign : "Center",

					}));
	oQuestionTable.addColumn(new sap.ui.table.Column({
		width : "5%",
		label : new sap.ui.commons.Label({
			text : "RPL"
		}),
		template : new sap.ui.commons.CheckBox({
			change : function(evt) {
				var model = sap.ui.getCore().getModel(
						"Desirable").oData;
				for ( var obj in model) {
					if (model[obj].id == this
							.getBindingContext()
							.getObject().id) {
						// if(this.getBindingContext().getObject().no==true){
						this.getBindingContext()
								.getObject().no = false;
						this.getBindingContext()
								.getObject().yes = false;
						// }
						model[obj] = this
								.getBindingContext()
								.getObject();
						break;
					}
				}
				sap.ui.getCore()
						.getModel("Desirable")
						.setData(model, false);
				// oQuestionTable.unbindRows();
				oQuestionTable.setModel(sap.ui.getCore()
						.getModel("Desirable"));
				oQuestionTable.bindRows("/");
			}

		}).bindProperty("checked", "rpl"),
		vAlign : "Middle",
		hAlign : "Center",

	}));

	// Create a model and bind the table rows to this model

	oQuestionTable.setModel(sap.ui.getCore().getModel(
			"Desirable"));
	oQuestionTable.bindRows("/");

	// end of content

	oCell.addContent(oQuestionTable);
	oRow.addCell(oCell);

	oMatrix.addRow(oRow);

	var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
	var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Right"}).setColSpan(2);
	oCell.addContent(new sap.ui.commons.Button({text:"Save",
		press:function(){
//			  var bus = sap.ui.getCore().getEventBus();
//				bus.publish("nav", "to", { 
//		            id : "Desirable",
//		          });
		}}).addStyleClass("surveyContinueButtonContainer"));
	
//		
	oRow.addCell(oCell);
				

	oMatrix.addRow(oRow);
	return oMatrix;

	}

});
