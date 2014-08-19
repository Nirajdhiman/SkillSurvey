sap.ui.jsview("survey-template.Help", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.Help
	*/ 
	getControllerName : function() {
		return "survey-template.Help";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.Help
	*/ 
	createContent : function(oController) {
		  //Bring the table onto the UI 
        var oControl = this;
		var c = sap.ui.commons; /* shorthand */    
		
	    // helper fucntion to create a row with label and text
//        function createLMatrixLayoutRowRow(sLabel, sText) {
//            var oLabel = new c.Label({text : sLabel + ":"});
//            var oTextView = new c.TextView({text : sText});
//            
//            var oMLCell1 = new c.layout.MatrixLayoutCell({hAlign : c.layout.HAlign.End, vAlign : c.layout.VAlign.Top,  content:[oLabel]});
//            var oMLCell2 = new c.layout.MatrixLayoutCell({hAlign : c.layout.HAlign.Begin, vAlign : c.layout.VAlign.Top, content:[oTextView]});
//            
//            return new c.layout.MatrixLayoutRow({cells:[oMLCell1, oMLCell2]});
//        }
//        config.setToogleButtonStatus('sHelp1', true);
//        config.setToogleButtonStatus('sHelp2', true);
//        var oFC1 = new sap.ui.ux3.ThingGroup({
//        	title : " Help Overview",
//        	content: [ this.getContentForHelpOverview()
//        	          new sap.ui.commons.Label({
//        		id:'sHelpl1',
//        		icon:'config/images/expend.png',
//        		text:"Step 1: Navigate in the Survey Progress",
//        		width:'100%'
//        	})
//        	.attachBrowserEvent('click',function(){
//        		debugger;
//        		var oControl = config.getObjectById("sHelp1");
//        		var oLabel = config.getObjectById('sHelpl1');
//        		
//        		if(config.getToggleButtonStatus('sHelp1')==true){
//        			config.setToogleButtonStatus('sHelp1', false);
//        			oControl.setVisible(false);
//        			oLabel.setIcon('config/images/collapse.png');
//        		}else{
//        			config.setToogleButtonStatus('sHelp1', true);
//        			oControl.setVisible(true);
//        			oLabel.setIcon('config/images/expend.png');
//        		}
//        		
//    			
//    			
//    			
//        	},this).addStyleClass("helpActionText"),this.createStep1(),
//        	new sap.ui.commons.Label({
//        		id:'sHelpl2',
//        		icon:'config/images/expend.png',
//        		text:"Step 2: Navigate in the Survey Progress",
//        		width:'100%'
//        	}).attachBrowserEvent('click',function(){
//        		debugger;
//        		var oControl = config.getObjectById("sHelp2");
//        		var oLabel = config.getObjectById('sHelpl2');
//        		
//        		if(config.getToggleButtonStatus('sHelp2')==true){
//        			config.setToogleButtonStatus('sHelp2', false);
//        			oControl.setVisible(false);
//        			oLabel.setIcon('config/images/collapse.png');
//        		}else{
//        			config.setToogleButtonStatus('sHelp2', true);
//        			oControl.setVisible(true);
//        			oLabel.setIcon('config/images/expend.png');
//        		}
//        		
//    			
//    			
//    			
//        	},this).addStyleClass("helpActionText2"),this.createStep2(),
        //	]
    //    });
		function createTI() {
      	// Facets of the ThingInspector
	//	oNI1 = new sap.ui.ux3.NavigationItem({key:"help", text:"Help"});
//		var oA4 = new sap.ui.ux3.ThingAction({
//			id : "help-temmplate-button-close",
//			text : "Close",
//			tooltip: "Close"
//		});

		
		var oTI = new sap.ui.ux3.ThingInspector({ 
			id:config.getHelpThingInspactorId(),
			icon:"config/images/help.png", 
			firstTitle:"Help Assistance",
			closeButtonVisible:false,
			openButtonVisible:false,
			width:'100%',
				height:'100%',
			//facets : [ oNI1, ] , selectedFacet:oNI1
		});
		///var oTC1 = new sap.ui.ux3.ThingGroup({});
		//var oTC2 = new sap.ui.ux3.ThingGroup({title:"Contact"});
		
//		var oLayout = new c.layout.MatrixLayout({layoutFixed:false,width:"220px"});
//		var oRow = new c.layout.MatrixLayoutRow();
//
//		oRow.addCell( new c.layout.MatrixLayoutCell({
//			hAlign : "Left",
//			width:"20px",
//			content:[ 
//			]
//		}));
//		oLayout.addRow(oRow);
//		oTC1.addContent(oControl.getContentForHelpOverviewLeftPane());
//		oTI.addHeaderContent(oTC1);
//		
		
		oTI.attachActionSelected(function(oControlEvent) {
			//var id = oControlEvent.getParameters().id;
			//alert("Action \"" + id + "\" of Thing \""
			//		+ oControlEvent.getSource().getId() + "\" selected - oAction:" +  oControlEvent.getParameters().action );
		});
		oTI.attachFacetSelected(function(oControlEvent) {
			var id = oControlEvent.getParameters().id;
			//alert("Facet \"" + id + "\" of Thing \""
			//		+ oControlEvent.getSource().getId() + "\" selected");
			//setContent();
		});
	    oTI.attachClose(function(oControlEvent) { 
	    	//var id = oControlEvent.getParameters().id;
	    	//alert("Thing \""+ id+ "\"closed");
	    	//oTI.destroy();
	    });
	    oTI.attachOpenNew(function(oControlEvent) {
			//var id = oControlEvent.getParameters().id;
			//alert("Thing \"" + id + "\"openNew triggered");
		});
	    oTI.attachOpen(function(oControlEvent) {
		//	var id = oControlEvent.getParameters().id;
		//	alert("Thing \"" + id + "\"open triggered");
		});
	  //  oTI.addAction(oA4);
	    return oTI;
		}
		
	   
	    	oTI = createTI();
	    	helpAssistance.createThingGroup("helpHome");
	    	//oTI.addFacetContent(oFC1);
	    	oTI.open();
	  // return oTI;
	 
	

	},
	createStep1:function(){
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			id:'sHelp1',
			layoutFixed : false,
			width:'100%'
		}).addStyleClass("home-left-container");
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			vAlign:"Middle",
			hAlign:"Left",
			});
		oCell.addContent(new sap.ui.core.HTML({ 
			content:'<div style="margin-top:8px;margin-left:3%;">'+
			'<div style="float:left;font-family: Arial,Helvetica,sans-serif;font-size:11px;color:black; margin-top:3px;">'+
			' Having trouble finding your way through Skills Gap Analysis Tool? You have '+
			'come to the right place! If you are after a breakdown of whats recently been added, click on the '+
			'Read about new features link on the left. Our feature set will no doubt be expanding over time, so check back often if you want to be kept up to date on the latest for all things Skills Gap Analysis Tool . </div>'+
			'<div style="font-family: Arial,Helvetica,sans-serif;font-size:11px;"> Having trouble finding your way through Skills Gap Analysis Tool? You have '+
			'come to the right place! If you are after a breakdown of whats recently been added, click on the '+
			'Read about new features link on the left. Our feature set will no doubt be expanding over time, so check back often if you want to be kept up to date on the latest for all things Skills Gap Analysis Tool . </div>'+
		    '<div><img src="config/images/help/sj2.jpg" width="650" height="250"></div>'+
			
			'</div>'
				}));
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		return oMatrix;
		
	},
	createStep2:function(){
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			id:'sHelp2',
			layoutFixed : true,
		}).addStyleClass("home-left-container");
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			vAlign:"Middle",
			hAlign:"Left",
			});
		oCell.addContent(new sap.ui.core.HTML({ 
			content:'<div style="width:97%;float:left;font-family: Arial,Helvetica,sans-serif;font-size:11px;color:black; margin-top:3px;margin-left:3%;">'+
			'<div> Having trouble finding your way through Skills Gap Analysis Tool? You have '+
			'come to the right place! If you are after a breakdown of whats recently been added, click on the '+
			'Read about new features link on the left. Our feature set will no doubt be expanding over time, so check back often if you want to be kept up to date on the latest for all things Skills Gap Analysis Tool . </div>'+
			'<ul style="float:left;margin-left:2%;width:90%;">'+
			'<li>abc</li>'+
			'<li>Some description text....</li>'+
			'<li>Some description text....</li>'+
			'</ul>'+
			'<div style="font-family: Arial,Helvetica,sans-serif;font-size:11px;"> Having trouble finding your way through Skills Gap Analysis Tool? You have '+
			'come to the right place! If you are after a breakdown of whats recently been added, click on the '+
			'Read about new features link on the left. Our feature set will no doubt be expanding over time, so check back often if you want to be kept up to date on the latest for all things Skills Gap Analysis Tool . </div>'+
		    '<div><img src="config/images/help/sj1.jpg" width="550" height="250"></div>'+
			'</div>'
				}));
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		return oMatrix;
		
	},
	getContentForHelpOverview:function(){
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			
			layoutFixed : true,
		}).addStyleClass("home-left-container");
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			vAlign:"Middle",
			hAlign:"Left",
			});
		oCell.addContent(new sap.ui.core.HTML({ 
			content:'<div style="width:97%;float:left;font-family: Arial,Helvetica,sans-serif;font-size:13px;color:black; margin-top:3px;margin-left:3%;">'+
			'<p> Having trouble finding your way through Skills Gap Analysis Tool? You have '+
			'come to the right place! If you are after a breakdown of whats recently been added, click on the '+
			'Read about new features link on the left. Our feature set will no doubt be expanding over time, so check back often if you want to be kept up to date on the latest for all things Skills Gap Analysis Tool .</p> '+
			'<p>Alternatively, if you need help with any of our existing page tools you can flick through our growing list of available help articles below.</p>'+
			"<p>Can't find what you need? You can also get in touch with us directly for assistance.</p>"+
			'<div style="width:80%;"><h4>My Profile</h4></div>'+
			'<ul style="float:left;margin-top:4px;margin-left:4px;width:100%;">'+
			'<li><a href="#">My Profile explained</a></li>'+
			'<li><a href="#">How to complete the My Profile questions</a></li>'+
			'</ul>'+
			
			'<p><div styele="width:80%;"><h4>My Surveys</h4></div>'+
			'<ul style="float:left;margin-top:4px;margin-left:4px;width:100%;">'+
			'<li><a href="#">My Surveys explained</a></li>'+
			'<li><a href="#"> How to complete a Survey</a></li>'+
			'</ul>'+
			'</p>'+
			'<p><div><h4>My Reports</h4></div>'+
			'<ul style="float:left;margin-top:4px;margin-left:4px;width:80%;">'+
			'<li><a href="#">My Reports explained</a></li>'+
			'<li><a href="#">How to print a Report?</a></li>'+
			'<li><a href="#">How to save a Report as a PDF?</a></li>'+
			'</ul>'+
			'</div></p>'+
			'</div>'
				}));
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		return oMatrix;
	},
	getContentForHelpOverviewLeftPane:function(){
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
		}).addStyleClass("home-left-container");
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			vAlign:"Middle",
			hAlign:"Left",
			});
		oCell.addContent(new sap.ui.core.HTML({ 
			content:'<div style="width:97%;float:left;font-family: Arial,Helvetica,sans-serif;font-size:13px;color:black; margin-top:3px;margin-left:1px;">'+
				'<div style="width:80%;"><h4>My Profile</h4></div>'+
			'<ul style="float:left;margin-top:4px;margin-left:-24px;width:100%;">'+
			'<li><a href="#">My Profile explained</a></li>'+
			'<li><a href="#">How to complete the My Profile questions</a></li>'+
			'</ul>'+
			
			'<p><div styele="width:80%;"><h4>My Surveys</h4></div>'+
			'<ul style="float:left;margin-top:4px;margin-left:-24px;width:100%;">'+
			'<li><a href="#">My Surveys explained</a></li>'+
			'<li><a href="#"> How to complete a Survey</a></li>'+
			'</ul>'+
			'</p>'+
			'<p><div><h4>My Reports</h4></div>'+
			'<ul style="float:left;margin-top:4px;margin-left:-24px;width:80%;">'+
			'<li><a href="#">My Reports explained</a></li>'+
			'<li><a href="#">How to print a Report?</a></li>'+
			'<li><a href="#">How to save a Report as a PDF?</a></li>'+
			'</ul>'+
			'</div></p>'+
			'</div>'
				}));
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		return oMatrix;
	}

});