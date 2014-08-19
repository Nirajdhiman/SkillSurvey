sap.ui.jsview("survey-template.HomeRightPane", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.HomeRightPane
	*/ 
	getControllerName : function() {
		return "survey-template.HomeRightPane";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.HomeRightPane
	*/ 
	createContent : function(oController) {
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : false,
			width:'100%'
			//width:(config.getDocWidth()-308).toString()+'px',
			//height:(config.getMatrixHeight()).toString()+'px'
			
		}).addStyleClass("home-left-container");
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			vAlign:"Middle",
			hAlign:"Left",
			width:'100%'
			});
		oCell.addContent(this.firstContentForLeftPane());
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		return oMatrix;
	},
	firstContentForLeftPane:function(){
		return new sap.ui.core.HTML({ 
			content:'<div  class="homeFirstRightContent" style="width:98%;padding-right:2px;">'+
			'<div style="float:left;font-family: Arial,Helvetica,sans-serif;font-size:13px;color:black; margin-top:2%;">The tool is quite simple to use and will take you approximately 20 minutes to complete. </div>'+
			'<div style="float:left;font-family: Arial,Helvetica,sans-serif;font-size:13px;color:black; margin-top:2%;">Once you have created your personal profile, your next steps are to complete surveys on'+
			' the mandatory and supervisor (if applicable to your role) training and the Highly Desirable and Desirable courses and units of competency recommended for your role.  If required, '+
			'you can stop at any time, save your results and resume later.'+
			'  Once completed, the tool will generate a report. </div>'+
			'<div style="float:left;font-family: Arial,Helvetica,sans-serif;font-size:13px;color:black; margin-top:2%;">By clicking on the name of a course or unit of competency, a box will appear with additional information.  </div>'+
			'<div style="float:left;font-family: Arial,Helvetica,sans-serif;font-size:13px;color:black; margin-top:2%;">You can also ascertain your potential for skills recognition for Highly Desirable and Desirable units of competency recommended for your role using the tool.  If you believe you have the necessary skills and experience to gain Recognition of Current Competency for a unit, you can complete a short survey which will give you an indication if you should pursue recognition through a Registered Training Provider.  </div>'+
			
			'</div>'
				});
	}

});
