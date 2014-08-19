sap.ui.jsview("skillsurvey-ui.UocGroupMembersCreate", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skillsurvey.RoleCreate
	*/ 
	getControllerName : function() {
		return "skillsurvey-ui.UocGroupMembersCreate";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skillsurvey.RoleCreate
	*/ 
	createContent : function(oController) {
		var oLayout = new sap.ui.commons.layout.AbsoluteLayout({
			height : "210px"
		});
		
		
		var oLabel =  new sap.m.Label({ text : "Uoc_GroupId"	});

		var oItemSelectTemplate = new sap.ui.core.Item({
	           key:"{id}",
	           text : "{notes}"
	        });     

	    var oSelect = new sap.m.Select({
	    	    
	    	    width:"250px",
	        	visible: true,
	        	enabled: true,
	        	selectedKey :'{transientModel>/uoc_GroupId}',
	         });
	    //var mm = sap.ui.getCore().getModel("needModel").oData;
	  
	    oSelect.setModel(sap.ui.getCore().getModel("UocGroupModel"));
	    oSelect.bindAggregation("items", "/", oItemSelectTemplate);
	    
		oLayout.addContent(oLabel, {left : "20px",	top : "25px"});
		oLayout.addContent(oSelect, {left : "200px",	top : "15px"});
		
		oLabel = new sap.m.Label({	text : "Uoc_Id :"	});
		var oItemSelectTemplateUoc = new sap.ui.core.Item({
	           key:"{id}",
	           text : "{name}"
	        });
		 var oSelectUoc = new sap.m.Select({
	    	    
	    	    width:"250px",
	        	visible: true,
	        	enabled: true,
	        	selectedKey :'{transientModel>/uoc_Id}',
	         });
	    //var mm = sap.ui.getCore().getModel("needModel").oData;
	  
		 oSelectUoc.setModel(sap.ui.getCore().getModel("UocModel"));
		 oSelectUoc.bindAggregation("items", "/", oItemSelectTemplateUoc);
		
		
		
		oLayout.addContent(oLabel, {left : "20px", top : "70px" 	});
		oLayout.addContent(oSelectUoc, {left : "200px",	top : "60px"});
		
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
			title: "Create UocGroupMembers"
		});
		///oObjecthead.s
		oControls.push(oObjecthead,iconBar);
		return new sap.m.Page({
			//title : "Create UocGroupMembers",
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