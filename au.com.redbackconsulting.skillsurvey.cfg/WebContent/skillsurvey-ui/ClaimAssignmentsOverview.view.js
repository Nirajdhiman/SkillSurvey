sap.ui.jsview("skillsurvey-ui.ClaimAssignmentsOverview", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skillsurvey.OverviewRole
	*/ 
	getControllerName : function() {
		return "skillsurvey-ui.ClaimAssignmentsOverview";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skillsurvey.RoleOverview
	*/ 
	createContent : function(oController) {
		
		var oLayout = new sap.ui.commons.layout.AbsoluteLayout({
			height : "400px"
		});
		
		var oLabel =  new sap.m.Label({ text : "ClaimId"	});
		
		var oNameInput =new sap.m.Input({
			
			width:"250px",
			placeholder:"Enter ClaimId",
			editable:false,
				value:{
					path : 'transientModel>/claimId',
					type : 'sap.ui.model.type.String',
					constraints : {
						minLength: 1,
						maxLength: 20
					}
				},
			change:function(){
				//sap.app.PopUpModel.activateCompanyPopUpDialog("createAdminEventType");
			}
		});
		oLayout.addContent(oLabel, {left : "20px",	top : "25px"});
		oLayout.addContent(oNameInput, {left : "200px",	top : "15px"});
		
		oLabel = new sap.m.Label({	text : "RoleId :"	});
		oNameInput =new sap.m.Input({
			editable:false,
			width:"250px",
			
			placeholder:"Enter RoleId",
				value:{
					path : 'transientModel>/roleId',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		oLayout.addContent(oLabel, {left : "20px", top : "70px" 	});
		oLayout.addContent(oNameInput, {left : "200px",	top : "60px"
		});
		
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
			title: "Overview ClaimAssingments"
		});
		///oObjecthead.s
		oControls.push(oObjecthead,iconBar);
		return new sap.m.Page({
			//title : "Overview ClaimAssingments",
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