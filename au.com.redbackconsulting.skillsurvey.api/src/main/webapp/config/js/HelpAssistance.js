var HelpAssistance =function(){
	this.userType="";
	this,setUserType=function(uType){
		this.userType = uType;
	};
	this.getUserType=function(){
		return this.userType;
	};
	this.getHelpHomeRightPaneLinkContent=function(){
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
			'<li><a href="#"  onClick="doAction(11)" return false;>My Profile explained</a></li>'+
			'<li><a href="#"  onClick="doAction(12)" return false;>How to complete the My Profile questions</a></li>'+
			'</ul>'+
			
			'<p><div styele="width:80%;"><h4>My Surveys</h4></div>'+
			'<ul style="float:left;margin-top:4px;margin-left:4px;width:100%;">'+
			'<li><a href="#"  onClick="doAction(21)" return false;>My Surveys explained</a></li>'+
			'<li><a href="#"  onClick="doAction(22)" return false;> How to complete a Survey</a></li>'+
			'</ul>'+
			'</p>'+
			'<p><div><h4>My Reports</h4></div>'+
			'<ul style="float:left;margin-top:4px;margin-left:4px;width:80%;">'+
			'<li><a href="#"  onClick="doAction(31)" return false;>My Reports explained</a></li>'+
			'<li><a href="#"  onClick="doAction(32)" return false;>How to print a Report?</a></li>'+
			'<li><a href="#"  onClick="doAction(33)" return false;>How to save a Report as a PDF?</a></li>'+
			'</ul>'+
			'</div></p>'+
			'</div>'
				}));
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		return oMatrix;
	};
	this.getHelpHomeLeftPaneLinkContent=function(){
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
			'<li><a href="#"  onClick="doAction(11)" return false;>My Profile explained</a></li>'+
			'<li><a href="#"  onClick="doAction(12)" return false;>How to complete the My Profile questions</a></li>'+
			'</ul>'+
			'<p><div styele="width:80%;"><h4>My Surveys</h4></div>'+
			'<ul style="float:left;margin-top:4px;margin-left:-24px;width:100%;">'+
			'<li><a href="#"  onClick="doAction(21)" return false;>My Surveys explained</a></li>'+
			'<li><a href="#"  onClick="doAction(22)" return false;> How to complete a Survey</a></li>'+
			'</ul>'+
			'</p>'+
			'<p><div><h4>My Reports</h4></div>'+
			'<ul style="float:left;margin-top:4px;margin-left:-24px;width:80%;">'+
			'<li><a href="#" onClick="doAction(31)" return false;>My Reports explained</a></li>'+
			'<li><a href="#"  onClick="doAction(32)" return false;>How to print a Report?</a></li>'+
			'<li><a href="#"  onClick="doAction(33)" return false;>How to save a Report as a PDF?</a></li>'+
			'</ul>'+
			'</div></p>'+
			'</div>'
				}));
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		return oMatrix;
	};
	this.howToCompleteSurveyHelpAssistance=function(){
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			id:'sHelp1',
			layoutFixed : true,
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
	};
	this.createThingGroup=function(infoType){
		var oControl = config.getObjectById(config.getHelpThingInspactorId());
		oControl.destroyFacets();
		oControl.destroyFacetContent() ;
		if(infoType=="helpHome"){
			var facts = this.createHelpNavigationItem("help", "Help");
			oControl.addFacet(facts);
			 var group = new sap.ui.ux3.ThingGroup({});
			 group.addContent(this.getHelpHomeRightPaneLinkContent());
			oControl.addFacetContent(group);
			var hGroup = new sap.ui.ux3.ThingGroup();
			hGroup.addContent(this.getHelpHomeLeftPaneLinkContent());
			oControl.addHeaderContent(hGroup);
			oControl.setSelectedFacet(facts);
			//oNI1 = 
		}
		if(infoType=="aboutProfile"){
			var facts = this.createHelpNavigationItem("profile", "About Profile");
			oControl.addFacet(facts);
			 var group = new sap.ui.ux3.ThingGroup({});
			 group.addContent(this.getHelpHomeRightPaneLinkContent());
			oControl.addFacetContent(group);
			oControl.setSelectedFacet(facts);
		}
		if(infoType=="profileComplete"){
			var facts = this.createHelpNavigationItem("profileComplete", "Help Assistance For How To Complete Profile");
			oControl.addFacet(facts);
			 var group = new sap.ui.ux3.ThingGroup({});
			 group.addContent(this.getHelpHomeRightPaneLinkContent());
			oControl.addFacetContent(group);
			oControl.setSelectedFacet(facts);
		}
		if(infoType=="aboutSurvey"){
			var facts = this.createHelpNavigationItem("aboutSurvey", "About Survey");
			oControl.addFacet(facts);
			 var group = new sap.ui.ux3.ThingGroup({});
			 group.addContent(this.getHelpHomeRightPaneLinkContent());
			oControl.addFacetContent(group);
			oControl.setSelectedFacet(facts);
		}
		if(infoType=="surveyComplete"){
			var facts = this.createHelpNavigationItem("surveyComplete", "Help Assistance For How To Complete Survey");
			oControl.addFacet(facts);
			 var group = new sap.ui.ux3.ThingGroup({});
			 group.addContent(this.howToCompleteSurveyHelpAssistance());
			oControl.addFacetContent(group);
			oControl.setSelectedFacet(facts);
		}
		if(infoType=="aboutReport"){
			var facts = this.createHelpNavigationItem("aboutReport", "About Report");
			oControl.addFacet(facts);
			 var group = new sap.ui.ux3.ThingGroup({});
			 group.addContent(this.getHelpHomeRightPaneLinkContent());
			oControl.addFacetContent(group);
			oControl.setSelectedFacet(facts);
		}
		if(infoType=="reportPrint"){
			var facts = this.createHelpNavigationItem("aboutReport", "Help Assistance For How To Print Report");
			oControl.addFacet(facts);
			 var group = new sap.ui.ux3.ThingGroup({});
			 group.addContent(this.getHelpHomeRightPaneLinkContent());
			oControl.addFacetContent(group);
			oControl.setSelectedFacet(facts);
		}
		if(infoType=="reportPdf"){
			var facts = this.createHelpNavigationItem("aboutReport", "Help Assistance For How To Print Report In PDF");
			oControl.addFacet(facts);
			 var group = new sap.ui.ux3.ThingGroup({});
			 group.addContent(this.getHelpHomeRightPaneLinkContent());
			oControl.addFacetContent(group);
			oControl.setSelectedFacet(facts);
		}
	};
	this.createHelpNavigationItem = function(key,text){
		 return new sap.ui.ux3.NavigationItem({key:key, text:text});
	};
};

function doAction(key){
	//alert(key);
	switch(key){
	case 11:
		 helpAssistance.createThingGroup("aboutProfile");
		break;
	case 12:
		 helpAssistance.createThingGroup("profileComplete");
		break;
	case 21:
		 helpAssistance.createThingGroup("aboutSurvey");
		break;
	case 22:
		 helpAssistance.createThingGroup("surveyComplete");
		break;
	case 31:
		 helpAssistance.createThingGroup("aboutReport");
		break;
	case 32:
		 helpAssistance.createThingGroup("reportPrint");
		break;
	case 33:
		 helpAssistance.createThingGroup("reportPdf");
		break;
	}
};