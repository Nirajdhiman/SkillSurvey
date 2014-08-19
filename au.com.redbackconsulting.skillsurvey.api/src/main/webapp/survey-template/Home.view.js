function displayListener(bShow) {
			//var bShow = oEvent.getParameter("show");
			var oNotiBar = config.getObjectById("notificationBar");
			if (bShow) {
				var sStatus = sap.ui.ux3.NotificationBarStatus.Default;
				oNotiBar.setVisibleStatus(sStatus);
			} else {
				var sStatus = sap.ui.ux3.NotificationBarStatus.None;
				oNotiBar.setVisibleStatus(sStatus);
			}
		};
		
		///
		var today=new Date();
	    var h=parseInt(today.getHours());
	    var m=parseInt(today.getMinutes());
	  		
	    var startTime = (h*60)+m;

		///
		var openFlag=true;
	
		function startSessionCountDown(){
			//alert("hie");
			debugger;
			var today=new Date();
			var h=parseInt(today.getHours());
			var m=parseInt(today.getMinutes());
			 
			var endTime  = (h*60)+m;
			//alert(endTime);
			if((endTime-startTime)==1){
				if(openFlag){
					displayListener(true);
					openFlag =false;
					startTime=endTime;
				}else{
					displayListener(false);
					openFlag =true;
					startTime=endTime;
				} 	
		}
		
		var t = setTimeout(function(){startSessionCountDown()},500);
			};
