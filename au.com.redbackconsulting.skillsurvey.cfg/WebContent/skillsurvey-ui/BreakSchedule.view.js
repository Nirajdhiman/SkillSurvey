sap.ui.jsview("skillsurvey-ui.BreakSchedule", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf scheduler-ui.BreakSchedule
	*/ 
	getControllerName : function() {
		return "skillsurvey-ui.BreakSchedule";
	},
	getViewName:function(){
		return "BreakSchedule";
	},
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf scheduler-ui.BreakSchedule
	*/ 
	createContent : function(oController) {

		 var oTable = new sap.m.Table( {
			growing : false,
			growingThreshold: 2,
			inset : false,
		//	mode: "MultiSelect",
			showUnread : true,
			growingScrollToLoad : false,
			headerToolbar : new sap.m.Toolbar({
				content : [
					
					new sap.m.ToolbarSpacer(),
					new sap.m.Button({
						//icon: "sap-icon://new",
						text:"New Entry",
						enabled:"{auth>/action/isCreate}",
						press : function() {
							
							oAppContext.navTo = "CreateAdministrators";
							oAppContext.isMultiple =false;
							oAppContext.metaDataFlag =false;
							oAppContext.isMetaData = true;
							oAppContext.navFrom="Administrators";
							oAppContext.data = {};
							oAppContext.method = "GET";
							//sap.app.config.actionChainfilter(oAppContext);
						}
					})
				]
			}),
			columns : [
			           new sap.m.Column({
			        	   hAlign : "Left",
			        	   width : "10%",
			        	   header : new sap.m.Label({
			        		   text : "Break Id"
			        	   }),
			        	   demandPopin : true
			           }),
			           new sap.m.Column({
							hAlign : "Left",
							width : "10%",
							header : new sap.m.Label({
								text : "Break Name"
							}),
							demandPopin : true
						}),
			           
				new sap.m.Column({
					hAlign : "Left",
					width : "15%",
					header : new sap.m.Label({
						text : "Company Code"
					}),
					demandPopin : true
				}),
			new sap.m.Column({
					hAlign : "Left",
					width : "10%",
					header : new sap.m.Label({
						text : "Active"
					}),
					demandPopin : true
				}),
				new sap.m.Column({
					hAlign : "Left",
					width : "5%",
					demandPopin : true
				}),
				new sap.m.Column({
					hAlign : "Left",
					width : "5%",
					demandPopin : true
				}),
				new sap.m.Column({
					hAlign : "Left",
					width : "5%",
					demandPopin : true
				}),
//			
				
			]
	
	});
          var template = new sap.m.ColumnListItem({
				//type : "Navigation",
				unread : false,
				//vAlign : "Middle",
				cells : [
				         new sap.m.Label({
				        	 text : "{id}",
				         }),
				         new sap.m.Label({
				        	 text : "{name}",
				         }),
				         new sap.m.Label({
				        	 text : "{coCode}",
				         }),
				         new sap.m.Label({
				        	 text : "{isActive}",
				         }),
				         new sap.m.Button({
								width:"8px",
								icon : "sap-icon://hint",
								enabled:"{auth>/action/isRead}",
								press:function(evt){
									var context =this.getBindingContext().getObject();// BMays@ACECompany.com
									var tModel = sap.ui.getCore().getModel("BreakSchedule");
									tModel.oData.menuData.data = context;
									sap.ui.getCore().setModel(tModel,"BreakSchedule");
									
									var bus = sap.ui.getCore().getEventBus();
									bus.publish("nav", "to", {
										id : "BreakSchedulerOverView",
									});
									
								}
							}),
		                     new sap.m.Button({
								text: "Edit",
								width:"8px",
								icon : "sap-icon://edit",
								enabled:"{auth>/action/isEdit}",
								press:function(evt){
									debugger;
									oAppContext.navTo = "EditBreakScheduler";
									oAppContext.isMultiple =false;
									oAppContext.metaDataFlag =true;
									oAppContext.isMetaData = true;
									oAppContext.navFrom="BreakSchedule";
									oAppContext.data = this.getBindingContext().getObject();
									oAppContext.method = "GET";
									sap.app.config.actionChainfilter(oAppContext);
									
								}
							}),
		                       new sap.m.Button({
								
								enabled:"{auth>/action/isDelete}",
								icon : "sap-icon://delete",
								press:function(evt){
									//var context = this.getBindingContext().getObject();
									//Read Selected Data
								}
							})
//				       
				]
			});
			oTable.setModel(sap.ui.getCore().getModel(this.getViewName()));
			oTable.bindAggregation("items", "/menuData/items/", template);
	

		var oControls = [];
		var iconBar = new sap.m.IconTabBar({
			id : this.createId("detail-tabs"),
			expanded : "{device>isNoPhone}",
			content : oTable
		});

		oControls.push(iconBar);

 		return new sap.m.Page({
			title: "Break-Schedule",
			content: oControls,
			footer : new sap.m.Bar({
				//id : this.createId("detail-footer"),
			})
		});
	}

});