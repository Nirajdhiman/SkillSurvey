sap.ui.jsview("skillsurvey-ui.UocGroupCreate", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skillsurvey.RoleCreate
	*/ 
	getControllerName : function() {
		return "skillsurvey-ui.UocGroupCreate";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skillsurvey.RoleCreate
	*/ 
	createContent : function(oController) {
		
		
		var oLayout = new sap.ui.commons.layout.AbsoluteLayout({
			height : "210px"
		});
	    
	    
		var oLabel = new sap.m.Label({	text : "Notes :"	});
		var oNameInput =new sap.m.Input({
			//editable:'transientModel>/actions/description',
			width:"250px",
			//type : sap.m.InputType.Email,
			placeholder:"Enter notes",
				value:{
					path : 'transientModel>/notes',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		
		oLayout.addContent(oLabel, {left : "20px",	top : "25px"});
		oLayout.addContent(oNameInput, {left : "200px",	top : "15px"});
		
		
		
		
		
		
		oLabel = new sap.m.Label({text : "Need Name"});
	    var oItemSelectTemplate = new sap.ui.core.Item({
	           key:"{id}",
	           text : "{name}"
	        });     

	    var oSelect = new sap.m.Select({
	    	    
	    	    width:"250px",
	        	visible: true,
	        	enabled: true,
	        	selectedKey :'{transientModel>/needId}',
	         });
	    //var mm = sap.ui.getCore().getModel("needModel").oData;
	  
	    oSelect.setModel(sap.ui.getCore().getModel("NeedModel"));
	    oSelect.bindAggregation("items", "/", oItemSelectTemplate);
		
		
	    oLayout.addContent(oLabel, {left : "20px", top : "70px" 	});
		oLayout.addContent(oSelect, {left : "200px",	top : "60px"});

		
		
		oLabel = new sap.m.Label({	text : "PathwayId :"	});
		
		var oItemSelectTemplate1 = new sap.ui.core.Item({
	           key:"{id}",
	           text : "{name}"
	        });     

	    var oSelect1 = new sap.m.Select({
	    	    
	    	    width:"250px",
	        	visible: true,
	        	enabled: true,
	        	selectedKey :'{transientModel>/pathwayId}',
	         });
	    //var mm = sap.ui.getCore().getModel("needModel").oData;
	  
	    oSelect1.setModel(sap.ui.getCore().getModel("PathwayModel"));
	    oSelect1.bindAggregation("items", "/", oItemSelectTemplate1);
		
		
		oLayout.addContent(oLabel, {left : "20px", top : "115px" 	});
		oLayout.addContent(oSelect1, {left : "200px",	top : "105px"
		});
		
		var oControls = [];
		var iconBar = new sap.m.IconTabBar({
			id : this.createId("detail-tabs"),
			items:[new sap.m.IconTabFilter({
                key : "Create Roles Screen",
                icon : "sap-icon://employee"
             })],
			expanded : "{device>isNoPhone}",
			content : oLayout
		});

		// Register to before show
		var oObjecthead = new sap.m.ObjectHeader({
			id: this.createId("detail-head"),
			title: "Create UocGroup"
		});
		///oObjecthead.s
		oControls.push(oObjecthead,iconBar);
		return new sap.m.Page({
			//title : "Create UocGroup",
			showNavButton : "{device>/isPhone}",
			content : oControls,
			footer : new sap.m.Bar({
				id : this.createId("detail-footer"),
				contentRight : [ new sap.m.Button({
				
					text : "{i18n>SaveButtonText}",
					icon : "sap-icon://save",
					press : oController.handleSave
				}), new sap.m.Button({
					
					text : "{i18n>CancelButtonText}",
					icon : "sap-icon://cancel",
					press : oController.handleCancel
				}) ]
			})
		});
	}

});