sap.ui.jsview("survey-template.Home", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.Home
	*/ 
	getControllerName : function() {
		return "survey-template.Home";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.Home
	*/ 
	createContent : function(oController) {
		oController.loadMenuModel();
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : false,
			width:'100%',
		    height:config.getMainControllerHeight().toString()+'px'
		
			
		}).addStyleClass("matrix");
		
	
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:config.getContentHeight().toString()+'px'});
		
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top"}).setColSpan(2);;
		oCell.addContent(config.getApp());
		oRow.addCell(oCell);
		
		oMatrix.addRow(oRow);
		// footer row
		var oBtn =  new sap.ui.commons.Button({
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
			tooltip : undefined, // sap.ui.core.TooltipBase
			customData : [ new sap.ui.core.CustomData({
				
				key : 'key', // string
				value : '{footermodel>key}', // any
				writeToDom : false, // boolean, since 1.9.0
				tooltip : undefined, // sap.ui.core.TooltipBase
				customData : []
			
			}) ], 
			ariaDescribedBy : [], // sap.ui.core.Control
			ariaLabelledBy : [], // sap.ui.core.Control
		   press:function(evt){
			   debugger;
			   var bus = sap.ui.getCore().getEventBus();
				bus.publish("nav", "fromFooterBar", {
					id : evt.getSource().data("key"),

				});
		   }
		}).addStyleClass("footerBtn");
		
		var oLayout = new sap.ui.commons.layout.HorizontalLayout({content : {path : "footermodel>/Items/", template : oBtn}});

		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:config.getFooterHeight().toString()+'px'}).addStyleClass("footer");
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Center"});//.setColSpan(2);
		oCell.addContent(this.toopPoUpApp());
		oRow.addCell(oCell);
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Center"});
		oCell.addContent(oLayout);
		oRow.addCell(oCell);
		//end of footer
		oMatrix.addRow(oRow);
		
		var oShell = new sap.ui.ux3.Shell( {
			id:config.getShellId(),
			appTitle: "SAPUI5 Gold Reflection Shell",
			//appIcon: "images/SAPLogo.gif",
			appIconTooltip: "SAP logo",
			showLogoutButton: true,
			showSearchTool: false,
			showInspectorTool: false,
			showFeederTool: false,
			showTools:false,
			showPane:false,
			content: oMatrix,
			
			headerItems: [new sap.ui.commons.TextView({text:"User Name",tooltip:"U.Name"}),
			              new sap.ui.commons.Button({text:"Profile",tooltip:"User Profile",press:function(oEvent){
			            	  debugger;
			            	  var oProfileOverlay = sap.ui.getCore().byId("userProfileOverlay");
			            	  if(oProfileOverlay==null){
			            		  oController.getProfilePageContent();
			            	  }else{
			            		  if(!oProfileOverlay.isOpen()){
			            			  oProfileOverlay.open();
									}
			            	  }
			            	 
			            	  
			              }}),
										new sap.ui.commons.MenuButton({
											text: "Help",
											tooltip: "Help Menu",
											menu: new sap.ui.commons.Menu("menu1",{items:[
												new sap.ui.commons.MenuItem({id:"Help",text:"Help"}),
												new sap.ui.commons.MenuItem({id:"AboutUs",text:"About"})]
											,
											itemSelect :function(evt){
												debugger;
												var x = evt.getSource().getId();
												var o =90;
											}
											})
										
										})],
			worksetItemSelected: function(oEvent){
				debugger;
				//oController.mainmenuSelectHandler(oEvent.getParameter("id"));
			
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
	//	oShell.addWorksetItem(oWorksetItem)
	//  startSessionCountDown();
		return oShell;
		
	},

	createNavigationShellItems:function(){
		var its=[];
		var json ={"MenuItems":[{"label":"Home","key":"profileHome","submenu":[{"label":"Home","isDefault":true,"key":"Home-Master"}]},{"label":"My Survey","key":"mysurvey","icon":"images/icons/mysurvey.png","submenu":[{"label":"Mandatory","isDefault":true,"key":"mysurvey-Mandatory"},{"label":"Highly Desirable","isDefault":true,"key":"mysurvey-HighlyDesirable"},{"label":"Desirable","isDefault":true,"key":"mysurvey-Desirable"}]},{"label":"My Report","key":"myreport","icon":"images/icons/myreport.png","submenu":[{"label":"Mandatory","isDefault":true,"key":"myreport-Mandatory"},{"label":"Highly Desirable","isDefault":false,"key":"myreport-HighlyDesirable"},{"label":"Desirable","isDefault":false,"key":"myreport-Desirable"},{"label":"Skills Compentency Gap","isDefault":true,"key":"myreport-SkillsCompentencyGap"},{"label":"Skills Recognition","isDefault":true,"key":"myreport-SkillsRecognition"}]}]};
		var model = new sap.ui.model.json.JSONModel();
		model.setData(json, false);
		sap.ui.getCore().setModel(model,"menu");
		
		debugger;
		var items = sap.ui.getCore().getModel("menu").oData.MenuItems;
		for(var it in items){
			its.push(new sap.ui.ux3.NavigationItem({id:items[it].key+'-menu',key:items[it].key,text:items[it].label,subItems:this.createSelectedMenuBar(items[it].submenu)}));
		}
		return its;
	},
	createSelectedMenuBar:function(items){
		var arr =[];
		for(var it in items){
			arr.push( new sap.ui.ux3.NavigationItem({id:items[it].key+'-subMenu',key:items[it].key,text:items[it].label}));//			oSegmentedButton.addButton(new sap.ui.commons.Button({text:items[it].label}));
		}
		return arr;
	},
	createLeftPaneMenu:function(){
		
		var lbl = new sap.ui.commons.Label({text:"{LeftModel>label}"});
		
		var c = sap.ui.commons.layout;
		var oLeftCell = new c.MatrixLayoutCell({hAlign : c.HAlign.End, vAlign : c.VAlign.Top, content:[lbl]});
		var oRow = new c.MatrixLayoutRow({cells:[oLeftCell]});

		var oContent = new c.MatrixLayout();
		oContent.bindAggregation("rows", "LeftModel>/", oRow);


	 return oContent;

	},
	toopPoUpApp:function(){
		
		var sText = "Your session going to be expired!\n do you to alive your session then click on this message otherwise leave it";
		var now = (new Date()).toUTCString();
		var oMessage = new sap.ui.core.Message({
			text : sText,
			timestamp : now
		});

		var oNotifier = new sap.ui.ux3.Notifier({
			title : "Alert!",
			messages:[oMessage],
			messageSelected :function(){
				displayListener(false);
			}
		});
		//oNotifier.addMessage(oMessage);

		var oNotiBar = new sap.ui.ux3.NotificationBar({
			id:"notificationBar",
			display : displayListener,
			visibleStatus : "None",
			resizeEnabled : false
		});
		oNotiBar.addStyleClass("sapUiNotificationBarDemokit");
		oNotiBar.addStyleClass("slimNotificationBar");
		oNotiBar.addNotifier(oNotifier);

		//var sStatus = sap.ui.ux3.NotificationBarStatus.Default;
		//oNotiBar1.setVisibleStatus(sStatus);
		return oNotiBar;
	}


});
