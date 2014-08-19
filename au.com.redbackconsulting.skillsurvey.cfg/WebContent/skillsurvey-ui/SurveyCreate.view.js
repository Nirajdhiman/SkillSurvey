sap.ui.jsview("skillsurvey-ui.SurveyCreate", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skillsurvey-ui.SurveyCreate
	*/ 
	getControllerName : function() {
		return "skillsurvey-ui.SurveyCreate";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skillsurvey-ui.SurveyCreate
	*/ 
	createContent : function(oController) {
		var oLayout = new sap.ui.commons.layout.AbsoluteLayout({
			height : "400px"
		});
			
		
		var oLabel = new sap.m.Label({	text : "Individual ID :"	});
		
		var oItemSelectTemplate = new sap.ui.core.Item({
	           key:"{id}",
	           text : "{name}"
	        });     

	    var oSelect = new sap.m.Select({
	    	    
	    	    width:"250px",
	        	visible: true,
	        	enabled: true,
	        	selectedKey :'{transientModel>/individualId}',
	         });
	    //var mm = sap.ui.getCore().getModel("needModel").oData;
	  
	    oSelect.setModel(sap.ui.getCore().getModel("IndividualModel"));
	    oSelect.bindAggregation("items", "/", oItemSelectTemplate);
	    
		oLayout.addContent(oLabel, {left : "20px",	top : "25px"});
		oLayout.addContent(oSelect, {left : "200px",	top : "15px"});
		
		
		
		
		
		
		
		
		
		oLabel = new sap.m.Label({	text : "DAPSSCO ID :"	});
		var oItemSelectTemplate2 = new sap.ui.core.Item({
	           key:"{id}",
	           text : "{occupationId}"
	        });     

	    var oSelect2 = new sap.m.Select({
	    	    
	    	    width:"250px",
	        	visible: true,
	        	enabled: true,
	        	selectedKey :'{transientModel>/dapssco_Id}',
	         });
	    //var mm = sap.ui.getCore().getModel("needModel").oData;
	  
	    oSelect2.setModel(sap.ui.getCore().getModel("DapsscoModel"));
	    oSelect2.bindAggregation("items", "/", oItemSelectTemplate2);
		
		
		oLayout.addContent(oLabel, {left : "20px", top : "70px" 	});
		oLayout.addContent(oSelect2, {left : "200px",	top : "60px"});
		
		
		
		
		
		
		
		
		
		
		
		
		
		oLabel = new sap.m.Label({	text : "Started At :"	});
	
		var	oNameInput =new sap.m.Input({
			//editable:'transientModel>/actions/description',
			width:"250px",
			//type : sap.m.InputType.Email,
			placeholder:"Enter loginPassword",
				value:{
					path : 'transientModel>/startedAt',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		
		oLayout.addContent(oLabel, {left : "20px", top : "115px" 	});
		oLayout.addContent(oNameInput, {left : "200px",	top : "105px"
		});
		
		
		
		
		
		
		oLabel = new sap.m.Label({	text : "Completed At :"	});
		oNameInput =new sap.m.Input({
			//editable:'transientModel>/actions/description',
			width:"250px",
			//type : sap.m.InputType.Email,
			placeholder:"Enter departmentId",
				value:{
					path : 'transientModel>/completedAt',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		oLayout.addContent(oLabel, {left : "20px", top : "160px" 	});
		oLayout.addContent(oNameInput, {left : "200px",	top : "150px"
		});
		
		
		
		
		
		
		
		
		
		oLabel = new sap.m.Label({	text : "Pathway ID :"	});
		var oItemSelectTemplate3 = new sap.ui.core.Item({
	           key:"{id}",
	           text : "{name}"
	        });     

	    var oSelect3 = new sap.m.Select({
	    	    
	    	    width:"250px",
	        	visible: true,
	        	enabled: true,
	        	selectedKey :'{transientModel>/pathwayId}',
	         });
	    //var mm = sap.ui.getCore().getModel("needModel").oData;
	  
	    oSelect3.setModel(sap.ui.getCore().getModel("PathwayModel"));
	    oSelect3.bindAggregation("items", "/", oItemSelectTemplate3);
		
		oLayout.addContent(oLabel, {left : "20px", top : "205px" 	});
		oLayout.addContent(oSelect3, {left : "200px",	top : "195px"});
		
		
		
	
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
			title: "Create Survey"
		});
		///oObjecthead.s
		oControls.push(oObjecthead,iconBar);
		return new sap.m.Page({
			//title : "Create Survey",
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