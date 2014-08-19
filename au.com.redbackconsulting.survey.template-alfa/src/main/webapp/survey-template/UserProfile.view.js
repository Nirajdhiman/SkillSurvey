sap.ui.jsview("survey-template.UserProfile", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.UserProfile
	*/ 
	getControllerName : function() {
		return "survey-template.UserProfile";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.UserProfile
	*/ 
	createContent : function(oController) {


		var json ={"dataModel":{"userId":"RDB123","uType":"","uGender":"","uLocation":"","uFunction":"","uAPSLevel":"","uJobTitle":"","uCurrentLearningPathway":"","uResponse1":"","uResponse2":""},"userType":[{"id":"1","userName":"Individual"},{"id":"2","userName":"Supervisor"}],"gender":[{"id":"1","sex":"Male"},{"id":"2","sex":"Female"}],"location":[{"id":"1","lacationName":"Canberra"},{"id":"2","lacationName":"Sydney"},{"id":"3","lacationName":"Melbourne"},{"id":"4","lacationName":"Perth"},{"id":"5","lacationName":"Brisbane"}],"function":[{"id":"5","functionName":"Learning & Development"},{"id":"6","functionName":"Payroll"},{"id":"7","functionName":"People Business Analyst"},{"id":"8","functionName":"Recruitment"},{"id":"9","functionName":"Service Delivery"},{"id":"10","functionName":"Rehabilitation Services"},{"id":"11","functionName":"Work Health & Safety"},{"id":"12","functionName":"Workforce Planning"},{"id":"13","functionName":"Workplace Relations"},{"id":"1","functionName":"Health Promotions"},{"id":"2","functionName":"Establishments"},{"id":"3","functionName":"HT Business Partner"},{"id":"4","functionName":"HR General"}],"apsLevel":[{"id":"1","aps":"APS1"},{"id":"2","aps":"APS2"},{"id":"3","aps":"APS3"},{"id":"4","aps":"APS4"},{"id":"5","aps":"APS5"},{"id":"6","aps":"APS6"},{"id":"7","aps":"EL1"},{"id":"8","aps":"EL2"},{"id":"9","aps":"EL3"}],"jobTitle":[{"jobtitle":"TBC","id":"1"}],"currentLearningPathway":[{"id":"1","name":"Corporated"},{"id":"2","name":"Accredited"},{"id":"3","name":"People"}],"question1":[{"id":"1","ans":"Yes"},{"id":"2","ans":"No"}],"question2":[{"id":"1","ans":"Yes"},{"id":"2","ans":"No"}]};
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(json, false);
		sap.ui.getCore().setModel(oModel,"userProfile");
		
		
		 var oMatrix = new sap.ui.commons.layout.MatrixLayout({
				layoutFixed : false,
				width:"100%",//(document.documentElement.clientWidth-12).toString()+'px', 
				
			//	height:"99%",
				
			}).addStyleClass("surveySurveyMatrix");
		
		
		var oMtr = new sap.ui.commons.layout.MatrixLayout({
		
			layoutFixed : true,
			width:'62%'
		}).setModel(oModel).addStyleClass("surveyTemplateUserProfileMatrix");
		
		// for column matrix layout
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"35px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign : "Left",width:"150px",
			content:[new sap.ui.commons.Label({text:"User ID :",design : sap.ui.commons.LabelDesign.Bold})]
		}).addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
	
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			content:[new sap.ui.commons.TextField({enabled:false,width:"200px"}).bindValue("/dataModel/userId")],
			
		}).addStyleClass("surveyTemplateUserProfileMatrixCell").setColSpan(3);
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({}).addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({}).addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		oMtr.addRow(oRow);
				
				
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"35px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign : "Left",width:"150px",
		    content:[new sap.ui.commons.Label({text:"User Type :",design : sap.ui.commons.LabelDesign.Bold})]
				}).addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
		
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
					content:[new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,selectedKey:"{userProfile>/dataModel/uType}"}).bindAggregation("items", "/userType", new sap.ui.core.ListItem({
				          text: "{userName}",
				          key: "{userName}"
				        })) .setModel(new sap.ui.model.json.JSONModel(json))]
				}).addStyleClass("surveyTemplateUserProfileMatrixCell").setColSpan(3);
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({}).addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({}).addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		oMtr.addRow(oRow);
		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"35px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign : "Left",width:"150px",
							content:[new sap.ui.commons.Label({text:"Gender :",design : sap.ui.commons.LabelDesign.Bold})]
				}).addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
		
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			content:[new sap.ui.commons.DropdownBox({width:"80px",selectedKey:"{userProfile>/dataModel/uGender}"}).bindAggregation("items", "/gender", new sap.ui.core.ListItem({
		          text: "{sex}",
		          key: "{sex}"
		        })) .setModel(new sap.ui.model.json.JSONModel(json))]
		}).addStyleClass("surveyTemplateUserProfileMatrixCell").setColSpan(3);
	    oRow.addCell(oCell);
	    var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		oMtr.addRow(oRow);
		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"35px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign : "Left",width:"150px",
				content:[new sap.ui.commons.Label({text:"Location :",design : sap.ui.commons.LabelDesign.Bold})]
			}).addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
		
		
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			content:[new sap.ui.commons.DropdownBox({width:"200px",height:"30px",selectedKey:"{userProfile>/dataModel/uLocation}"}).bindAggregation("items", "/location", new sap.ui.core.ListItem({
		          text: "{lacationName}",
		          key: "{id}"
		        })) .setModel(new sap.ui.model.json.JSONModel(json))]
		}).addStyleClass("surveyTemplateUserProfileMatrixCell").setColSpan(3);
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		oMtr.addRow(oRow);
		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"35px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign : "Left",width:"150px",
				content:[new sap.ui.commons.Label({text:"Function :",design : sap.ui.commons.LabelDesign.Bold})]
			}).addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
		
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			content:[new sap.ui.commons.DropdownBox({width:"200px",height:"30px",selectedKey:"{userProfile>/dataModel/uFunction}"}).bindAggregation("items", "/function", new sap.ui.core.ListItem({
		          text: "{functionName}",
		          key: "{id}"
		        })) .setModel(new sap.ui.model.json.JSONModel(json))]
		}).addStyleClass("surveyTemplateUserProfileMatrixCell").setColSpan(3);
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell().addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell().addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		oMtr.addRow(oRow);
		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"35px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign : "Left",width:"200px",
				content:[new sap.ui.commons.Label({text:"APS Level  :",design : sap.ui.commons.LabelDesign.Bold})]
			}).addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
	
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			content:[new sap.ui.commons.DropdownBox({width:"200px",height:"30px",selectedKey:"{userProfile>/dataModel/uAPSLevel}"}).bindAggregation("items", "/apsLevel", new sap.ui.core.ListItem({
		          text: "{aps}",
		          key: "{id}"
		        })) .setModel(new sap.ui.model.json.JSONModel(json))]
		}).addStyleClass("surveyTemplateUserProfileMatrixCell").setColSpan(3);
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({width:"200px"});
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({width:"200px"});
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		oMtr.addRow(oRow);
		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"35px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign : "Left",width:"150px",
				content:[new sap.ui.commons.Label({text:"Job Title :",design : sap.ui.commons.LabelDesign.Bold,width:"100px"})]
			}).addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
		
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			content:[new sap.ui.commons.DropdownBox({width:"200px",height:"30px",selectedKey:"{userProfile>/dataModel/uJobTitle}"}).bindAggregation("items", "/jobTitle", new sap.ui.core.ListItem({
		          text: "{jobtitle}",
		          key: "{id}"
		        })) .setModel(new sap.ui.model.json.JSONModel(json))]
		}).addStyleClass("surveyTemplateUserProfileMatrixCell").setColSpan(3);
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell().addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell().addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		oMtr.addRow(oRow);

		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"35px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign : "Left",width:"160px",
				content:[new sap.ui.commons.Label({text:"Current Learning Pathway  :",design : sap.ui.commons.LabelDesign.Bold,width:"200px"})]
			}).addStyleClass("surveyTemplateUserProfileMatrixCell").setColSpan(2);
		oRow.addCell(oCell);
		
			var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			content:[new sap.ui.commons.DropdownBox({width:"200px",height:"30px",selectedKey:"{userProfile>/dataModel/uCurrentLearningPathway}"}).bindAggregation("items", "/currentLearningPathway", new sap.ui.core.ListItem({
		          text: "{name}",
		          key: "{id}"
		        })) .setModel(new sap.ui.model.json.JSONModel(json))]
		}).addStyleClass("surveyTemplateUserProfileMatrixCell").setColSpan(2);
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		oMtr.addRow(oRow);
		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"35px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign : "Left",width:"400px",
				content:[new sap.ui.commons.Label({text:"Do you currently hold or are you currently undertaking Higher Education/Tertiary Qualifications ?",wrapping : true,design : sap.ui.commons.LabelDesign.Bold,width:"560px"})]
			}).addStyleClass("surveyTemplateUserProfileMatrixCell").setColSpan(5);
		oRow.addCell(oCell);
		
			var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			content:[new sap.ui.commons.DropdownBox({width:"50px",height:"30px",selectedKey:"{userProfile>/dataModel/uResponse1}"}).bindAggregation("items", "/question1", new sap.ui.core.ListItem({
		          text: "{ans}",
		          key: "{ans}"
		        })) .setModel(new sap.ui.model.json.JSONModel(json))]
		}).addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		oMtr.addRow(oRow);
	
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"35px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign : "Left",width:"400px",
				content:[new sap.ui.commons.Label({text:"If supported by Studybank, would you like to pursue Higher Education/Tertiary Qualification?  ",wrapping : true,design : sap.ui.commons.LabelDesign.Bold,width:"560px"})]
			}).addStyleClass("surveyTemplateUserProfileMatrixCell").setColSpan(5);
		oRow.addCell(oCell);
		
			var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			content:[new sap.ui.commons.DropdownBox({width:"50px",height:"30px",selectedKey:"{userProfile>/dataModel/uResponse2}"}).bindAggregation("items", "/question2", new sap.ui.core.ListItem({
		          text: "{ans}",
		          key: "{ans}"
		        })) .setModel(new sap.ui.model.json.JSONModel(json))]
		}).addStyleClass("surveyTemplateUserProfileMatrixCell");
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			content:[new sap.ui.commons.Button({text:"Continue",width:"100px",
				press:function(){
					//return;
					var bus = sap.ui.getCore().getEventBus();
					  bus.publish("nav", "to", { 
				            id : "Master",
				           // context: sap.ui.getCore().getModel("userProfile").oData.dataModel
				           
				       });
				}})]
		}).setColSpan(2);
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oRow.addCell(oCell);
		
		oMtr.addRow(oRow);

		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Left",vAlign:"Top"});
		oCell.addContent(oMtr);
		
		
		oRow.addCell(oCell);
					
	
		oMatrix.addRow(oRow);
		return oMatrix ;
	}

});
