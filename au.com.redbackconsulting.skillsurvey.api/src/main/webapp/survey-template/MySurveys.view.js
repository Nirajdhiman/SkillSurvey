sap.ui.jsview("survey-template.MySurveys", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.MySurveys
	*/ 
	getControllerName : function() {
		return "survey-template.MySurveys";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.MySurveys
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
				text : "My Surveys",
				tooltip : "Home",
				
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
		
		var oHtml = new sap.ui.core.HTML({
			
			content:'<ul class="surveyHeadingLabelA">Create Survey (current year)</ul>'+
			'<ol>'+
			'<li class="surveyHeadingLabelU">Mandatory</li>'+
			'<li class="surveyHeadingLabelU">Highly Desirable </li>'+
			'<li class="surveyHeadingLabelU">  Desirable</li>'+
			'<li class="surveyHeadingLabelU"> Skills Recognition</li>'+
			'<li class="surveyHeadingLabelU">Supervisor</li>'+
			'</ol>'+
			'<table border="1" id="detail">'+
			'<tr id="col1">'+
			'<th class="surveyHeadingLabelU"> Survey History</th>'+
			'<th class="surveyHeadingLabelU">  Status</th>'+
			'<th class="surveyHeadingLabelU"> Date</th>'+
			'<tr id="col1">'+
			'<td><li class="surveyHeadingLabelU">Mandatory</li></td>'+
			'<td class="surveyHeadingLabelU"> Saved</td>'+
			'<td class="surveyHeadingLabelU">15/11/14</td>'+
			'</tr>'+
			'<tr>'+
			'<td><li class="surveyHeadingLabelU">Highly Desirable </li></td>'+
			'<td class="surveyHeadingLabelU"> Not Started</td>'+
			'<td class="surveyHeadingLabelU">N/A</td>'+
			'</tr>'+
			'<tr>'+
			'<td><li class="surveyHeadingLabelU">Desirable</li></td>'+
			'<td class="surveyHeadingLabelU">Not Started </td>'+
			'<td class="surveyHeadingLabelU">N/A</td>'+
			'</tr>'+
			'<tr>'+
			'<td><li class="surveyHeadingLabelU">Supervisor</li></td>'+
			'<td class="surveyHeadingLabelU">Saved</td>'+
			'<td class="surveyHeadingLabelU">11/11/14</td>'+
			'</tr>'+
			'</table>'


	});
// 
		oCell.addContent(oHtml);
	oRow.addCell(oCell);
		

		
		
		
		///////////////////////////////////////////////////////
		// end of content area
		// defining page right area content
	
		
		
		oMatrix.addRow(oRow);
		
		return oMatrix;

	}

});
