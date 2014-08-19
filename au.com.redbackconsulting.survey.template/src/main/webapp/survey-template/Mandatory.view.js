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
//		var oMandatoryModel = sap.ui.getCore().getModel("Mandatory");
//		 if(oMandatoryModel==null){
//			 oMandatoryModel = new sap.ui.model.json.JSONModel();
//			 oMandatoryModel.setDefaultBindingMode("TwoWay");
//			 
//		 }
//		var xData =[{id:1,course:"New Starters Program",question:"Have you completed this unit of competency / course? ", yes:false,no:false},
//		            {id:2,course:"DECA - The Essentials for Employees",question:"Have you completed this unit of competency / course? ", yes:false,no:false},
//		            {id:3,course:"DECA - The Essentials for Supervisors",question:"Have you completed this unit of competency / course? ", yes:false,no:false},
//		            {id:4,course:"Workplace Behaviour Mandatory Awareness",question:"Have you completed this unit of competency / course? ", yes:false,no:false},
//		            {id:5,course:"Introduction To Security",question:"Have you completed this unit of competency / course? ", yes:false,no:false},
//		            {id:6,course:"Defence WHS Awareness",question:"Have you completed this unit of competency / course? ", yes:false,no:false},
//		            {id:7,course:"Ethics and Fraud Awareness",question:"Have you completed this unit of competency / course? ", yes:false,no:false},
//		            {id:8,course:"Campus 00004767",question:"Have you completed this unit of competency / course? ", yes:false,no:false},
//		            {id:9,course:"Indigenous Cultural Awareness",question:"Have you completed this unit of competency / course? ", yes:false,no:false},
//		            {id:10,course:"Campus 00001221",question:"Have you completed this unit of competency / course? ", yes:false,no:false},
//		            {id:11,course:"Campus 00001401",question:"Have you completed this unit of competency / course? ", yes:false,no:false},
//		            {id:12,course:"Working with Privacy",question:"Have you completed this unit of competency / course? ", yes:false,no:false},
//					           
//		            
//		            ];
//		oMandatoryModel.setData(xData, false);
//		sap.ui.getCore().setModel(oMandatoryModel,"Mandatory");
//		sap.ui.getCore().setModel(oMandatoryModel);
		 var oMatrix = new sap.ui.commons.layout.MatrixLayout({
				layoutFixed : false,
				width:'98%',
				height:'280px'
				
			}).addStyleClass("surveySurveyMatrix");
			/////////////////////////////// >>///////////////////////////////////////////
		 
		 
		 var c = sap.ui.commons;
			
			var rowReapeater = new c.RowRepeater({
				
				numberOfRows :8,
				
			}).addStyleClass("surveyTemplateQuestionTableRowRepeator");
			
			var clMatrix = new c.layout.MatrixLayout({layoutFixed : false});	
			var oHeaderRow = new sap.ui.commons.layout.MatrixLayoutRow({
				cells:[new c.layout.MatrixLayoutCell({
					content:[new sap.ui.commons.Label({text : "Course"}).addStyleClass("surveyTemplateCommonPathwayMatrixLabel")]
				}).addStyleClass("surveyTemplateCommonPathwayMatrixHeader").setRowSpan(2),
				       
				new c.layout.MatrixLayoutCell({
					content:[new sap.ui.commons.Label({text : "Question"}).addStyleClass("surveyTemplateCommonPathwayMatrixLabel")]
				}).addStyleClass("surveyTemplateCommonPathwayMatrixQuestionCell").setRowSpan(2)  ,
				new c.layout.MatrixLayoutCell({hAlign:"Center",
					content:[new sap.ui.commons.Label({text : "Response"}).addStyleClass("surveyTemplateCommonPathwayMatrixLabel")]
				}).addStyleClass("surveyTemplateCommonPathwayMatrixResponseHeaderCell")
				       ]
			
			});
			clMatrix.addRow(oHeaderRow);
			
			
			var infoHeaderCell = new c.layout.MatrixLayoutCell({
				hAlign:"Center", content:[ new sap.ui.commons.Label({text : "Yes"}).addStyleClass("surveyTemplateCommonPathwayMatrixLabel"),
				                         new sap.ui.commons.Label({width:"40px"}).addStyleClass("surveyTemplateCommonPathwayMatrixLabel"),
				                         new sap.ui.commons.Label({text : "No"}).addStyleClass("surveyTemplateCommonPathwayMatrixLabel")
			                 ]}).addStyleClass("surveyTemplateCommonPathwayMatrixResponseHeaderCell");
			
			var oInfoRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"20px",cells:[infoHeaderCell]});
			clMatrix.addRow(oInfoRow);
			
			var oRow = new c.layout.MatrixLayoutRow({
				cells:[new c.layout.MatrixLayoutCell({content:[ new sap.ui.commons.Label({text : "{Mandatory>id}"}).addStyleClass("lbl1")]}).addStyleClass("surveyTemplateCommonPathwayMatrixHeader"),
				       new c.layout.MatrixLayoutCell({content:[new sap.ui.commons.Label({text : "{Mandatory>question}"}).addStyleClass("lbl2")]}).addStyleClass("surveyTemplateCommonPathwayMatrixQuestions"),
				       new c.layout.MatrixLayoutCell({hAlign:"Center",content:[new sap.ui.commons.CheckBox({
							checked : "{Mandatory>yes}",
							change:function(evt){
								var model = sap.ui.getCore().getModel("Mandatory").oData;
								for ( var obj in model) {
									if (model[obj].id == this.getBindingContext().getObject().id) {
										this.getBindingContext().getObject().no = false;
										model[obj] = this.getBindingContext().getObject();
										break;
									}
								}
								sap.ui.getCore().getModel("Mandatory").setData(model, false);
								sap.ui.getCore().getModel(sap.ui.getCore().getModel("Mandatory"));
							}
						})]}).addStyleClass("surveyTemplateCommonPathwayMatrixResponseCell"),
						new c.layout.MatrixLayoutCell({hAlign:"Center",
							content:[new sap.ui.commons.CheckBox({
								checked : "{Mandatory>no}",
								change:function(evt){
									var model = sap.ui.getCore().getModel("Mandatory").oData;
									for ( var obj in model) {
										if (model[obj].id == this.getBindingContext().getObject().id) {
											this.getBindingContext().getObject().yes = false;
											model[obj] = this.getBindingContext().getObject();
											break;
										}
									}
									sap.ui.getCore().getModel("Mandatory").setData(model, false);
									sap.ui.getCore().getModel(sap.ui.getCore().getModel("Mandatory"));
								}
							})]}).addStyleClass("surveyTemplateCommonPathwayMatrixResponseCell"),
				       
				       ],height:"25px"});
			var oContent = new c.layout.MatrixLayout({
				layoutFixed : false,
				});
	      	
	      	
	      	
	   
	      	oContent.addRow(oRow);
			
			rowReapeater.bindRows("Mandatory>/pathway/needs/0/questions/",oContent);

			var oLayout = new c.layout.MatrixLayout({
				
				layoutFixed : false,
				
				
				}).addStyleClass("oLayout");

	      	var oCell3 = new c.layout.MatrixLayoutCell({});
	      	oCell3.addContent(clMatrix);
	      	var oRow1 = new c.layout.MatrixLayoutRow({cells:[oCell3],height:"8px"});
	      	oLayout.addRow(oRow1);
	      	var oCell4 = new c.layout.MatrixLayoutCell({});
	      	oCell4.addContent(rowReapeater);
	      	var oRow2 = new c.layout.MatrixLayoutRow({cells:[oCell4]});
	        oLayout.addRow(oRow2);
		  
		  
		  
		  
		  
		 var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"3px",vAlign:"Middle"});
			var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
			oRow.addCell(oCell);
			var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
			oRow.addCell(oCell);
			oMatrix.addRow(oRow);
		 
		 var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"30px",vAlign:"Middle"});
			var oCell = new sap.ui.commons.layout.MatrixLayoutCell().addStyleClass("surveyPathwayButtonMandatoryBar");
			oRow.addCell(oCell);
	
				var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
				
				oCell.addContent();
				
				
				oRow.addCell(oCell);
			oMatrix.addRow(oRow);
		   
		 
		 /////////////////////
			var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
			var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top",hAlign:"Left"}).setColSpan(2);
			oCell.addContent(oLayout);
			oRow.addCell(oCell);
			
			oMatrix.addRow(oRow);

			var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"10px"});
			var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Right"}).setColSpan(2);
			oCell.addContent(new sap.ui.commons.Button({text:"Continue",
				press:function(){
					  var bus = sap.ui.getCore().getEventBus();
						bus.publish("nav", "to", { 
				            id : surveyViewFactory.getViewName(),
				          });
				}}).addStyleClass("surveyContinueButtonContainer"));
			
//				
			oRow.addCell(oCell);
						
		
			oMatrix.addRow(oRow);
			return oMatrix;
	}

});
