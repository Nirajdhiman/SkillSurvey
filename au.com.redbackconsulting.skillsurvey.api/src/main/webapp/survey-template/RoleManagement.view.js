sap.ui.jsview("survey-template.RoleManagement", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.RoleManagement
	*/ 
	getControllerName : function() {
		return "survey-template.RoleManagement";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.RoleManagement
	*/ 
	createContent : function(oController) {
		var json =[
		           {"roleName":"user","roleDescription":"General User"},
		           {"roleName":"administrator","roleDescription":"Administrator"},
		           {"roleName":"supervisor","roleDescription":"Supervisor"}
		           ];
		
			 var oModel =  sap.ui.getCore().getModel("roleManagementModel");
			 if(oModel==null){
				 oModel = new sap.ui.model.json.JSONModel();
				 oModel.setDefaultBindingMode("TwoWay");
			 }
			 oModel.setData(json, false);
			 sap.ui.getCore().setModel(oModel,"roleManagementModel");
		
		 var oModel =  sap.ui.getCore().getModel("roleManagementModel");
		 sap.ui.getCore().setModel(oModel);
		 var oMatrix = new sap.ui.commons.layout.MatrixLayout({
				layoutFixed : false,
				width:config.getDocWidth().toString()+'px',
				height:config.getMatrixHeight().toString()+'px'
				
			}).addStyleClass("userManagementMatrix");
			
		
		 var rowCount = parseInt( config.getMatrixHeight()/32.5);
	//	 alert(rowCount);
		 var oQuestionTable = new sap.ui.table.Table(
					{
						
						visibleRowCount : 5,//config.getRowCount(),
						firstVisibleRow : 3,
						selectionMode : sap.ui.table.SelectionMode.Single,
						navigationMode : sap.ui.table.NavigationMode.Paginator,
						//fixedColumnCount: 2,
						width :'700px',
						columnHeaderVisible :true,
						toolbar:new sap.ui.commons.Toolbar({items: [ 
						                                     	    new sap.ui.commons.Button({
						                                    	    	tooltip: "Add",
						                                    	    	text:"Add",
						                                    	    	icon:"sap-icon://add",
						                                    	    	press: function(oEvent) {
						                                    	    		var bus = sap.ui.getCore().getEventBus();
						                            						bus.publish("nav", "fromUserManagement", {
						                            							id : "Role",
						                            							context:{data:{},action:"create"}

						                            						});
						                                    	    	}
						                                    	    }).addStyleClass("commonButtonUserManagementAdd")
						                                    	]})
						
					});
			
			oQuestionTable.addColumn(new sap.ui.table.Column({
				width : "300px",
				sortProperty: "roleName", 
				filterProperty:"roleName",
				label : new sap.ui.commons.Label({
					text : "Roles",
				}),
				template : new sap.ui.commons.Label({width:'100%',
					text:"{roleName}",
				}).addStyleClass("userManagementTblText"),
				hAlign : "Left",
				vAlign : "Middle"
			}));
			oQuestionTable.addColumn(new sap.ui.table.Column({
				width : "40px",
				label : new sap.ui.commons.Label({
					text : "",
				}),
				template : new sap.ui.commons.Button({
					icon:"sap-icon://hint",
					tooltip:"View",
					press:function(evt){
						var bus = sap.ui.getCore().getEventBus();
						bus.publish("nav", "fromUserManagement", {
							id : "Role",
							context:{data:this.getBindingContext().getObject(),action:"view"}

						});
					}}).addStyleClass("commonButtonRoleManagement"),
				hAlign : "Center",
				vAlign : "Middle"
			}));
			oQuestionTable.addColumn(new sap.ui.table.Column({
				width : "40px",
				label : new sap.ui.commons.Label({
					text : "",
				}),
				template : new sap.ui.commons.Button({
					icon:"sap-icon://edit",
					tooltip:"Edit",
					hAlign : "Center",
					press:function(evt){
						var bus = sap.ui.getCore().getEventBus();
						bus.publish("nav", "fromUserManagement", {
							id : "Role",
							context:{data:this.getBindingContext().getObject(),action:"edit"}

						});
					}}).addStyleClass("commonButtonRoleManagement"),
				hAlign : "Center",
				vAlign : "Middle"
			}));
			oQuestionTable.addColumn(new sap.ui.table.Column({
				width : "40px",
				label : new sap.ui.commons.Label({
					text : "",
				}),
				template : new sap.ui.commons.Button({
					tooltip:"Delete",
					icon:"sap-icon://delete",
					press:function(){
						var bus = sap.ui.getCore().getEventBus();
						bus.publish("nav", "fromUserManagement", {
							id : "Role",
							context:{data:this.getBindingContext().getObject(),action:"delete"}

						});
					}}).addStyleClass("commonButtonRoleManagement"),
				hAlign : "Center",
				vAlign : "Middle"
			}));
			// Create a model and bind the table rows to this model
			
			
			
			 
			 

			oQuestionTable.setModel(sap.ui.getCore().getModel(
					"roleManagementModel"));
			oQuestionTable.bindRows("/");
		 
			var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
			
			var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top"}).addStyleClass("rolewManagementLeftPannel");
			
			oCell.addContent(oQuestionTable);
			oRow.addCell(oCell);
			oMatrix.addRow(oRow);

			var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
			var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
				id:"roleManagementRightPannel",				
				vAlign:"Top",
				}).addStyleClass("userManagementRightPannel");
			oCell.addContent(new sap.ui.commons.Label({text:"Welcome to role management portal"}).addStyleClass("userManagementWelcomeText"));
			oRow.addCell(oCell);
			oMatrix.addRow(oRow);
			return oMatrix;

	}

});
