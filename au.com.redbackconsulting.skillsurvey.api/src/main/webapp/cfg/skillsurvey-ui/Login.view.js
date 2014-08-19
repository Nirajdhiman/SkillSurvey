sap.ui.jsview("skillsurvey-ui.Login", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skillsurvey-ui.Login
	*/ 
	getControllerName : function() {
		return "skillsurvey-ui.Login";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skillsurvey-ui.Login
	*/ 
	createContent : function(oController) {
		
		var oLayout = new sap.ui.commons.layout.AbsoluteLayout({
			height : "400px"
		});

		var oLabel = new sap.m.Label({
			text : "Email Address",
		});
		var oNameInput =new sap.m.Input({
			id : "loginUserEmail",
			width:"250px",
			placeholder:"Enter Email Address",

		});
		
		oLayout.addContent(oLabel, {left : "20px", top : "110px" 	});
		oLayout.addContent(oNameInput, {left : "20px",	top : "130px"
		});

		oLabel = new sap.m.Label({
			text : "Password"
		});
		oNameInput=new sap.m.Input({
			id : "loginUserPassword",
			width:"250px",
			type : sap.m.InputType.Password,
			placeholder:"Enter Password.",
				value:{
					constraints : {
						minLength: 1,
						maxLength: 50
					}
				}
		});

		
		oLayout.addContent(oLabel, {left : "20px",	top : "185px"});
		oLayout.addContent(oNameInput, {left : "20px",	top : "205px"	});
         
		oLabel = new sap.m.Label({
			text : "Login As Admin ?"
		});
		var checkBox = new sap.m.CheckBox({
			id:"loginAsAdmin", 
			visible: true,
			enabled: true
		});
				
		oLayout.addContent(oLabel, {left : "20px",	top : "260px"});
		oLayout.addContent(checkBox, {left : "130px",	top : "245px"	});
      
		var oButton = new sap.m.Button({
			text : "Login",
			press:function(oEvent){
				sap.app.config.loginToApp();
							}
		});
		oLayout.addContent(oButton, {left : "100px",	top : "295px"	});
	    
            return new sap.m.Page({
			title: "Login Page",
			content: [oLayout],
			footer: new sap.m.Bar({
				id: this.createId("login-page-footer")
				})
		});
	}

});