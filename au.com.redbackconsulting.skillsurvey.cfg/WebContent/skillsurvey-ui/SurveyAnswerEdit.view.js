sap.ui.jsview("skillsurvey-ui.SurveyAnswerEdit", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skillsurvey-ui.SurveyAnswerEdit
	*/ 
	getControllerName : function() {
		return "skillsurvey-ui.SurveyAnswerEdit";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skillsurvey-ui.SurveyAnswerEdit
	*/ 
	createContent : function(oController) {
		var oLayout = new sap.ui.commons.layout.AbsoluteLayout({
			height : "400px"
		});
		
		var oLabel =  new sap.m.Label({ text : "UOC QuestionID"	});
		
		
		
		
		var oItemSelectTemplate = new sap.ui.core.Item({
	           key:"{id}",
	           text : "{name}"
	        });     

	    var oSelect = new sap.m.Select({
	    	    
	    	    width:"250px",
	        	visible: true,
	        	enabled: true,
	        	selectedKey :'{transientModel>/uoc_QuestionId}',
	         });
	    //var mm = sap.ui.getCore().getModel("needModel").oData;
	  
	    oSelect.setModel(sap.ui.getCore().getModel("UocModel"));
	    oSelect.bindAggregation("items", "/", oItemSelectTemplate);
	    
		oLayout.addContent(oLabel, {left : "20px",	top : "25px"});
		oLayout.addContent(oSelect, {left : "200px",	top : "15px"});
		
		oLabel = new sap.m.Label({	text : "Survey ID :"	});
	var	oItemSelectTemplate1 = new sap.ui.core.Item({
	           key:"{id}",
	           text : "{name}"
	        });     

	    var oSelect1 = new sap.m.Select({
	    	    
	    	    width:"250px",
	        	visible: true,
	        	enabled: true,
	        	selectedKey :'{transientModel>/surveyId}',
	         });
	    //var mm = sap.ui.getCore().getModel("needModel").oData;
	  
	    oSelect1.setModel(sap.ui.getCore().getModel("IndividualModel"));
	    oSelect1.bindAggregation("items", "/", oItemSelectTemplate1);
		
		oLayout.addContent(oLabel, {left : "20px", top : "70px" 	});
		oLayout.addContent(oSelect1, {left : "200px",	top : "60px"});
		var oLabel = new sap.m.Label({text:"Value :"});
		var oNameInput =new sap.m.Input({
			//editable:'transientModel>/actions/description',
			width:"250px",
			//type : sap.m.InputType.Email,
			placeholder:"Enter Value",
				value:{
					path : 'transientModel>/value',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		oLayout.addContent(oLabel, {left : "20px", top : "115px" 	});
		oLayout.addContent(oNameInput, {left : "200px",	top : "105px"
		});
	
		oLabel = new sap.m.Label({	text : "Answered At :"	});
		oNameInput =new sap.m.Input({
			//editable:'transientModel>/actions/description',
			width:"250px",
			//type : sap.m.InputType.Email,
			placeholder:"Enter AnswerAt",
				value:{
					path : 'transientModel>/answeredAt',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		oLayout.addContent(oLabel, {left : "20px", top : "160px" 	});
		oLayout.addContent(oNameInput, {left : "200px",	top : "150px"
		});
		
		var oControls = [];
		var iconBar = new sap.m.IconTabBar({
			id : this.createId("detail-tabs"),
			items:[new sap.m.IconTabFilter({
                key : "Edit Survey Answer",
                icon : "sap-icon://employee"
             })],
			expanded : "{device>isNoPhone}",
			content : oLayout
		});

		// Register to before show
		var oObjecthead = new sap.m.ObjectHeader({
			id: this.createId("detail-head"),
			title: "Edit Survey Answer"
		});
		///oObjecthead.s
		oControls.push(oObjecthead,iconBar);
		return new sap.m.Page({
			//title : "Create Individual",
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