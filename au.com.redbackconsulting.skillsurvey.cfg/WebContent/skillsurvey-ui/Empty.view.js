sap.ui.jsview("skillsurvey-ui.Empty", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skillsurvey-ui.Empty
	*/ 
	getControllerName : function() {
		return "skillsurvey-ui.Empty";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skillsurvey-ui.Empty
	*/ 
	createContent : function(oController) {
		
////		var ML=new sap.ui.commons.layout.MatrixLayout({});
////		
////		ML.createRow(new sap.ui.commons.TextView({
////			text : 'Add New User Click Here',
////			width : '500px',
////			semanticColor: sap.ui.commons.TextViewColor.Default,
////			design: sap.ui.commons.TextViewDesign.H2
////			}));
////			ML.createRow(new sap.ui.commons.Button({
////				text:"Create New User",
////				press:oController.oGo
////			}));
//		
//		var oButton = new sap.ui.commons.Button("button1",{
//			text: "Open Dialog", 
//			press:function(){
//				openDialog();
//			}
//});
//
//// Function to create the dialog
//function openDialog() {
//	var oDialog1 = new sap.ui.commons.Dialog();
//	oDialog1.setTitle("Create New User");
//	//var oText = new sap.ui.commons.TextView({text: "Hello World!"});
//	//oDialog1.addContent(oText);
//	var ML=new sap.ui.commons.layout.MatrixLayout({});
//	ML.createRow(new sap.ui.commons.Label({text:"UserId"}),new sap.ui.commons.TextField({
//		id:"userId"
//	}));
//	ML.createRow(new sap.ui.commons.Label({text:"First Name"}),new sap.ui.commons.TextField({
//		id:"firstName"
//	}));
//	ML.createRow(new sap.ui.commons.Label({text:"Last Name"}),new sap.ui.commons.TextField({
//		id:"lastName"
//	}));
//	ML.createRow(new sap.ui.commons.Label({text:"EmailAddress"}),new sap.ui.commons.TextField({
//		id:"email"
//	}));
////	ML.createRow(new sap.ui.commons.Button({text:"Save",
////		press:oController.add}));
//	oDialog1.addContent(ML);
//	oDialog1.addButton(new sap.ui.commons.Button({text: "OK", press:function(oEvent){
//		
//		alert("Go");
//		
//		var bundle = sap.ui.getCore().getModel("i18n").getResourceBundle();
//		sap.m.MessageBox.confirm(bundle.getText("SaveDialogMsg"),
//				function(oAction) {
//					if (sap.m.MessageBox.Action.OK === oAction) {
//						var successMsg = bundle.getText("SaveDialogSuccesMsg");
//						sap.m.MessageToast.show(successMsg);
//					
//						var oModel  = new sap.ui.model.json.JSONModel();
//						var data={
//								
//								userId : sap.ui.getCore().byId("userId").getValue(),
//								firstName : sap.ui.getCore().byId("firstName").getValue(),
//								lastName :sap.ui.getCore().byId("lastName").getValue(),
//								email : sap.ui.getCore().byId("email").getValue()
//								
//					};
//						
//						oModel.setData(data);
//						alert(data.firstName);
//						alert(oModel.getJSON());
//						
//						
//						
//						
//						
//						
//						
//						
//						
//
//								var URL = window.location.protocol+ "//"+ window.location.host+ "/au.com.redbackconsulting.scheduler.api/api/user/newuser/";
//								
//								$.ajax({
//											type : 'POST',
//											url : URL,
//											contentType :  "application/json",
//											data : oModel.getJSON(),
//											datatype : 'json',
//											crossDomain : false,
//											cache : false,
//											success : function(data) {
//												alert(" Successfully"+ data);
//												sap.m.MessageToast.show(successMsg);
//											},
//											error : function(e,textStatus,errorThrown) {
//												alert("error in ajax call"+ "="+ e.message+ "="+ errorThrown+ "="+ textStatus);
//											}
//										});
//
//							}
//						}, bundle.getText("SaveDialogTitle"));
//		
//		oDialog1.close();
//		
//					
//		}}));
//	oDialog1.open();
//};

		
		
		
 		return new sap.m.Page({
			title: "Empty",
			//content: [oButton],
			content: [],
			footer: new sap.m.Bar({
				id: this.createId("master-footer")
				})
		});
	}

});