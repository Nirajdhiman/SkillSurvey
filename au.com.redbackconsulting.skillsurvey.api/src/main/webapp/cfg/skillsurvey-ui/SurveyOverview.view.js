sap.ui.jsview("skillsurvey-ui.SurveyOverview", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skillsurvey-ui.SurveyOverview
	*/ 
	getControllerName : function() {
		return "skillsurvey-ui.SurveyOverview";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skillsurvey-ui.SurveyOverview
	*/ 
	createContent : function(oController) {
		var oLayout = new sap.ui.commons.layout.AbsoluteLayout({
			height : "400px"
		});
		
		
		var oLabel = new sap.m.Label({	text : "Individual ID :"	});
		var oNameInput =new sap.m.Input({
			editable:false,
			width:"250px",
			
			placeholder:"Enter individual id",
				value:{
					path : 'transientModel>/individualId',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		oLayout.addContent(oLabel, {left : "20px",	top : "25px"});
		oLayout.addContent(oNameInput, {left : "200px",	top : "15px"});
		
		
		
		
		oLabel = new sap.m.Label({	text : "DAPSSCO ID :"	});
		oNameInput =new sap.m.Input({
			editable:false,
			width:"250px",
			
			placeholder:"Enter dapssco id",
				value:{
					path : 'transientModel>/dapssco_Id',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		oLayout.addContent(oLabel, {left : "20px", top : "70px" 	});
		oLayout.addContent(oNameInput, {left : "200px",	top : "60px"
		});
		
		
		
		oLabel = new sap.m.Label({	text : "Stared At :"	});
		oNameInput =new sap.m.Input({
			editable:false,
			width:"250px",
			
			placeholder:"Enter dapssco id",
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
			editable:false,
			width:"250px",
			
			placeholder:"Enter dapssco id",
				value:{
					path : 'transientModel>/completedAt',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		oLayout.addContent(oLabel, {left : "20px", top : "160px" 	});
		oLayout.addContent(oNameInput, {left : "200px",	top : "150px"});
		
		
		oLabel = new sap.m.Label({	text : "Pathway ID :"	});
		oNameInput =new sap.m.Input({
			editable:false,
			width:"250px",
			
			placeholder:"Enter dapssco id",
				value:{
					path : 'transientModel>/pathwayId',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		oLayout.addContent(oLabel, {left : "20px", top : "205px" 	});
		oLayout.addContent(oNameInput, {left : "200px",	top : "195px"});
		
		
		var oControls = [];
		var iconBar = new sap.m.IconTabBar({
			id : this.createId("detail-tabs"),
			items:[new sap.m.IconTabFilter({
                key : "Create New Administrators Screen",
                icon : "sap-icon://employee"
             })],
			expanded : "{device>isNoPhone}",
			content : oLayout
		});

		// Register to before show
		var oObjecthead = new sap.m.ObjectHeader({
			id: this.createId("detail-head"),
			title: "Overview Survey"
		});
		///oObjecthead.s
		oControls.push(oObjecthead,iconBar);
		return new sap.m.Page({
			//title : "Overview Survey",
			showNavButton : "{device>/isPhone}",
			content : oControls,
			footer : new sap.m.Bar({
				id : this.createId("detail-footer"),
				contentRight : [ new sap.m.Button({
					
					text : "{i18n>CancelButtonText}",
					icon : "sap-icon://cancel",
					press : oController.handleCancel
				}) ]
			})
		});
	}

});