

function setKeyboardNavigation(){

			// "this" is expected to be a matrix layout
			var oFocusRef = this.getDomRef(),
				aCells = oFocusRef.getElementsByTagName("TD"),
				aDomRefs = [];

			jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
			for (var i=0;i<aCells.length;i++) {
				aDomRefs.push(aCells[i].firstChild);
			}
			if (!this.QVItemNavigation) {
				this.QVItemNavigation = new sap.ui.core.delegate.ItemNavigation();
				this.addDelegate(this.QVItemNavigation);
			}
			this.QVItemNavigation.setRootDomRef(oFocusRef);
			this.QVItemNavigation.setItemDomRefs(aDomRefs);
			this.QVItemNavigation.setCycling(false);
			this.QVItemNavigation.setSelectedIndex(0);
			this.QVItemNavigation.setPageSize(aDomRefs.length);
		}
		function onNavigate(event){
			//alert("Navigate event with the reference to: " + event.getParameter("href"));
			// Supress link navigation from a QuickView
			event.preventDefault();
			// Close the QuickView after a click on a link
			event.getSource().close();
		}


sap.ui.jsview("survey-template.app", {
  bData :[{"seqNo":1,"text":"Mandatory "},{"seqNo":2,"text":"Highly Desirable"},{"seqNo":3,"text":"Desirable"}],

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.app
	*/ 
	getControllerName : function() {
		return "survey-template.app";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.app
	*/ 
	createContent : function(oController) {
		
		// Create the table like content for the QuickView.
		// Use rows of of supplied data for table rows.
		
		
		
		//*********************************************************************
		this.setDisplayBlock(true);
		this.app = new sap.m.App();
	
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : false,
			width:(document.documentElement.clientWidth-3).toString()+'px', 
			height:(document.documentElement.clientHeight-3).toString()+'px'
		//	height:(window.innerHeight).toString()+'px'
			
		}).addStyleClass("surveyGlobalMatrix");
		
		/////////////////////////////////////////////////////////////////////////
		// defin templte for page top header
		var siteMenuBarTop= new sap.ui.commons.Toolbar({});
		siteMenuBarTop.addItem(new sap.ui.commons.Button({
			icon : "sap-icon://home",
			press:function(evt){
				 var viewDataModel=[{"seqNo":1,"id":"Mandatory"},{"seqNo":2,"id":"HighlyDesirable"},{"seqNo":3,"id":"Desirable"}];
				var  buttonModel = [{"seqNo":1,"text":"Mandatory"},{"seqNo":2,"text":"Highly Desirable"},{"seqNo":3,"text":"Desirable"}];
				 surveyViewFactory.data =viewDataModel;
	             surveyViewFactory.bData=buttonModel;
	             surveyViewFactory.viewSeqNo=0;
	             surveyViewFactory.lastSeqNo=0;
				var bus = sap.ui.getCore().getEventBus();
				  bus.publish("nav", "to", { 
			            id : "Master",
			           
			       });
			}
		}));
		siteMenuBarTop.addItem(new sap.ui.commons.Button({
			text:"Help",
		}));
		siteMenuBarTop.addItem(new sap.ui.commons.Button({
			icon : "sap-icon://log",
			press:function(evt){
				location.replace("logout.jsp");
				
				//window.location.replace("http://localhost:9090/au.com.redbackconsulting.survey.template/logout.jsp");
		;
			}
		}));
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"6px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Right"}).addStyleClass("surveyTemplateSiteToMenuBar");
		oCell.addContent(siteMenuBarTop);
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		
		// logo cell
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"80px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell().addStyleClass("surveyTemplateBannerBar");
		oCell.addContent( );
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		// end of logo//
		

	
////define template for site menu bar
//		
		var RoleModelSiteMenu={} ;
		var siteMenuBar  = new sap.ui.commons.Toolbar({	});
		if(role=="Supervisor"){
			RoleModelSiteMenu =[ { id:"SupervisorSurvey",imageUrl:"image/survey.png" },{id:"SupervisorReports",imageUrl:"image/reports.png"},{id:"SupervisorUsers",imageUrl:"image/users.png"},{id:"SupervisorOrg",imageUrl:"image/org.png"}]
			
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData([{id:"CreateSurvey",name:"Create Survey"}],false);
			sap.ui.getCore().setModel(oModel,"SupervisorSurvey");
			
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData([{id:"CreateReport",name:"Create Report"},{id:"Print Report",name:"Print Report"}],false);

			sap.ui.getCore().setModel(oModel,"SupervisorReports");
			
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData([{id:"CreateReport",name:"Create User"},{id:"UpdateUser",name:"Maintain User"}],false);
			sap.ui.getCore().setModel(oModel,"SupervisorUsers");
			
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData([{id:"CreateReport",name:"Org Report"},{id:"Print Report",name:"Print Org Report"}],false);
			sap.ui.getCore().setModel(oModel,"SupervisorOrg");
		
		}else if(role=="Administrator"){
			
			RoleModelSiteMenu =[ { id:"SupervisorSurvey",imageUrl:"image/survey.png" },{id:"SupervisorReports",imageUrl:"image/reports.png"},{id:"SupervisorUsers",imageUrl:"image/users.png"}];
			
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData([{id:"CreateSurvey",name:"Create Survey"}],false);
			sap.ui.getCore().setModel(oModel,"SupervisorSurvey");
			
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData([{id:"CreateReport",name:"Create Report"},{id:"Print Report",name:"Print Report"}],false);

			sap.ui.getCore().setModel(oModel,"SupervisorReports");
			
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData([{id:"CreateReport",name:"Create User"},{id:"UpdateUser",name:"Maintain User"}],false);
			sap.ui.getCore().setModel(oModel,"SupervisorUsers");	
		}else if(role=="User"){
			
			RoleModelSiteMenu =[ { id:"SupervisorSurvey",imageUrl:"image/MySurvey.png" },{id:"SupervisorReports",imageUrl:"image/MyReports.png"}];
						
						var oModel = new sap.ui.model.json.JSONModel();
						oModel.setData([{id:"CreateSurvey",name:"Create Survey"}],false);
						sap.ui.getCore().setModel(oModel,"SupervisorSurvey");
						
						var oModel = new sap.ui.model.json.JSONModel();
						oModel.setData([{id:"CreateReport",name:"Create Report"},{id:"Print Report",name:"Print Report"}],false);

						sap.ui.getCore().setModel(oModel,"SupervisorReports");
						
						var oModel = new sap.ui.model.json.JSONModel();
						oModel.setData([{id:"CreateReport",name:"Create User"},{id:"UpdateUser",name:"Maintain User"}],false);
						sap.ui.getCore().setModel(oModel,"SupervisorUsers");	
					}
		
		
		for(var siteMenu in RoleModelSiteMenu){
			var oImage = new sap.ui.commons.Image({
				id:RoleModelSiteMenu[siteMenu].id,
				height:"23px",
				width:"220px",
				tooltip:new sap.ui.ux3.QuickView({
					content:	oController.createQuickViewDSContent(RoleModelSiteMenu[siteMenu].id),
					navigate:	onNavigate,
					showActionBar: false
				}).addStyleClass("surveyQuickView")
			});
			oImage.setSrc(RoleModelSiteMenu[siteMenu].imageUrl);
			siteMenuBar.addItem(oImage);
			//siteMenuBar.addItem(new sap.ui.commons.Label({ text:"0000"}).addStyleClass("siteMenuSeparator"));
			
		}
		var oControl= sap.ui.getCore().byId("SupervisorSurvey");
		if(oControl!=null){
			oControl.attachBrowserEvent("mouseenter", function(evt){ 
				sap.ui.getCore().setModel(sap.ui.getCore().getModel("SupervisorSurvey"),"MenuModel");
				}, this);
			oControl.attachBrowserEvent("mouseover", function(evt){ 
					 sap.ui.getCore().setModel(sap.ui.getCore().getModel("SupervisorSurvey"),"MenuModel");
				}, this);
		}
		var oControl= sap.ui.getCore().byId("SupervisorReports");
		if(oControl!=null){
			oControl.attachBrowserEvent("mouseenter", function(evt){ 
				sap.ui.getCore().setModel(sap.ui.getCore().getModel("SupervisorReports"),"MenuModel");
				}, this);
			oControl.attachBrowserEvent("mouseover", function(evt){ 
					 sap.ui.getCore().setModel(sap.ui.getCore().getModel("SupervisorReports"),"MenuModel");
				}, this);
		}
		var oControl= sap.ui.getCore().byId("SupervisorUsers");
		if(oControl!=null){
			oControl.attachBrowserEvent("mouseenter", function(evt){ 
				sap.ui.getCore().setModel(sap.ui.getCore().getModel("SupervisorUsers"),"MenuModel");
				}, this);
			oControl.attachBrowserEvent("mouseover", function(evt){ 
					 sap.ui.getCore().setModel(sap.ui.getCore().getModel("SupervisorUsers"),"MenuModel");
				}, this);
		}
		var oControl= sap.ui.getCore().byId("SupervisorOrg");
		if(oControl!=null){
			oControl.attachBrowserEvent("mouseenter", function(evt){ 
				sap.ui.getCore().setModel(sap.ui.getCore().getModel("SupervisorOrg"),"MenuModel");
				}, this);
			oControl.attachBrowserEvent("mouseover", function(evt){ 
					 sap.ui.getCore().setModel(sap.ui.getCore().getModel("SupervisorOrg"),"MenuModel");
				}, this);
		}
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"12px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top"});
		oCell.addContent(siteMenuBar);
		//oCell.addContent(siteMenuBar2);
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
//		//////////////////////////////////////////////////////////////
		
