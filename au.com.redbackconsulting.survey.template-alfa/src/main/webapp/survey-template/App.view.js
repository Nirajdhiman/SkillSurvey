sap.ui.jsview("survey-template.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.App
	*/ 
	getControllerName : function() {
		return "survey-template.App";
	},
   
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.App
	*/ 
	createContent : function(oController) {
		
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : false,
			width:'100%',
		    height:'100%'
		
			
		}).addStyleClass("matrix");
		
		this.app = new sap.m.App();
		
		var workSetsItems=this.createNavigationShellItems();
		oController.setSelectedLeftPaneModel("profileHome");
		
//		
//		// designing menu bar 
//		var oSubMenuBarItemTemplate =		new sap.ui.commons.MenuItem({
//			id : "id", // sap.ui.core.ID
//			enabled : true, // boolean
//			visible : true, // boolean
//			startsSection : false, // boolean
//			text:"{mainmenumodel>label}",
//			icon : '', // sap.ui.core.URI
//			tooltip : undefined, // sap.ui.core.TooltipBase
//			customData : [ new sap.ui.core.CustomData({
////				id : "id1", // sap.ui.core.ID
//				key : 'key', // string
//				value : "{mainmenumodel>key}", // any
//				writeToDom : false, // boolean, since 1.9.0
//				tooltip : undefined, // sap.ui.core.TooltipBase
//				customData : []
//			// sap.ui.core.CustomData
//			}) ], // sap.ui.core.CustomData
//			select : oController.mainmenuSelectHandler
//				 
//		});
//
//		
//	//	var oSubMenuBarItemTemplate =new sap.ui.commons.MenuItem ({text:"{mainmenumodel>label}"});
//		var oSubMenu = new sap.ui.commons.Menu({items : {path : "mainmenumodel>submenu", template : oSubMenuBarItemTemplate}});
//		var oMenuBarItemtemplate = new sap.ui.commons.MenuItem ({text:"{mainmenumodel>label}"});
//		oMenuBarItemtemplate.setSubmenu(oSubMenu);
//		//oMenuBarItemtemplate.attachBrowserEvent("mouseover", function (evt){alert ( "abc");}, this);
//		
//		
//		 	var oMenuBar = new sap.ui.commons.MenuBar({items : {path : "mainmenumodel>/MenuItems", template : oMenuBarItemtemplate}});
//		 	
//		 	var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
//			var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
//			oCell.addContent(oMenuBar);
//			oRow.addCell(oCell);
//			oMatrix.addRow(oRow);
//		 	// End of menu bar
//			//breadcrumb button
//
			var oBtn =  new sap.ui.commons.Button({
//				id : "id", // sap.ui.core.ID
				text : '{breadcummodel>label}', // string
				enabled : '{breadcummodel>enabled}', // boolean
				visible : true, // boolean
				width : undefined, // sap.ui.core.CSSSize
				helpId : '', // string
				icon : '', // sap.ui.core.URI
				iconHovered : '', // sap.ui.core.URI
				iconSelected : '', // sap.ui.core.URI
				iconFirst : true, // boolean
				height : undefined, // sap.ui.core.CSSSize
				styled : true, // boolean
				lite : true, // boolean
				style : sap.ui.commons.ButtonStyle.Default, // sap.ui.commons.ButtonStyle
				tooltip : undefined, // sap.ui.core.TooltipBase
				customData : [ new sap.ui.core.CustomData({
//					id : "id1", // sap.ui.core.ID
					key : 'key', // string
					value : '{breadcummodel>key}', // any
					writeToDom : false, // boolean, since 1.9.0
					tooltip : undefined, // sap.ui.core.TooltipBase
					customData : []
				// sap.ui.core.CustomData
				}) ], // sap.ui.core.CustomData
				ariaDescribedBy : [], // sap.ui.core.Control
				ariaLabelledBy : [], // sap.ui.core.Control
				press : oController.topmenuPressHandler
//				press : [ function(oEvent) {
//					var control = oEvent.getSource();
//				}, this ]
			});
			
			var oLayout = new sap.ui.commons.layout.HorizontalLayout({content : {path : "breadcummodel>/Items/", template : oBtn}});
		//	var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
