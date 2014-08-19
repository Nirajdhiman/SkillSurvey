sap.ui.jsview("skillsurvey-ui.ClaimOverview", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skillsurvey-ui.ClaimOverview
	*/ 
	getControllerName : function() {
		return "skillsurvey-ui.ClaimOverview";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skillsurvey-ui.ClaimOverview
	*/ 
	createContent : function(oController) {
 	
		var oLayout = new sap.ui.commons.layout.AbsoluteLayout({
			height : "400px"
		});
		
	
		var oLabel = new sap.m.Label({	text : "Code :"	});
		var oNameInput =new sap.m.Input({
			editable:false,
			width:"250px",
			
			placeholder:"Enter description",
				value:{
					path : 'transientModel>/code',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		oLayout.addContent(oLabel, {left : "20px",	top : "25px"});
		oLayout.addContent(oNameInput, {left : "200px",	top : "15px"});
		
		var oControls = [];
		var iconBar = new sap.m.IconTabBar({
			id : this.createId("detail-tabs"),
			items:[new sap.m.IconTabFilter({
                key : "Overview Claim",
                icon : "sap-icon://employee"
             })],
			expanded : "{device>isNoPhone}",
			content : oLayout
		});

		// Register to before show
		var oObjecthead = new sap.m.ObjectHeader({
			id: this.createId("detail-head"),
			title: "Overview Claim"
		});
		///oObjecthead.s
		oControls.push(oObjecthead,iconBar);
		return new sap.m.Page({
			//title : "Overview Claim",
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