//		
		var oTemplate = new sap.ui.ux3.NavigationItem({key:"{breadcum>bkey}", text:"{breadcum>breadcumtext}"});
		 
		var oNavigationBar1 = new sap.ui.ux3.NavigationBar({select :function(oEvent){  
			var name =  oEvent.getParameter("item").getKey();
				oEvent.getSource().rerender();
		     var bus = sap.ui.getCore().getEventBus();
		  bus.publish("nav", "to", { 
	            id : name,
	           
	       });		
},items: {path :"breadcum>/Items/", template :oTemplate}});
		
		var oRowbreadcum = new sap.ui.commons.layout.MatrixLayoutRow({height:"12px"});
		var oCellBreadcum = new sap.ui.commons.layout.MatrixLayoutCell().addStyleClass("surveyTemplateSiteBar");
		oCellBreadcum.addContent(oNavigationBar1);
		oRowbreadcum.addCell(oCellBreadcum);
		
		oMatrix.addRow(oRowbreadcum);
		//define template for  view contentsr
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({vAlign:"Top",height:(document.documentElement.clientHeight-210).toString()+'px'});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();//.addStyleClass("surveyTemplateBannerBar");
		oCell.addContent(new sap.m.Shell("Shell", {
			app : this.app
		}));
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"28px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell().addStyleClass("surveyTemplateFooter");
		oCell.addContent();
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		

		
		
		// define template for footer area
