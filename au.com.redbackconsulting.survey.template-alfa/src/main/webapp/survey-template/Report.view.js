sap.ui.jsview("survey-template.Report", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.Report
	*/ 
	getControllerName : function() {
		return "survey-template.Report";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.Report
	*/ 
	createContent : function(oController) {
		//if(sap.ui.getCore().getModel("Report")==null){return ;}
		var reportJSONFormat ={
				reportTitle:"Survey completed 12 june 2014- Work Health & Safety Officer - APS4",
				reportHeader:[
				              { name:"Unit of Competency/Course Name"},
				              { name:"Ranking"},
				              {name:"Completed"}
				              ],
				content:[
				         {
				        	 courseType:"Mandatory Training",
				        	 items:[
				        	        {course:"DECA - The Essentials for Employees",ranking:"Mandatory",completed:"Yes"},
				        	        {course:"Ethics and Fraud Awareness",ranking:"Mandatory",completed:"Yes"},
				        	        {course:"Personal Data Retention Policy ",ranking:"Mandatory",completed:"Yes"},
				        	        {course:"Fraun Prevention Awareness",ranking:"Mandatory",completed:"Yes"}
				        	        ]
					
				         },
				         {
				        	 courseType:"Highly Desirable Training",
				        	 items:[
				        	        {course:"BSBWHS402A Assist with Compilance with WHS laws",ranking:"1",completed:"Yes"},
				        	        {course:"BSBWHS402A Contribute to WHS hazard identification, risk Assessment and risk control",ranking:"2",completed:"Yes"},
				        	        {course:"Hazardous Chemicals Awareness Couse (eLearning) PM Key S Code 212980, Proficiency Code P114574 ",ranking:"Mandatory",completed:"Yes"},
				        	        {course:"BSBWHS402A Contribute to WHS hazard identification, risk Assessment and risk control",ranking:"2",completed:"Yes"},
				        	        {course:"Hazardous Chemicals Awareness Couse (eLearning) PM Key S Code 212980, Proficiency Code P114574 ",ranking:"Mandatory",completed:"Yes"},
				        	     
				        	        ]
					
				         },
				         {
				        	 courseType:"Desirable Training",
				        	 items:[
				        	        {course:"BSBWHS301 Maintain workeplace safety",ranking:"3",completed:"No"},
				        	        {course:"BSBWHS606A Conduct a WHS audit",ranking:"4",completed:"Yes"} 
				        	        ]
					
				         }
				         ]
		};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	           
		
		var oReportModel = sap.ui.getCore().getModel("Report");
		if (oReportModel == null) {
			oReportModel = new sap.ui.model.json.JSONModel();
			oReportModel.setDefaultBindingMode("OneWay");

		}
		oReportModel.setData(reportJSONFormat, false);
		sap.ui.getCore().setModel(oReportModel,"Report");
		debugger;
		var oControl =[];
		var report = new Reports(sap.ui.getCore().getModel("Report").oData);
		var button = new sap.ui.commons.Button({text:"Print",
		 press:oController.toPrint	
		}).addStyleClass("reportPringButton");
		 oControl.push(button);
		 var html =new sap.ui.core.HTML("reportHtml" ,{ content:report.generateHTMLReport()});
	
		 oControl.push(html);
		
		return oControl;
		
		

	}

});
