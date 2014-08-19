sap.ui.jsview("skillsurvey-ui.IndividualOverview", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skillsurvey.OverviewRole
	*/ 
	getControllerName : function() {
		return "skillsurvey-ui.IndividualOverview";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skillsurvey.RoleOverview
	*/ 
	createContent : function(oController) {
		
		var oLayout = new sap.ui.commons.layout.AbsoluteLayout({
			height : "400px"
		});
		
		var oLabel =  new sap.m.Label({ text : "Name"	});
		
		var oNameInput =new sap.m.Input({
			
			width:"250px",
			placeholder:"Enter name",
			editable:false,
				value:{
					path : 'transientModel>/name',
					type : 'sap.ui.model.type.String',
					constraints : {
						minLength: 1,
						maxLength: 20
					}
				},
			change:function(){
				
			}
		});
		oLayout.addContent(oLabel, {left : "20px",	top : "25px"});
		oLayout.addContent(oNameInput, {left : "200px",	top : "15px"});
		
		oLabel = new sap.m.Label({	text : "Gender :"	});
		oNameInput =new sap.m.Input({
			editable:false,
			width:"250px",
			
			placeholder:"Enter gender",
				value:{
					path : 'transientModel>/gender',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		oLayout.addContent(oLabel, {left : "20px", top : "70px" 	});
		oLayout.addContent(oNameInput, {left : "200px",	top : "60px"
		});
		
		oLabel = new sap.m.Label({	text : "LoginPassword :"	});
		oNameInput =new sap.m.Input({
			editable:false,
			width:"250px",
			placeholder:"Enter Login Password",
				value:{
					path : 'transientModel>/loginPassword',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		oLayout.addContent(oLabel, {left : "20px", top : "115px" 	});
		oLayout.addContent(oNameInput, {left : "200px",	top : "105px"
		});
		
		
		
		oLabel = new sap.m.Label({	text : "DepartmentId :"	});
		oNameInput =new sap.m.Input({
			editable:false,
			width:"250px",
			placeholder:"Enter Department Id",
				value:{
					path : 'transientModel>/departmentId',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		oLayout.addContent(oLabel, {left : "20px", top : "160px" 	});
		oLayout.addContent(oNameInput, {left : "200px",	top : "150px"
		});
		
		
		oLabel = new sap.m.Label({	text : "FunctionId :"	});
		oNameInput =new sap.m.Input({
			editable:false,
			width:"250px",
			placeholder:"Enter function Id",
				value:{
					path : 'transientModel>/functionId',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		oLayout.addContent(oLabel, {left : "20px", top : "205px" 	});
		oLayout.addContent(oNameInput, {left : "200px",	top : "195px"
		});
		
		
		
		
		
		
		
		oLabel = new sap.m.Label({	text : "Occupationid :"	});
		oNameInput =new sap.m.Input({
			editable:false,
			width:"250px",
			placeholder:"Enter occupation Id",
				value:{
					path : 'transientModel>/occupationId',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		oLayout.addContent(oLabel, {left : "20px", top : "250px" 	});
		oLayout.addContent(oNameInput, {left : "200px",	top : "240px"
		});
		
		
		oLabel = new sap.m.Label({	text : "Level Id :"	});
		oNameInput =new sap.m.Input({
			editable:false,
			width:"250px",
			placeholder:"Enter levelid",
				value:{
					path : 'transientModel>/levelId',
					constraints : {
						minLength: 1,
						maxLength: 100
					}
				}
		});
		
		oLayout.addContent(oLabel, {left : "20px", top : "295px" 	});
		oLayout.addContent(oNameInput, {left : "200px",	top : "285px"
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
			title: "Overview Individual"
		});
		///oObjecthead.s
		oControls.push(oObjecthead,iconBar);
		return new sap.m.Page({
			//title : "Overview Individual",
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