//		
//		var oFMatrix = new sap.ui.commons.layout.MatrixLayout({
//			layoutFixed : true,
//			width : '100%',
//			widths : ['100%', 'auto', '15%'] 
//
//			
//		});
//		
//		var handleSelect = function(oEvent){
//			alert("process");
//		};

		// Create a menu bar instance
	//	var oMenuBar = new sap.ui.commons.MenuBar({design:sap.ui.commons.MenuBarDesign.Standard }).removeStyleClass("sapUiMnuBarItm").addStyleClass("MenuCfg");
		// Create two main menu items for the menubar - for which you define subitems lateron
//		var oMenuBarItem1 = new sap.ui.commons.MenuItem({text:"Contact Us"});
//		oMenuBarItem1.attachSelect(handleSelect);
//		oMenuBar.addItem(oMenuBarItem1);
//		var oMenuBarItem2 = new sap.ui.commons.MenuItem({text:"Site Map"});
//		oMenuBarItem2.attachSelect(handleSelect);
//		oMenuBar.addItem(oMenuBarItem2);
//		var oMenuBarItem3 = new sap.ui.commons.MenuItem({text:"Error/Bug"});
//		oMenuBarItem3.attachSelect(handleSelect);
//		oMenuBar.addItem(oMenuBarItem3);
		
		
//		var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
//		var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell();
//		oCell1.addContent();
//		oRow.addCell(oCell1);
//		var oCell2 = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Left"});
//		oRow.addCell(oCell2);
//	//	oCell2.addContent(oMenuBar);
//		var oCell3 = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Left"}).addStyleClass("surveyGlobalCell3");
//		oRow.addCell(oCell3);
//		oCell3.addContent();
//		
//		oFMatrix.addRow(oRow);
////
//		
//		
//		
//		
		//var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"16px"});
		//var oCell = new sap.ui.commons.layout.MatrixLayoutCell().addStyleClass("surveyTemplateFooter");
		//oCell.addContent();
		//oRow.addCell(oCell);
	//	oMatrix.addRow(oRow);
		// end of footer area
		//return oMatrix;
		
		// Create a BorderLayout instance
		
		var oMat = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : false,
			width:(document.documentElement.clientWidth-4).toString()+'px' , 
			//height:"20px",
		//	height:(window.innerHeight).toString()+'px'
				layoutData : new sap.ui.layout.GridData({
					span : "L12"
				})
		});
		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"9px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Right"}).addStyleClass("surveyTemplateSiteToMenuBar");
		oCell.addContent(siteMenuBarTop);
		oRow.addCell(oCell);
		oMat.addRow(oRow);
		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"80px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell().addStyleClass("surveyTemplateBannerBar");
		oCell.addContent( );
		oRow.addCell(oCell);
		oMat.addRow(oRow);
		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"14px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top"});
		oCell.addContent(siteMenuBar);
		oRow.addCell(oCell);
		oMat.addRow(oRow);
		
		var oRowbreadcum = new sap.ui.commons.layout.MatrixLayoutRow({height:"12px"});
		var oCellBreadcum = new sap.ui.commons.layout.MatrixLayoutCell().addStyleClass("surveyTemplateSiteBar");
		oCellBreadcum.addContent(oNavigationBar1);
		oRowbreadcum.addCell(oCellBreadcum);
		
		oMat.addRow(oRowbreadcum);
		
		
		var oMatB = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : false,
			width:(document.documentElement.clientWidth-50).toString()+'px', 
			height:"10px",
			layoutData : new sap.ui.layout.GridData({
				span : "L12"
			})

			
		});
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell().addStyleClass("surveyTemplateFooter");
		oCell.addContent(new sap.m.Label({text:"hi"}));
		oRow.addCell(oCell);
		oMatB.addRow(oRow);
		
		
		/// trying grid layout 
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : false,
			width:(document.documentElement.clientWidth-8).toString()+'px', 
			height:(document.documentElement.clientHeight-216).toString()+'px',
			layoutData : new sap.ui.layout.GridData({
				span : "L12"
			})
			
		}).addStyleClass("mainMatrix");
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"100%"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oCell.addContent(new sap.m.Shell( { height:"50%",
			app : this.app
		}));
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		var arr = new Array();
		var  oGridForm = new sap.ui.layout.Grid({
			hSpacing: 0,
			vSpacing: 0, 
			width:(document.documentElement.clientWidth-4).toString()+'px',
			height:(document.documentElement.clientHeight-300).toString()+'px',
			content: [oMat,oMatrix]
		});
		//arr.push(oGridForm,oMatB);
		//return oGridForm;
		// end of grid layout
		var oContainer = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : false,
			width:(document.documentElement.clientWidth-1).toString()+'px' ,  
			height:(document.documentElement.clientHeight-150).toString()+'px',

		}).addStyleClass("oContainer"); 
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"405px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oCell.addContent(oGridForm);
		oRow.addCell(oCell);
		oContainer.addRow(oRow);
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"13px"});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell().addStyleClass("buttom");
		oCell.addContent(new sap.m.Label({text:"Page Buttom Bar Here"}));
		oRow.addCell(oCell);
		oContainer.addRow(oRow);
		return oContainer;
	}

});
