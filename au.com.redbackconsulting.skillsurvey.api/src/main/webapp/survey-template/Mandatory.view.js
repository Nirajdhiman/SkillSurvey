sap.ui.jsview("survey-template.Mandatory", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.Mandatory
	*/ 
	getControllerName : function() {
		return "survey-template.Mandatory";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.Mandatory
	*/ 
	
	createContent : function(oController) {
		
		 var oMatrix = new sap.ui.commons.layout.MatrixLayout({
				layoutFixed : false,
				width:'100%'
					
			}).addStyleClass("surveySurveyMatrix");
			 //courseId
		 var oQuestionTable = new sap.ui.table.Table(
					{
						// title: "Table with fixed columns
						// Example",
						visibleRowCount : 18,
						//firstVisibleRow : 3,
						selectionMode : sap.ui.table.SelectionMode.Single,
						navigationMode : sap.ui.table.NavigationMode.Paginator,
						//fixedColumnCount: 2,
						width : "100%",
						columnHeaderVisible :true,
					});
		 var courseColumn = new sap.ui.table.Column({
				width : "10%",
			//	sortProperty: "question", 
				//filterProperty:"question",
				label : new sap.ui.commons.Label({
					text : "{mBundle>tableHeadingCourseId}",
					
				}),
				template : new sap.ui.commons.TextView({
					width:'100%',
					wrapping :true,
					visible:"{codeVisibility}",
					tooltip:generateQV.createQuickView("COURSE", 1, "SurveyModel")
					}).bindProperty("text", "courseId").attachBrowserEvent("mouseenter", function(evt){
					
						
						generateQV.createQuickView("COURSE", evt.target.innerText, "SurveyModel");
					}, this),
				hAlign : "Left",
				vAlign : "Middle",
				
			
			});
	
		 oQuestionTable.addColumn(courseColumn);
		// oQuestionTable.setGroupBy(courseColumn);
		
			var uocName = new sap.ui.table.Column({
				width : "30%",
				sortProperty: "uocName", 
				filterProperty:"uocName",
				label : new sap.ui.commons.Label({
					text : "{mBundle>tableHeadingCourse}",
					
				}),
				template : new sap.ui.commons.TextView({width:'100%',wrapping :true,
					visible:"{cVisibility}",	
				}).addStyleClass("surveyPathwayHeaderTextStyle_z")
						.bindProperty("text", "uocName"),
				hAlign : "Left",
				vAlign : "Middle",
				
			});
			oQuestionTable.addColumn(uocName);
		//	oQuestionTable.setGroupBy(uocName);
			oQuestionTable.addColumn(new sap.ui.table.Column({
				width : "60%",
			//	sortProperty: "question", 
			//	filterProperty:"question",
				label : new sap.ui.commons.Label({
					text : "{mBundle>tableHeadingQuestions}"
				}),
				template : new sap.ui.commons.Label({width:'100%',wrapping :true,
				icon:"{icon}",	
				tooltip:"{question}",
				}).addStyleClass("surveyPathwayHeaderTextStyle_z")
						.bindProperty("text", "question"),
				hAlign : "Left",
				vAlign : "Middle",
				
			
			}));
			oQuestionTable
					.addColumn(new sap.ui.table.Column(
							{
								width : "7%",
								hAlign:"Center",
								label : new sap.ui.commons.Label({
									width:'100%',
									text : "{mBundle>tableHeadingYes}",
									textAlign :  sap.ui.core.TextAlign.Center 
								}),
								template : new sap.ui.commons.CheckBox(
										{
											visible:"{check}",
											change : function(evt) {
												var checkStatus = this.getBindingContext().getObject().yes;
												var model = sap.ui.getCore().getModel("Mandatory").oData;
												for ( var obj in model) {
													if (model[obj].uocQuestionId == this.getBindingContext().getObject().uocQuestionId) {
															this.getBindingContext().getObject().answer="Yes";
															this.getBindingContext().getObject().yes = true;
															this.getBindingContext().getObject().no = false;
														model[obj] = this.getBindingContext().getObject();
														break;
													}
												}
												sap.ui.getCore().getModel("Mandatory").setData(model,false);
												
												var model = sap.ui.getCore().getModel("Mandatory").oData;
												for ( var obj in model) {
													if (model[obj].uocQuestionId == this.getBindingContext().getObject().uocQuestionId) {
														if (model[obj].no == false && model[obj].yes==false ) {
															model[obj].answer="No Answer";
														}
												
													}
												}
												for ( var obj in model) {
													if (model[obj].uocQuestionId == this.getBindingContext().getObject().uocQuestionId) {
														if (model[obj].yes==true ) {
															model[obj].answer="Yes";
														}
												
													}
												}
												if(checkStatus==true&&this.getBindingContext().getObject().isPrimary==1){
													config.removeAndUpdateSecondaryQuestionByCouseId(this.getBindingContext().getObject().courseId, "Mandatory");
												}
											//	if(this.getBindingContext().getObject().isPrimary==2&&checkStatus==true ){
											//		config.getQuestionnaireByCouseId(this.getBindingContext().getObject().courseId, "Mandatory");
											//	}
												
												
												oQuestionTable.setModel(sap.ui.getCore().getModel("Mandatory"));
												oQuestionTable.bindRows("/");
											}
										}).bindProperty("checked",
										"yes"),
								vAlign : "Middle",
								hAlign : "Center",
							}));
			oQuestionTable
					.addColumn(new sap.ui.table.Column(
							{
								width : "7%",
								hAlign:"Center",
								label : new sap.ui.commons.Label({
									width:'100%',
									text : "{mBundle>tableHeadingNo}",
									textAlign :  sap.ui.core.TextAlign.Center 
								}),
								template : new sap.ui.commons.CheckBox(
										{
											visible:"{check}",
											change : function(evt) {
												var checkStatus = this.getBindingContext().getObject().no;
												var model = sap.ui
														.getCore()
														.getModel(
																"Mandatory").oData;
												
												for ( var obj in model) {
													
													
													if (model[obj].uocQuestionId == this.getBindingContext().getObject().uocQuestionId) {
															this.getBindingContext().getObject().answer="No";
															this.getBindingContext().getObject().yes = false;
															this.getBindingContext().getObject().no = true;
															model[obj] = this.getBindingContext().getObject();
														break;
													}
												}
												sap.ui.getCore().getModel("Mandatory").setData(	model,false);
												var model = sap.ui.getCore().getModel("Mandatory").oData;
												for ( var obj in model) {
													if (model[obj].uocQuestionId == this.getBindingContext().getObject().uocQuestionId) {
														if (model[obj].no == false && model[obj].yes==false ) {
															model[obj].answer="No Answer";
														}
												
													}
												}
												for ( var obj in model) {
													if (model[obj].uocQuestionId == this.getBindingContext().getObject().uocQuestionId) {
														if (model[obj].no==true ) {
															model[obj].answer="No";
														}
													}
												}
												//if(checkStatus==true&&this.getBindingContext().getObject().isPrimary==2){
												//	config.removeAndUpdateQuestionsByCouseId(this.getBindingContext().getObject().courseId, "Mandatory");
												//}
												if(checkStatus==true&&this.getBindingContext().getObject().isPrimary==1){
													config.getSecondaryQuestionByCouseId(this.getBindingContext().getObject().courseId, "Mandatory");
												}
												oQuestionTable.setModel(sap.ui.getCore().getModel("Mandatory"));
												oQuestionTable.bindRows("/");
											}

										}).bindProperty("checked",
										"no"),
								vAlign : "Middle",
								hAlign : "Center",

							})).addStyleClass("questionTable");

			// Create a model and bind the table rows to this model

			oQuestionTable.setModel(sap.ui.getCore().getModel(
					"Mandatory"));
		 
			oQuestionTable.bindRows("/");
			var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"10px"}).addStyleClass("actionRow");
			var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Right"}).setColSpan(2);
			oCell.addContent(new sap.ui.commons.Button({
			  id:"button_mysurvey-Mandatory-subMenu",
				text:"Save",
				enabled:config.getNeedSaveButtonStatus(),
				press:function(oEvent){
					debugger;
					if(!config.updateModelBeforeSaved("Mandatory")){
						 config.displayNotificationBar(sap.ui.getCore().getModel("mBundle").getResourceBundle().getText("rplSaveExceptionMessage"), "Abort save!");
						}else{
						var bus = sap.ui.getCore().getEventBus();
						bus.publish("nav", "fromPathway", {
							id : "Mandatory",
							data:{action:config.getPathwayAction(config.getSelectedId())}

						});
					}					
				}}).addStyleClass("surveyContinueButtonContainer"));
			
			
			oRow.addCell(oCell);
						
		
			oMatrix.addRow(oRow);

		 /////////////////////
			var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
			var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top",hAlign:"Left"}).setColSpan(2);
			oCell.addContent(oQuestionTable);
			oRow.addCell(oCell);
			
			oMatrix.addRow(oRow);
			return oMatrix;
	}
});