//			var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
//			oCell.addContent(oLayout);
//			oRow.addCell(oCell);
//			oMatrix.addRow(oRow);
//			//end of breadcrumb
//		 	///////////////////////
//		var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
//		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
//		oCell.addContent(this.app);
//		oRow.addCell(oCell);
//		oMatrix.addRow(oRow);
//		
//		// design bottom bar 
//		var oBtn =  new sap.ui.commons.Button({
////			id : "id", // sap.ui.core.ID
//			text : '{footermodel>label}', // string
//			enabled : true, // boolean
//			visible : true, // boolean
//			width : undefined, // sap.ui.core.CSSSize
//			helpId : '', // string
//			icon : '', // sap.ui.core.URI
//			iconHovered : '', // sap.ui.core.URI
//			iconSelected : '', // sap.ui.core.URI
//			iconFirst : true, // boolean
//			height : undefined, // sap.ui.core.CSSSize
//			styled : true, // boolean
//			lite : true, // boolean
//			style : sap.ui.commons.ButtonStyle.Default, // sap.ui.commons.ButtonStyle
//			tooltip : undefined, // sap.ui.core.TooltipBase
//			customData : [ new sap.ui.core.CustomData({
////				id : "id1", // sap.ui.core.ID
//				key : 'key', // string
//				value : '{footermodel>key}', // any
//				writeToDom : false, // boolean, since 1.9.0
//				tooltip : undefined, // sap.ui.core.TooltipBase
//				customData : []
//			}) ], // sap.ui.core.CustomData
//			ariaDescribedBy : [], // sap.ui.core.Control
//			ariaLabelledBy : [], // sap.ui.core.Control
//			press : oController.topmenuPressHandler
////			press : [ function(oEvent) {
////				var control = oEvent.getSource();
////			}, this ]
//		});
//		
//		var oLayout = new sap.ui.commons.layout.HorizontalLayout({content : {path : "footermodel>/Items/", template : oBtn}});
//
//		var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
//		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Right"});
//		oCell.addContent(oLayout);
//		oRow.addCell(oCell);
//		oMatrix.addRow(oRow);
//		// end of bottm bar////
//		var h1 = new sap.ui.unified.ShellHeadItem({
//			icon : "sap-icon://log"
//		});
//		var h2 = new sap.ui.unified.ShellHeadItem({
//			icon : "sap-icon://home"
//		});
//		var h3 = new sap.ui.unified.ShellHeadItem({
//			icon : "sap-icon://hint"
//		});
		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:'20px'});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({width:'100%'});
		oCell.addContent(oLayout);//.setColSpan(2);
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:'400px'});
		//var oCell = new sap.ui.commons.layout.MatrixLayoutCell({width:"200px",hAlign:"Center",vAlign:"Top"}).addStyleClass("left");
		//oCell.addContent(this.createLeftPaneMenu());
		//oRow.addCell(oCell);
		//var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:'420px'});
		// right cell content
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oCell.addContent(this.app);
		oRow.addCell(oCell);
		
		oMatrix.addRow(oRow);
		// footer row
		var oBtn =  new sap.ui.commons.Button({
//			id : "id", // sap.ui.core.ID
			text : '{footermodel>label}', // string
			enabled : true, // boolean
			visible : true, // boolean
			width : undefined, // sap.ui.core.CSSSize
			helpId : '', // string
			icon : '', // sap.ui.core.URI
			iconHovered : '', // sap.ui.core.URI
			iconSelected : '', // sap.ui.core.URI
			iconFirst : true, // boolean
			height : undefined, // sap.ui.core.CSSSize
			styled : true, // boolean
			lite : true, // boolean
		//	style : sap.ui.commons.ButtonStyle.Default, // sap.ui.commons.ButtonStyle
			tooltip : undefined, // sap.ui.core.TooltipBase
			customData : [ new sap.ui.core.CustomData({
//				id : "id1", // sap.ui.core.ID
				key : 'key', // string
				value : '{footermodel>key}', // any
				writeToDom : false, // boolean, since 1.9.0
				tooltip : undefined, // sap.ui.core.TooltipBase
				customData : []
			// sap.ui.core.CustomData
			}) ], // sap.ui.core.CustomData
			ariaDescribedBy : [], // sap.ui.core.Control
			ariaLabelledBy : [], // sap.ui.core.Control
			press : oController.topmenuPressHandler
//			press : [ function(oEvent) {
//				var control = oEvent.getSource();
//			}, this ]
		}).addStyleClass("footerBtn");
		
		var oLayout = new sap.ui.commons.layout.HorizontalLayout({content : {path : "footermodel>/Items/", template : oBtn}});

		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:'30px'});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Center"});//.setColSpan(2);
		//oCell.addContent(new sap.ui.commons.Label({text:"new footer"})).addStyleClass("footer");
		oCell.addContent(oLayout).addStyleClass("footer");
		oRow.addCell(oCell);
		//end of footer
		oMatrix.addRow(oRow);
		
		var oShell = new sap.ui.ux3.Shell("myShell", {
			appTitle: "SAPUI5 Gold Reflection Shell",
			appIcon: "images/SAPLogo.gif",
			appIconTooltip: "SAP logo",
			showLogoutButton: true,
			showSearchTool: false,
			showInspectorTool: false,
			showFeederTool: false,
			showTools:false,
			showPane:false,
			worksetItems:workSetsItems,
		//	paneBarItems: [ new sap.ui.core.Item("PI_Date",{key:"pi_date",text:"date"}),
			//                new sap.ui.core.Item("PI_Browser",{key:"pi_browser",text:"browser"})],
			content: oMatrix,
			toolPopups: [new sap.ui.ux3.ToolPopup("contactTool",{
										title: "New Contact",
										tooltip: "Create New Contact",
										icon: "images/Contact_regular.png",
										iconHover: "images/Contact_hover.png",
										content:[new sap.ui.commons.TextView({text:"Here could be a contact sheet."})],
										buttons: [new sap.ui.commons.Button("cancelContactButton", {text:"Cancel",press:function(oEvent){
											sap.ui.getCore().byId("contactTool").close();
										}})]
									})],
			headerItems: [new sap.ui.commons.TextView({text:"User Name",tooltip:"U.Name"}),
			              new sap.ui.commons.Button({text:"Personalize",tooltip:"Personalize",press:function(oEvent){alert("Here could open an personalize dialog");}}),
										new sap.ui.commons.MenuButton({
											text: "Help",
											tooltip: "Help Menu",
											menu: new sap.ui.commons.Menu("menu1",{items:[
												new sap.ui.commons.MenuItem("menuitem1",{text:"Help"}),
												new sap.ui.commons.MenuItem("menuitem2",{text:"Report Incident"}),
												new sap.ui.commons.MenuItem("menuitem3",{text:"About"})]})
										})],
			worksetItemSelected: function(oEvent){
				debugger;
				//var arr = oEvent.getParameter("id").split('-');
				//var key = arr[0];
				oController.mainmenuSelectHandler(oEvent.getParameter("id"));
//				var oShell = oEvent.oSource;
//				switch (sId) {
//				case "WI_home":
//					oShell.setContent(oHTML);
//					break;
//				case "WI_1_1":
//					oShell.setContent(oText);
//					break;
//				case "WI_1_2":
//					oShell.setContent(oButton);
//					break;
//				case "WI_1_3":
//					oShell.setContent(oImage);
//					break;
//				case "WI_API":
//					oShell.setContent(oAPI);
//					break;
//				default:
//					break;
//				}
			},
			paneBarItemSelected: function(oEvent){
				var sKey = oEvent.getParameter("key");
				var oShell = oEvent.oSource;
				switch (sKey) {
				case "pi_date":
					var oDate = new Date();
					oShell.setPaneContent(new sap.ui.commons.TextView({text:oDate.toLocaleString()}), true);
					break;
				case "pi_browser":
					oShell.setPaneContent(new sap.ui.commons.TextView({text:"You browser provides the following information:\n"+navigator.userAgent}), true);
					break;
				default:
					break;
				}
			},
			logout:function(){
				alert("Logout Button has been clicked.\nThe application can now do whatever is required.");
			},
		 	search:function(oEvent){
		 		alert("Search triggered: " + oEvent.getParameter("text"));
		 	},
		 	feedSubmit:function(oEvent){
		 		alert("Feed entry submitted: " + oEvent.getParameter("text"));
		 	},
		 	paneClosed : function(oEvent) {
		 	    alert("Pane has been closed: " + oEvent.getParameter("id"));
		 	}
		});
		oShell.destroyWorksetItems();
		return oShell;
	},
	createNavigationShellItems:function(){
		//var json =[{root:"mysurvey",leftItems:[{lebal:"Survey-Mandatory",id:"survey-mandatory"}]},{root:"myreport",leftItems:[{lebal:"Report-Mandatory",id:"report-mandatory"}]}];
		//var model = new sap.ui.model.json.JSONModel();
	//	model.setData(json, false);
	//	sap.ui.getCore().setModel(model,"left");
		var its=[];
		var json ={"MenuItems" : [{"label": "Home",  "key" :"profileHome","submenu" : [{"label": "Home","isDefault":true, "key": "Home-Master"}]},{"label": "My Survey",  "key" :"mysurvey", "icon": "images/icons/mysurvey.png", "submenu" : [{"label": "Mandatory","isDefault":true, "key": "Survey-Mandatory"},{"label": "Highly Desirable","isDefault":false, "key": "Survey-HighlyDesirable"}]}, {"label" : "My Report", "key" : "myreport", "icon": "images/icons/myreport.png" , "submenu" : [{"label": "Mandatory", "isDefault":true,"key" : "Report-Mandatory"}, {"label": "Highly Desirable", "isDefault":false,"key" : "Report-HighlyDesirable"},{"label": "Skill Recognition", "isDefault":true,"key" : "Report-SkillRecogniton"},]} ]};
		var model = new sap.ui.model.json.JSONModel();
		model.setData(json, false);
		sap.ui.getCore().setModel(model,"menu");
		
		debugger;
		var items = sap.ui.getCore().getModel("menu").oData.MenuItems;
		for(var it in items){
			its.push(new sap.ui.ux3.NavigationItem({id:items[it].key+'-navItems',key:items[it].key,text:items[it].label,subItems:this.createSelectedMenuBar(items[it].submenu)}));
		}
		
		// setting initial left pane items;
		
		
		// end of setting;
		return its;
	},
	createSelectedMenuBar:function(items){
		var arr =[];
		for(var it in items){
			arr.push( new sap.ui.ux3.NavigationItem({id:items[it].key+'-navItems',key:items[it].key,text:items[it].label}));//			oSegmentedButton.addButton(new sap.ui.commons.Button({text:items[it].label}));
		}
		return arr;
	},
	createLeftPaneMenu:function(){
		
		var lbl = new sap.ui.commons.Label({text:"{LeftModel>label}"});
		
		var c = sap.ui.commons.layout;
		var oLeftCell = new c.MatrixLayoutCell({hAlign : c.HAlign.End, vAlign : c.VAlign.Top, content:[lbl]});
	//	var oRightCell = new c.MatrixLayoutCell({hAlign : c.HAlign.Begin, vAlign : c.VAlign.Top, content:[oTextView, oLink]});
	//	oRightCell.addStyleClass("qvvalue");

		var oRow = new c.MatrixLayoutRow({cells:[oLeftCell]});

		var oContent = new c.MatrixLayout();
		oContent.bindAggregation("rows", "LeftModel>/", oRow);
//		
//		var c = sap.ui.commons;
//		var oRow = new c.layout.MatrixLayoutRow();
//		    var oCell = new c.layout.MatrixLayout({content:lbl});
//	    oRow.addCell(oCell);
//      	var oContent = new c.layout.MatrixLayout("context",{
//			layoutFixed : true,
//		});
//		oContent.bindAggregation("rows", "LeftModel>/", oRow);

	 return oContent;

	},
	

});
