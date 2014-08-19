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
		
		
		function openConfirm() {
			// open a simple confirm box
			sap.ui.commons.MessageBox.confirm("Your online session is about to be timed out.Continue to press OK and logout to press Cancel", fnCallbackConfirm, "Professional Workforce - Quality Service Session Timeout Alert");
		}
		function fnCallbackConfirm(bResult) {
			alert("Result returned to fnCallbackConfirm: " + bResult);
			if(bResult==false){
				window.location = 'logout.jsp';
			}
		}
		

		function startSessionCountDown(){
			//alert("hie");
			debugger;
			var today=new Date();
			var h=parseInt(today.getHours());
			var m=parseInt(today.getMinutes());

			 
			var endTime  = (h*60)+m;
			//alert(endTime);
			if((endTime-startTime)==6){
				if(openFlag){
					//displayListener(true);
					openFlag =false;
					startTime=endTime;
					//alert(startTime);
					openConfirm();
					// timeout();
				}else{
					//displayListener(false);
					openFlag =true;
					startTime=endTime;
				} 	
		}
		
		var t = setTimeout(function(){startSessionCountDown()},5000);
			};
			
			
			function timeout()
			{
			var agree=confirm("Your online session is about to be timed out");
			if (!agree){
				window.location = 'logout.jsp';
				
			}
			else{
			
			}
			
			
			}
			


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
		
		startSessionCountDown();
		
	//	oController.loadMenuModel(oController);
		//oController.callForLoggedInUserName();
//		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
//			layoutFixed : false,
//			width:'100%',
//		    height:config.getMainControllerHeight().toString()+'px'
//		
//			
//		}).addStyleClass("matrix");
//		
//		this.app = new sap.m.App();
		
	//	var workSetsItems=this.createNavigationShellItems();
	//	/oController.setSelectedLeftPaneModel("profileHome");
	
//		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:config.getContentHeight().toString()+'px'});
//		
//		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top"}).setColSpan(2);
//		oCell.addContent(this.app);
//		oRow.addCell(oCell);
//		
//		oMatrix.addRow(oRow);
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
			 press:function(evt){
				   debugger;
				   var bus = sap.ui.getCore().getEventBus();
					bus.publish("nav", "fromFooterBar", {
						id : evt.getSource().data("key"),

					});
			   }
			
		}).addStyleClass("footerBtn");
		
		var oLayout = new sap.ui.commons.layout.HorizontalLayout({content : {path : "footermodel>/Items/", template : oBtn}});

		
//		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:config.getFooterHeight().toString()+'px'}).addStyleClass("footer");
//		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Center"});//.setColSpan(2);
//		oCell.addContent(this.toopPoUpApp());
//		oRow.addCell(oCell);
//		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:"Center"});
//		oCell.addContent(oLayout);
//		oRow.addCell(oCell);
//		//end of footer
//		oMatrix.addRow(oRow);
		

		
		var oShell = new sap.ui.ux3.Shell( {
			id:config.getShellId(),
			appTitle:"{mBundle>appTitle}",// "Professional Workforce - Quality Service",
			appIcon: "config/images/defencelogo.png",
			appIconTooltip: "SAP logo",
			showLogoutButton: true,
			showSearchTool: false,
			showInspectorTool: false,
			showFeederTool: false,
			showTools:true,
			showPane:true,
			fullHeightContent:true,
		//	worksetItems:workSetsItems,
			paneBarItems: [ new sap.ui.core.Item("PI_ContactUs",{key:"ContantUs",text:"Contact Us"}),
			              ],
		//	content: oMatrix,
		
			headerItems: [new sap.ui.commons.TextView({id:"appUserName",text:"",tooltip:""}),
			              new sap.ui.commons.Button({text:"Profile",tooltip:"User Profile",press:function(oEvent){
			            	  debugger;
			            	  config.profieInitial=false;
			            	//  templateHandler.setProfileExitButtonVisibility(true);
			            	  var bus = sap.ui.getCore().getEventBus();
								bus.publish("nav", "toProfile", {
									id : "UserProfile",
									data:{action:"get"}

								});	
			            	 
			            	  
			              }}),
			              new sap.ui.commons.Button({text:"Help",tooltip:"Help",press:function(oEvent){
			            	  debugger;
			            	  oController.createHelpOverlayContainer();
			            	//  var bus = sap.ui.getCore().getEventBus();
							//	bus.publish("nav", "to", {
							//		id : "Help",
									//data:{action:"get"}

							//	});
			            	  
			              }})
	//									new sap.ui.commons.MenuButton({
//											text: "Help",
//											tooltip: "Help Menu",
//											menu: new sap.ui.commons.Menu("menu1",{items:[
//												new sap.ui.commons.MenuItem({id:"Help_Items",text:"Help"}),
//												new sap.ui.commons.MenuItem({id:"AboutUs_Items",text:"About"})]
//											,
//											itemSelect :function(evt){
//												debugger;
//											//	var arr = evt.getParameter("item").getId().split("_");
//												//var bus = sap.ui.getCore().getEventBus();
//											//	bus.publish("nav", "to", {
//												//	id : arr[0]
//											//	});
//												//var home = config.getObjectById("home-matrix");
//												//home.setWidth(home.getWidth()-200);
//											//	oControl= config.getObjectById(config.getShellId());
//												//oControl.setShowPane(true);
//												//oControl.setPaneContent(new sap.ui.commons.TextView({text:"You browser provides the following information:"}),true);
//											}
//											})
										
	//									})
		],
			worksetItemSelected: function(oEvent){
				debugger;
				
				oController.mainmenuSelectHandler(oEvent.getParameter("id"));
			
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
				 function fnCallBackConfirm(bResult){
						if(bResult){
							
						}
						
					}
					sap.ui.commons.MessageBox.confirm("Do you want to logout!",fnCallBackConfirm,"Professional Workforce - Quality Service");
						
		
			},
		 	search:function(oEvent){
		 		alert("Search triggered: " + oEvent.getParameter("text"));
		 	},
		 	feedSubmit:function(oEvent){
		 		alert("Feed entry submitted: " + oEvent.getParameter("text"));
		 	},
		 	paneClosed : function(oEvent) {
		 	   // alert("Pane has been closed: " + oEvent.getParameter("id"));
		 	}
		});
		this.toolPoUpApp();
		//  startSessionCountDown();
		return oShell;
		
	},
toolPoUpApp:function(){
		var oNotiBar = new sap.ui.ux3.NotificationBar({
			id:"notificationBar",
			display : displayListener,
			visibleStatus : "None",
			resizeEnabled : false,
			
		});
		 oNotiBar.placeAt("footerBar");
	}

});
