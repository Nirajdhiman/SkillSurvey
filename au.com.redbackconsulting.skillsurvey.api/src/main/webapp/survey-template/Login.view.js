sap.ui.jsview("survey-template.Login", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.Login
	*/ 
	getControllerName : function() {
		return "survey-template.Login";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.Login
	*/ 
	createContent : function(oController) {
		var arr=[];
		arr.push(new sap.ui.commons.Label({text:"Login page"}));
		arr.push(new sap.ui.commons.Button({text:"Login",
			press:function(evt){
				var bus = sap.ui.getCore().getEventBus();
				bus.publish("nav", "to", {
					id : "Home",

				});
			}
		}));
		return arr;

	}

});
