sap.ui.jsview("skillsurvey-ui.CreateRole", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skillsurvey.CreateRole
	*/ 
	getControllerName : function() {
		return "skillsurvey-ui.CreateRole";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skillsurvey.CreateRole
	*/ 
	createContent : function(oController) {
		var oLayout = new sap.ui.commons.layout.AbsoluteLayout({
			height : "610px"
		});
		var oLabel =  new sap.m.Label({ text : "Id :" 	});
		
		var oNameInput =new sap.m.Input({
			width:"250px",
			//editable:'transientModel>/actions/id',
			//enabled:'transientModel>/actions/id',
			placeholder:"Enter Id",
			//type : sap.m.InputType.Text,
			value:{
					path : 'transientModel>/id',
					constraints : {
						minLength: 1,
						maxLength: 20
					}
				},
				liveChange :function(evt){
				//sap.app.PopUpModel.activateCompanyPopUpDialog("createAdminCompanyCode");
				
	
			}
		});
		oLayout.addContent(oLabel, {left : "20px",	top : "25px"});
		oLayout.addContent(oNameInput, {left : "200px",	top : "15px"});
		//End Company Code
		
		oLabel =  new sap.m.Label({ text : "Name"	});
		
		oNameInput =new sap.m.Input({
			
			width:"250px",
			placeholder:"Enter Name",
			//editable:'transientModel>/actions/name',
				value:{
					path : 'transientModel>/name',
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
		oLayout.addContent(oLabel, {left : "20px",	top : "70px"});
		oLayout.addContent(oNameInput, {left : "200px",	top : "60px"});
		
		oLabel = new sap.m.Label({	text : "Description :"	});
		oNameInput =new sap.m.Input({
			//editable:'transientModel>/actions/description',
			width:"250px",
			//type : sap.m.InputType.Email,
			placeholder:"Enter description",
				value:{
					path : 'transientModel>/description',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		oLayout.addContent(oLabel, {left : "20px", top : "115px" 	});
		oLayout.addContent(oNameInput, {left : "200px",	top : "105px"
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
			title: "Overview Role"
		});
		///oObjecthead.s
		oControls.push(oObjecthead,iconBar);
		return new sap.m.Page({
			title : "Create Role",
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